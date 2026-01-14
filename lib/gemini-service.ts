import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { AssessmentData, AiInsight } from "@/types/calculator";

const apiKey = process.env.GOOGLE_GEMINI_API_KEY;

if (!apiKey) {
  console.warn('GOOGLE_GEMINI_API_KEY not configured - AI insights will not be generated');
}

const client = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export const generateDynamicInsights = async (data: AssessmentData): Promise<AiInsight> => {
  if (!client || !apiKey) {
    // Return fallback insights if API not configured
    return getFallbackInsights(data);
  }

  const prompt = `
    You are Kyle, a professional window cleaning expert with 10+ years experience serving Northeast Pennsylvania.

    CONTEXT: You are analyzing a homeowner's answers from an ONLINE QUOTE FORM. You have NOT physically seen their property yet. This is a remote assessment based on their responses.

    Based on their answers about:
    - Home size: ${data.homeSize}
    - ZIP code: ${data.zipCode}
    - Last cleaned: ${data.lastCleaned}
    - Track condition: ${data.trackCondition}
    - Stories: ${data.stories}

    Generate insights using this TONE:
    - Sound like you're analyzing PATTERNS from 500+ homes in NEPA.
    - Use phrases like 'based on what you told me', 'homes like yours', 'in my experience', 'I've seen this pattern'.
    - NEVER say 'I can see', 'upon inspection', 'looking at your property'.
    - You're making EDUCATED PREDICTIONS based on experience, not observations.
    - Be confident but acknowledge you'll confirm details on-site.
    - Reference NEPA-specific challenges: hard water from coal region wells, salt residue from winter roads, pollen/forest debris, historic window frame issues (1920s-1950s homes).

    EXAMPLES OF GOOD PHRASING:
    ✓ 'Based on your answers, I'm seeing a pattern...'
    ✓ 'Homes in ${data.zipCode} that go ${data.lastCleaned} without cleaning usually...'
    ✓ 'In my experience with ${data.homeSize} properties, tracks in ${data.trackCondition} condition typically...'
    ✓ 'Here's what I know from doing 500+ homes like yours in Northeast PA...'
    ✓ 'The combo of ${data.stories} stories + ${data.lastCleaned} maintenance gap tells me...'

    Output MUST be valid JSON with these exact fields:
    1. observation (150-200 chars): What you EXPECT to find based on their answers. Sound like pattern recognition. Reference specific inputs.
    2. riskFactor (100-150 chars): What could go wrong if they wait. Use 'typically' or 'usually' language.
    3. financialImpact (100-150 chars): Cost of waiting vs. acting now. Based on patterns you've seen.
    4. proTip (150-200 chars): Actionable advice based on their situation. Sound helpful, not salesy.
    5. healthScore: An integer 0-100 reflecting the predicted property condition.

    Make it sound human, punchy, and valuable. Like a text from a pro who actually cares about their house.
  `;

  try {
    const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });

    const response = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: SchemaType.OBJECT,
          properties: {
            observation: { type: SchemaType.STRING },
            riskFactor: { type: SchemaType.STRING },
            financialImpact: { type: SchemaType.STRING },
            proTip: { type: SchemaType.STRING },
            healthScore: { type: SchemaType.INTEGER },
          },
          required: ["observation", "riskFactor", "financialImpact", "proTip", "healthScore"],
        },
      },
    });

    const responseText = response.response.text();
    const parsed = JSON.parse(responseText);

    return {
      observation: parsed.observation || "",
      riskFactor: parsed.riskFactor || "",
      financialImpact: parsed.financialImpact || "",
      proTip: parsed.proTip || "",
      healthScore: Math.min(100, Math.max(0, parsed.healthScore || 60)),
    };
  } catch (error) {
    console.error("Error generating AI insights:", error);
    return getFallbackInsights(data);
  }
};

/**
 * Calculate dynamic health score based on multiple property factors
 * Accounts for: condition, maintenance history, property size, and stories
 */
function calculateHealthScore(data: AssessmentData): number {
  // Track condition scoring (primary factor: current state)
  const conditionScores: Record<string, number> = {
    clean: 90,      // Excellent starting point
    dusty: 70,      // Acceptable but needs attention
    dirty: 45,      // Below maintenance standard
    neglected: 20,  // Critical condition
  };

  // Last cleaned scoring (maintenance history)
  const maintenanceScores: Record<string, number> = {
    recent: 0,      // No penalty - recently cleaned
    '1-2yr': -15,   // Minor concern
    'over2yr': -30, // Significant concern
    never: -45,     // Critical concern
  };

  // Property size complexity factor (larger = more surface area = harder to maintain)
  const sizeComplexity: Record<string, number> = {
    small: 0,       // Baseline
    medium: -5,     // Slightly more complex
    large: -10,     // More complex
    xl: -15,        // Most complex
  };

  // Stories complexity factor (height = difficulty + exposure)
  const storiesComplexity: Record<string, number> = {
    '1': 0,         // Baseline (easier to access)
    '2': -8,        // More height
    '3+': -15,      // Most height exposure
  };

  // Calculate base score from condition
  const conditionScore = conditionScores[data.trackCondition] || 60;

  // Apply maintenance history adjustment
  const maintenanceAdjustment = maintenanceScores[data.lastCleaned] || -20;

  // Apply property complexity factors
  const sizeAdjustment = sizeComplexity[data.homeSize] || -5;
  const storiesAdjustment = storiesComplexity[data.stories] || -8;

  // Calculate raw health score
  let rawScore = conditionScore + maintenanceAdjustment + sizeAdjustment + storiesAdjustment;

  // Apply resilience boost (properties that maintain get slight boost)
  if (data.lastCleaned === 'recent') {
    rawScore += 5; // Recent maintenance = better care
  }

  // Clamp score to 0-100 range
  const healthScore = Math.max(0, Math.min(100, Math.round(rawScore)));

  return healthScore;
}

/**
 * Fallback insights when Gemini API is not available or fails
 */
function getFallbackInsights(data: AssessmentData): AiInsight {
  // Calculate dynamic health score
  const healthScore = calculateHealthScore(data);

  // Generate insights based on health score
  const getHealthStatus = (score: number): string => {
    if (score > 85) return "excellent";
    if (score > 70) return "good";
    if (score > 50) return "maintenance required";
    return "urgent attention needed";
  };

  const status = getHealthStatus(healthScore);
  const locationContext = data.zipCode ? `in ${data.zipCode}` : 'in Northeast PA';
  const lastCleanedContext = data.lastCleaned === 'never' ? 'never been professionally cleaned' : `last cleaned ${data.lastCleaned}`;

  return {
    observation: `Based on what you told me—${data.homeSize} home ${locationContext} with ${data.trackCondition} tracks that have ${lastCleanedContext}—I'm expecting to find buildup in the channels and potential mineral deposits typical for NEPA properties.`,
    riskFactor: `Properties in ${status} condition typically see accelerated seal degradation from hard water mineral buildup and winter salt residue. Waiting usually costs more in repairs than proactive maintenance.`,
    financialImpact: `In my experience with homes like yours, regular cleaning prevents $200-500+ in annual preventable damage from seal failure and frame deterioration. Waiting often doubles that cost.`,
    proTip: `Northeast PA's mineral-heavy water and winter road salt make ${data.homeSize} properties like yours ideal candidates for 2-3 cleanings per year. This timing prevents the hard water etching you see on older, neglected windows throughout the region.`,
    healthScore,
  };
}
