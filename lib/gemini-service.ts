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
 * Fallback insights when Gemini API is not available or fails
 */
function getFallbackInsights(data: AssessmentData): AiInsight {
  const conditionScores: Record<string, number> = {
    clean: 85,
    dusty: 70,
    dirty: 50,
    neglected: 30,
  };

  const lastCleanedScores: Record<string, number> = {
    recent: 10,
    '1-2yr': 20,
    'over2yr': 30,
    never: 40,
  };

  const baseScore = conditionScores[data.trackCondition] || 60;
  const ageAdjustment = lastCleanedScores[data.lastCleaned] || 20;
  const healthScore = Math.max(0, Math.min(100, baseScore - ageAdjustment + 40));

  return {
    observation: `Based on what you told me—${data.homeSize} home in ${data.zipCode} with ${data.trackCondition} tracks and last cleaned ${data.lastCleaned}—I'm expecting to find significant buildup in the channels and possible seal degradation starting.`,
    riskFactor: `Homes that wait in this condition typically see seal damage within 12-18 months, which usually costs $200-300 per window to repair.`,
    financialImpact: `In my experience, waiting another season typically leads to $500-1000+ in preventable repairs from seal and frame damage.`,
    proTip: `Properties like yours in Northeast PA should ideally get cleaned 2-3 times per year to prevent seal cracking and frame rot from hard water residue and winter salt. This keeps maintenance costs down long-term.`,
    healthScore: Math.round(healthScore),
  };
}
