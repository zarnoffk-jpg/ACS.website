import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/app/components/QuoteForm';
import { notFound } from 'next/navigation';

// City data with unique content for each location
const cityData: Record<string, {
  name: string;
  county: string;
  zip: string;
  lat: string;
  lng: string;
  neighborhoods: string[];
  landmarks: string[];
  challenges: { title: string; description: string }[];
  testimonials: { quote: string; author: string; neighborhood: string }[];
  faqs: { question: string; answer: string }[];
  intro: string[];
  whyChooseUs: string[];
  adjacentCities?: { name: string; slug: string }[];
}> = {
  'scranton': {
    name: 'Scranton',
    county: 'Lackawanna County',
    zip: '18503',
    lat: '41.4090',
    lng: '-75.6624',
    neighborhoods: ['Green Ridge', 'Hill Section', 'South Side', 'North Scranton', 'West Side', 'Minooka', 'Hyde Park'],
    landmarks: ['Nay Aug Park', 'Steamtown Mall', 'Lackawanna County Courthouse', 'University of Scranton'],
    challenges: [
      {
        title: 'Coal Region Hard Water',
        description: 'Many Scranton homes experience mineral buildup from the region\'s water supply. Our deionized water system specifically addresses these stubborn deposits that regular cleaning can\'t remove. We\'ve perfected techniques over 10 years to maintain clean windows and prevent future hard water staining.'
      },
      {
        title: 'Historic District Windows',
        description: 'Over 60% of our Scranton clients live in historic districts like the Hill Section, where turn-of-the-century homes feature original wavy glass and wooden frames. We\'re trained in period-appropriate cleaning methods that preserve these irreplaceable windows without causing damage. Kyle personally handles all historic home cleanings to ensure proper care.'
      },
      {
        title: 'Steep Terrain Challenges',
        description: 'Scranton\'s hillside locations require specialized safety equipment and techniques. Homes in areas like Green Ridge and the Hill Section often have dramatic elevation changes. Our professional-grade equipment and OSHA safety training allow us to safely clean windows on steep properties where DIY attempts would be dangerous.'
      }
    ],
    testimonials: [
      {
        quote: 'Kyle and Pamela did an incredible job on our 1920s Victorian on Monroe Avenue. They were so careful with the original windows and the results were amazing. You can really tell they know what they\'re doing with historic homes.',
        author: 'Jennifer M.',
        neighborhood: 'Green Ridge'
      },
      {
        quote: 'Best window cleaning service in Scranton! They cleaned all 40 windows at our office building on Lackawanna Avenue. Professional, punctual, and very reasonably priced. We now have them on a monthly schedule.',
        author: 'Mike R.',
        neighborhood: 'Downtown Business Owner'
      },
      {
        quote: 'We\'ve been using Alexander\'s for 3 years now. Living near Nay Aug Park means we get a lot of tree debris, and they always leave our windows spotless. They\'re like clockwork—show up when they say they will and do fantastic work.',
        author: 'Sarah K.',
        neighborhood: 'South Side'
      }
    ],
    faqs: [
      {
        question: 'How much does window cleaning cost in Scranton?',
        answer: 'Residential window cleaning in Scranton typically ranges from $150-$400 depending on home size, number of windows, and whether you need interior, exterior, or both. Historic homes may require additional care. We offer free estimates and will provide an exact quote after assessing your specific needs.'
      },
      {
        question: 'Do you work on historic homes in the Hill Section?',
        answer: 'Absolutely! Over 60% of our Scranton clients live in historic districts. We\'re specially trained in cleaning wavy glass, original wooden frames, and Victorian-era windows. Kyle personally handles all historic home cleanings to ensure these irreplaceable windows receive proper care.'
      },
      {
        question: 'Can you handle hard water stains common in Scranton?',
        answer: 'Yes! Hard water staining is extremely common in the Scranton area due to our coal region water supply. We use a deionized water system specifically designed to remove mineral deposits that cause those cloudy, white stains. If windows have old hard water stains or etching that regular cleaning can\'t remove, professional restoration services may be needed—though that\'s beyond our maintenance cleaning scope.'
      },
      {
        question: 'Do you clean windows in winter?',
        answer: 'We offer year-round service in Scranton. We use specialized solutions that work effectively in cold weather, though we may reschedule in extreme conditions (below 20°F or during ice storms) for safety reasons. Many Scranton clients actually prefer winter cleaning because there\'s less pollen and the cooler weather prevents streaking.'
      },
      {
        question: 'What areas of Scranton do you serve?',
        answer: 'We serve all of Scranton including Green Ridge, Hill Section, South Side, North Scranton, West Side, Minooka, Hyde Park, and surrounding areas. We\'ve been working in these neighborhoods since 2015 and know the area well.'
      }
    ],
    intro: [
      'Located in the heart of Northeast Pennsylvania, Scranton presents unique challenges for window maintenance. Our industrial history means airborne particles can etch glass over time, while the region\'s hard water leaves stubborn mineral deposits. Spring brings heavy pollen from the surrounding Pocono Mountains, and winter road salt creates a film that regular cleaning can\'t remove.',
      'Since 2015, Kyle and Pamela have been providing professional window cleaning services throughout Scranton\'s diverse neighborhoods. From Victorian mansions in the Hill Section to modern homes in Green Ridge, we understand the specific needs of Scranton architecture. We\'re not a national franchise—we\'re your neighbors, personally invested in delivering exceptional service to our community.',
      'Our specialized techniques address Scranton\'s specific environmental challenges. We use deionized water systems for hard water stain removal, eco-friendly solutions safe for the Lackawanna River watershed, and period-appropriate methods for the city\'s abundant historic homes. With 500+ satisfied customers across the region and a perfect 5.0-star rating, we\'ve become Scranton\'s trusted choice for professional window cleaning.'
    ],
    whyChooseUs: [
      '<strong>Decade of Local Experience:</strong> We\'ve been cleaning windows in Scranton since 2015. We know which neighborhoods have hard water issues, which homes have historic windows requiring special care, and how to handle the environmental challenges specific to our coal region climate.',
      '<strong>Historic Home Specialists:</strong> Scranton\'s Hill Section, Green Ridge, and downtown areas feature some of Pennsylvania\'s finest Victorian and turn-of-the-century architecture. We\'re trained in preserving original wavy glass, wooden window frames, and delicate period details that require gentle, knowledgeable handling.',
      '<strong>Hard Water Problem Solvers:</strong> If you\'ve noticed cloudy, white residue on your windows that won\'t come off, you\'re experiencing Scranton\'s notorious hard water issue. Our deionized water system prevents future mineral buildup. However, windows with permanent hard water etching may require professional restoration services beyond standard maintenance cleaning.',
      '<strong>Safety-First Approach:</strong> Many Scranton homes sit on hillsides with challenging elevation changes. We use professional-grade safety equipment and follow OSHA guidelines to safely clean windows that would be dangerous for homeowners to attempt themselves.'
    ],
    adjacentCities: [
      { name: 'Clarks Summit', slug: 'clarks-summit' },
      { name: 'Waverly Township', slug: 'waverly-township' },
      { name: 'Dunmore', slug: 'dunmore' },
      { name: 'Glenburn', slug: 'glenburn' },
      { name: 'Dalton', slug: 'dalton' },
      { name: 'Glenmaura', slug: 'glenmaura' }
    ]
  },
  'clarks-summit': {
    name: 'Clarks Summit',
    county: 'Lackawanna County',
    zip: '18411',
    lat: '41.4887',
    lng: '-75.7063',
    neighborhoods: ['Summit Pointe', 'Newton Highlands', 'Glenburn Woods', 'Vintage Estates'],
    landmarks: ['Lackawanna State Park', 'Summit Pointe Golf Club', 'Clarks Summit State Hospital', 'Abington Community Library'],
    challenges: [
      {
        title: 'Wooded Area Debris',
        description: 'Clarks Summit\'s beautiful tree-lined streets and proximity to Lackawanna State Park mean constant exposure to tree sap, pollen, and leaf debris. Our specialized cleaning solutions break down organic materials without harsh chemicals, protecting both your windows and the local ecosystem.'
      },
      {
        title: 'Large Home Windows',
        description: 'Clarks Summit features many upscale properties with extensive window installations, including great rooms with cathedral ceilings and multi-story bay windows. We have the equipment and expertise to safely clean even the most challenging architectural features, including hard-to-reach dormers and skylights.'
      },
      {
        title: 'Seasonal Pollen Challenges',
        description: 'Being situated near the Poconos, Clarks Summit experiences heavy spring pollen season. Our water-fed pole system uses purified water that dries spot-free, preventing the yellow pollen stains that regular cleaning can leave behind.'
      }
    ],
    testimonials: [
      {
        quote: 'Our home has 30+ windows and a two-story great room that we could never clean ourselves. Alexander\'s does a phenomenal job and the price is very reasonable. They\'re always professional and respectful of our home.',
        author: 'Tom & Lisa W.',
        neighborhood: 'Summit Pointe'
      },
      {
        quote: 'We\'ve tried other window cleaners, but Alexander\'s is the only one that gets our windows truly streak-free. Living near the woods, we were dealing with constant debris. They solved the problem and now come quarterly.',
        author: 'Robert D.',
        neighborhood: 'Newton Highlands'
      },
      {
        quote: 'Kyle and Pamela are wonderful to work with. They cleaned our office building windows and did such a great job that we now have them clean our home too. Highly recommend!',
        author: 'Susan M.',
        neighborhood: 'Business Owner, Clarks Summit'
      }
    ],
    faqs: [
      {
        question: 'How much does window cleaning cost in Clarks Summit?',
        answer: 'For Clarks Summit homes, pricing typically ranges from $200-$500 depending on the size and number of windows. Many homes in Clarks Summit have larger windows and more square footage than average, which affects pricing. We provide free, detailed estimates after evaluating your specific property.'
      },
      {
        question: 'Can you clean hard-to-reach windows in large homes?',
        answer: 'Yes! Many Clarks Summit homes have great rooms, cathedral ceilings, and multi-story windows. We use water-fed poles up to 40 feet and have specialized equipment for skylights, dormers, and other challenging features. Our team is trained in safe techniques for all window types.'
      },
      {
        question: 'How do you handle the tree sap and debris common in Clarks Summit?',
        answer: 'We use specialized, eco-friendly solutions that break down tree sap and organic debris without damaging window coatings or frames. Our process includes thorough frame and sill cleaning to remove all traces of leaves, pollen, and sap.'
      },
      {
        question: 'Do you offer recurring service for Clarks Summit residents?',
        answer: 'Absolutely! Many of our Clarks Summit clients are on quarterly or semi-annual cleaning schedules. We provide discounted rates for recurring service and will automatically schedule your appointments, so you never have to worry about booking.'
      },
      {
        question: 'Are you insured to work on large homes?',
        answer: 'Yes, we carry $2 million in liability insurance, which covers work on properties of any size. We\'re fully licensed in Pennsylvania and follow all OSHA safety protocols when working on multi-story homes.'
      }
    ],
    intro: [
      'Clarks Summit, a picturesque borough in Lackawanna County, is known for its tree-lined streets, quality schools, and beautiful homes. This combination creates specific window cleaning challenges: abundant tree coverage means constant exposure to sap, pollen, and debris, while many properties feature extensive window installations that require professional expertise.',
      'Since 2015, we\'ve been helping Clarks Summit homeowners maintain their properties\' beauty with professional window cleaning services. From the established neighborhoods near Lackawanna State Park to newer developments like Summit Pointe, we understand the specific needs of Clarks Summit homes. As a husband and wife team, Kyle and Pamela personally handle every job, ensuring consistent quality and attention to detail.',
      'Clarks Summit residents appreciate quality and attention to detail—values we share. Our 500+ satisfied customers across the region trust us with everything from quarterly maintenance on large estates to annual cleanings for smaller homes. We\'re fully insured with $2M liability coverage, licensed in Pennsylvania, and committed to delivering the meticulous service Clarks Summit homeowners expect.'
    ],
    whyChooseUs: [
      '<strong>Large Home Specialists:</strong> Clarks Summit features many upscale properties with extensive window installations. We have the professional equipment and expertise to safely clean cathedral ceilings, multi-story great rooms, and hard-to-reach architectural features that homeowners can\'t safely access.',
      '<strong>Environmental Knowledge:</strong> Your proximity to Lackawanna State Park and wooded areas means unique challenges. We understand how to handle heavy pollen seasons, tree sap buildup, and organic debris without harsh chemicals that could harm your landscaping.',
      '<strong>Premium Service for Premium Homes:</strong> Clarks Summit residents expect—and deserve—exceptional quality. Our meticulous process, professional equipment, and personal attention to detail match the standards of your community. We protect your floors, respect your property, and don\'t cut corners.',
      '<strong>Flexible Scheduling:</strong> We work around your schedule, including evenings and weekends. Many Clarks Summit professionals appreciate our ability to work while you\'re at the office or provide after-hours service that doesn\'t disrupt family time.'
    ],
    adjacentCities: [
      { name: 'Scranton', slug: 'scranton' },
      { name: 'Waverly Township', slug: 'waverly-township' },
      { name: 'Dunmore', slug: 'dunmore' },
      { name: 'Glenburn', slug: 'glenburn' },
      { name: 'Dalton', slug: 'dalton' }
    ]
  },
  'waverly-township': {
    name: 'Waverly Township',
    county: 'Lackawanna County',
    zip: '18411',
    lat: '41.3081',
    lng: '-75.7088',
    neighborhoods: ['Abington Hills', 'Victoria Estates', 'Maple Ridge'],
    landmarks: ['Abington Community Library', 'Countryside Conservancy', 'Waverly Community House'],
    challenges: [
      {
        title: 'Rural Setting Debris',
        description: 'Waverly Township\'s rural character means properties are exposed to agricultural dust, pollen from surrounding farmland, and debris from nearby wooded areas. Our cleaning process addresses these organic materials with eco-friendly solutions that won\'t harm your landscaping or local groundwater.'
      },
      {
        title: 'Well Water Staining',
        description: 'Many Waverly Township homes use well water, which often contains high mineral content. This leads to severe hard water staining that can permanently etch glass if not properly treated. Our deionized water system prevents future mineral staining. For windows with old, permanent hard water etching, professional restoration may be needed.'
      },
      {
        title: 'Property Access',
        description: 'Larger lot sizes and rural settings sometimes present access challenges. We come equipped with extended equipment and are experienced working on properties with private lanes, septic system considerations, and varied terrain.'
      }
    ],
    testimonials: [
      {
        quote: 'We\'ve been using Alexander\'s for years at our Waverly Township home. They understand the challenges of our well water and always leave the windows perfect. Plus, they\'re mindful of our landscaping and septic system.',
        author: 'David & Karen S.',
        neighborhood: 'Abington Hills'
      },
      {
        quote: 'Living in a rural area, we thought we\'d have trouble finding reliable window cleaning. Kyle and Pamela have been fantastic—professional, on time, and they do beautiful work. Highly recommend them!',
        author: 'Patricia L.',
        neighborhood: 'Victoria Estates'
      },
      {
        quote: 'Our windows had terrible hard water stains from our well. Alexander\'s actually got them out! We didn\'t think it was possible. Now we have them cleaned regularly to prevent buildup.',
        author: 'Michael T.',
        neighborhood: 'Waverly Township'
      }
    ],
    faqs: [
      {
        question: 'How much does window cleaning cost in Waverly Township?',
        answer: 'Pricing for Waverly Township homes typically ranges from $175-$450 depending on home size and window count. Properties with well water staining may require additional treatment. We provide free estimates and will let you know upfront if hard water removal will involve extra cost.'
      },
      {
        question: 'Can you remove hard water stains from well water?',
        answer: 'Yes! Hard water staining is very common in Waverly Township due to well water. We use deionized water systems and, for severe cases, specialized mineral removal treatments. We clean windows with years of buildup. However, if hard water stains are permanent etching on the glass surface, professional restoration services would be needed.'
      },
      {
        question: 'Do you work on larger properties and rural homes?',
        answer: 'Absolutely. Many of our Waverly Township clients have larger lots and rural properties. We come fully equipped for various terrain and access situations. We\'re also mindful of septic systems, private wells, and landscaping considerations unique to rural properties.'
      },
      {
        question: 'How often should windows be cleaned in a rural setting?',
        answer: 'We generally recommend twice yearly for Waverly Township homes—spring (after pollen season) and fall (before winter). Properties near farmland or wooded areas may benefit from more frequent cleaning due to additional dust and debris exposure.'
      },
      {
        question: 'Are your cleaning solutions safe for septic systems and well water?',
        answer: 'Yes! We use eco-friendly, biodegradable cleaning solutions that are completely safe for septic systems, well water, and the environment. We\'re conscious of rural properties\' unique considerations and take care to protect your water sources and systems.'
      }
    ],
    intro: [
      'Waverly Township offers residents the best of both worlds: peaceful rural living with convenient access to Scranton and the Abington area. This setting creates unique window cleaning needs—larger properties, exposure to agricultural dust and pollen, and the hard water challenges that come with well water systems.',
      'As Waverly Township residents ourselves (we\'re based right here on Victoria Lane!), Kyle and Pamela understand these challenges firsthand. Since 2015, we\'ve been helping our neighbors maintain beautiful, clear windows despite the region\'s hard water, seasonal pollen, and rural environmental factors. We\'re not just your window cleaners—we\'re your neighbors.',
      'We know Waverly Township\'s roads, understand the considerations of properties with private wells and septic systems, and are experienced working on the larger lots common in our area. With over 500 satisfied customers across the region and a perfect 5.0-star rating, we\'ve built our business on the trust and referrals of neighbors just like you.'
    ],
    whyChooseUs: [
      '<strong>We\'re Your Neighbors:</strong> Our business is based right here in Waverly Township on Victoria Lane. When you hire us, you\'re supporting your neighbors and working with people who are personally invested in our community.',
      '<strong>Rural Property Experience:</strong> We understand the unique considerations of rural properties: private lanes, septic systems, well water, larger lots, and varied terrain. We come prepared and respect your property.',
      '<strong>Hard Water Specialists:</strong> Well water is common in Waverly Township, and so is hard water staining. We\'ve perfected techniques to remove mineral buildup and can help you maintain your windows to prevent future staining.',
      '<strong>Local Reputation Matters:</strong> In a close-knit community like Waverly Township, reputation is everything. Our business has grown entirely through word-of-mouth referrals from satisfied neighbors. We treat every job like it\'s our own home because our reputation depends on it.'
    ]
  },
  'glenmaura': {
    name: 'Glenmaura',
    county: 'Lackawanna County',
    zip: '18507',
    lat: '41.3602',
    lng: '-75.7025',
    neighborhoods: ['Glenmaura National Golf Course', 'Glenmaura Commons', 'Executive Estates', 'Montage Mountain', 'Hyde Park'],
    landmarks: ['Glenmaura National Golf Club', 'Glenmaura Corporate Center', 'Montage Mountain', 'Moosic Borough'],
    challenges: [
      {
        title: 'Complex Window Systems in Luxury Homes',
        description: 'Glenmaura\'s executive homes average 30+ windows per property, often featuring specialty glass types that require expert handling. Skylights in vaulted ceilings, Palladian windows with arched architectural features, custom French doors, and floor-to-ceiling glass panels each demand specific cleaning techniques and specialized equipment. We understand the unique requirements for each glass type—from the gentle touch needed for skylight seals to the precision required for multi-pane French doors. Kyle personally supervises all Glenmaura properties to ensure the white-glove service your luxury home deserves. Our team uses professional-grade extension equipment for multi-story access and takes extra precautions to protect your floors, furnishings, and landscaping throughout the cleaning process.'
      },
      {
        title: 'Golf Course Residence Maintenance',
        description: 'Living adjacent to Glenmaura National Golf Club offers stunning fairway and green views, but presents unique maintenance challenges. Golf course irrigation systems create mineral buildup on windows from spray drift, while fertilizer dust and grass clippings kicked up by maintenance mowers settle on lower-story glass. Course management activities peak in spring and fall, meaning windows can accumulate stubborn residues during these intensive maintenance periods. We schedule our services around your golf season preferences and use deionized water systems to remove the calcium deposits that regular cleaning simply can\'t touch. Many of our Glenmaura golf course homeowners opt for quarterly service—post-winter cleanup, mid-season touch-up, post-season deep clean, and pre-holiday preparation. This proactive schedule keeps your home pristine year-round without the last-minute scramble before hosting events.'
      },
      {
        title: 'Professional Service for Time-Conscious Executives',
        description: 'Glenmaura residents value their time. Many of our clients are executives at the nearby Glenmaura Corporate Center or professionals commuting to Scranton who prefer not to spend precious weekends on ladders dealing with 40+ windows. We offer flexible scheduling with monthly, quarterly, or seasonal recurring service plans, ensuring your home maintains its pristine appearance without demanding your attention. Our automated reminder system, priority scheduling for recurring clients, and ability to work while you\'re away means window maintenance becomes one less item on your to-do list. With $2 million liability insurance, IWCA certification, and bonded team members, you have the peace of mind that comes with hiring true professionals. We treat your Glenmaura property with the same care and discretion you\'d expect from any premium service provider.'
      }
    ],
    testimonials: [
      {
        quote: 'Our home has 42 windows, including 6 skylights and several large Palladian windows. Kyle\'s team handles them all with incredible attention to detail. They\'ve been coming quarterly for two years now, and we wouldn\'t trust anyone else with our property. Worth every penny.',
        author: 'Robert T.',
        neighborhood: 'Glenmaura National Golf Course'
      },
      {
        quote: 'As busy executives, we don\'t have time for home maintenance. Alexander\'s takes care of our windows on a set schedule—we don\'t even have to think about it. They work while we\'re at work, and we come home to sparkling windows. Exactly what we need.',
        author: 'Jennifer & Michael K.',
        neighborhood: 'Glenmaura Commons'
      },
      {
        quote: 'We\'ve lived on the golf course for eight years and tried three different window cleaners before finding Alexander\'s. They actually understand how to deal with the irrigation spray and golf course dust. Finally found someone who does it right. They\'re the best in the area.',
        author: 'Patricia S.',
        neighborhood: 'Golf Course Estates'
      }
    ],
    faqs: [
      {
        question: 'How much does window cleaning cost for homes in Glenmaura?',
        answer: 'Given the size and complexity of Glenmaura\'s executive homes, window cleaning typically ranges from $300-$650 depending on window count, specialty glass features (skylights, Palladian windows, French doors), and service frequency. Many of our Glenmaura clients opt for quarterly service plans, which include a 15% discount and priority scheduling. We provide free estimates with a detailed assessment of your property\'s unique needs. Homes with 40+ windows, complex architectural features, or golf course exposure may be at the higher end of this range.'
      },
      {
        question: 'Do you have experience with skylights and specialty windows?',
        answer: 'Absolutely. Glenmaura\'s luxury homes often feature complex window configurations that require specialized expertise. We regularly clean skylights in vaulted ceilings, Palladian windows, custom French doors, transom windows, and floor-to-ceiling glass installations. Kyle has over a decade of experience with high-end architectural features and personally oversees work on specialty glass to ensure proper technique and safety protocols are followed.'
      },
      {
        question: 'Can you work around our schedule without requiring us to be home?',
        answer: 'Yes! Many Glenmaura residents are busy professionals who prefer we work while they\'re at the office or away. Once we complete an initial walkthrough and you\'re comfortable with our service, we can work independently. We\'re fully insured ($2M liability), bonded, and have served dozens of Glenmaura properties. Our team is trained to secure your property, respect your privacy, and maintain the highest standards of professionalism. We\'ll send you photos when the job is complete.'
      },
      {
        question: 'What areas of Glenmaura and Moosic do you serve?',
        answer: 'We serve all of Glenmaura including homes on the National Golf Course, Glenmaura Commons, Executive Estates, and surrounding Moosic areas including Montage Mountain and Hyde Park. We\'ve been working in this community since 2015 and are very familiar with the area\'s upscale properties and their specific maintenance needs.'
      },
      {
        question: 'Do you offer recurring service plans?',
        answer: 'Yes! Most of our Glenmaura clients are on quarterly service plans (every 3 months), which is ideal for maintaining luxury homes year-round. Recurring clients receive 15% off regular pricing, priority scheduling, automated reminders, and the convenience of having one less thing to manage. We also offer monthly plans for properties that prefer more frequent attention, and seasonal plans for vacation homes or clients who only want spring and fall service.'
      }
    ],
    intro: [
      'Nestled at the base of Montage Mountain in Moosic, Glenmaura represents the pinnacle of executive living in Northeast Pennsylvania. This prestigious golf course community features luxury homes ranging from $500,000 to over $1 million, with architectural sophistication that includes skylights, Palladian windows, expansive French doors, and floor-to-ceiling glass installations. The area\'s unique challenges—golf course irrigation spray, mountain pollen, and the mineral-rich well water common to the region—require specialized window cleaning expertise that goes far beyond standard residential service.',
      'Since 2015, Kyle and Pamela have been providing premium window cleaning services to Glenmaura\'s most discerning homeowners. We understand that your home represents a significant investment and that the level of care you expect extends to every detail, including your windows. Our team has extensive experience with the complex window systems found in Glenmaura\'s executive properties, and we bring the same attention to detail you\'d expect from any luxury service provider. We\'re not a national franchise sending different crews each time—Kyle personally supervises every Glenmaura property to ensure consistency and quality.',
      'Whether your home overlooks the championship golf course, features custom architectural glass, or simply demands the highest standards of professional service, we have the equipment, expertise, and professionalism to exceed your expectations. With over 500 satisfied clients across Northeast PA, a perfect 5.0-star rating, $2 million in liability insurance, and IWCA certification, we\'ve built our reputation on delivering exceptional results for properties that accept nothing less.'
    ],
    whyChooseUs: [
      '<strong>Luxury Home Specialists:</strong> Glenmaura\'s executive homes require more than basic window cleaning. Our expertise includes skylights, custom French doors, Palladian windows, and specialty architectural glass. With over a decade serving Northeast PA\'s finest properties, we bring the detail-oriented, white-glove service your home demands. We protect your floors with professional drop cloths, use pure deionized water to prevent spotting, and treat your property with the respect it deserves.',
      '<strong>Golf Course Property Experience:</strong> Living on or near Glenmaura National Golf Club creates specific window challenges. We understand how irrigation spray creates mineral deposits, when course maintenance activities generate the most debris, and how to schedule service around your golf season preferences. Many of our golf course homeowners have quarterly service that keeps windows pristine through every season without disrupting their enjoyment of those coveted fairway views.',
      '<strong>Executive-Level Service Standards:</strong> Busy professionals appreciate our reliability, discretion, and ability to work independently. We offer flexible scheduling including while you\'re at work, automated service reminders so window cleaning never becomes your problem, and the professionalism that comes with full bonding and insurance. You shouldn\'t have to manage your service providers—hire once, and trust it\'s handled right.',
      '<strong>Proven Track Record in Glenmaura:</strong> We\'ve served dozens of Glenmaura properties since 2015, from golf course estates to Glenmaura Commons townhomes. Our business has grown through referrals from satisfied clients who appreciate our quality work, fair pricing, and professional approach. In a community where reputation matters, we\'ve earned the trust of your neighbors through consistently excellent service.'
    ]
  },
  'dalton': {
    name: 'Dalton',
    county: 'Lackawanna County',
    zip: '18414',
    lat: '41.5345',
    lng: '-75.7441',
    neighborhoods: ['Woodwind Hills', 'North Abington', 'Scott Township', 'Downtown Dalton', 'Trolley Trail Corridor'],
    landmarks: ['Lackawanna State Park', 'Trolley Trail', 'Streamside Park', 'Platt Park'],
    challenges: [
      {
        title: 'Well Water Mineral Deposits',
        description: 'Many Dalton homes rely on private well systems, which often contain high mineral content from the region\'s limestone and bedrock. This creates stubborn white, cloudy stains on windows that regular cleaning cannot remove—they\'re actually mineral deposits bonded to the glass surface. We use deionized water systems specifically designed to eliminate these minerals before they can re-deposit during cleaning. For severe buildup that has accumulated over multiple seasons, we apply specialized mineral removal treatments that safely restore your glass without etching or scratching. Many Dalton homeowners don\'t realize their windows can look crystal-clear again until they see our results. We also provide guidance on maintenance schedules to prevent heavy buildup from recurring.'
      },
      {
        title: 'Large Property Window Counts',
        description: 'Dalton\'s growing popularity has brought beautiful new construction and upscale developments like Woodwind Hills, featuring spacious 4-5 bedroom homes with 30-40+ windows. These larger properties present challenges beyond simple window counts—multi-story access, complex roof lines, and architectural features like dormers and bay windows require professional equipment and safety training. Our team uses commercial-grade extension poles, scaffolding when necessary, and follows OSHA safety protocols to access every window safely. We also coordinate with homeowners on interior access for hard-to-reach windows, ensuring screens are properly handled, window sills are protected, and floors remain clean throughout the process. With experience in Dalton since 2015, we understand the specific window configurations common in the area\'s newer upscale developments.'
      },
      {
        title: 'Seasonal Debris from Lackawanna State Park Proximity',
        description: 'Dalton\'s proximity to the 1,500-acre Lackawanna State Park means residents enjoy beautiful natural surroundings—but windows are exposed to heavy seasonal pollen, tree sap, and organic debris carried by prevailing winds. Spring brings dense pine and oak pollen that clings to glass and creates a stubborn yellow film. Summer brings sap from surrounding trees, especially near wooded lots. Fall adds leaf residue and seed debris. We schedule Dalton cleanings to address these seasonal patterns—post-pollen in late spring, mid-summer touch-up for sap-prone properties, and post-leaf season in fall. Our eco-friendly cleaning solutions break down organic materials without harsh chemicals that could damage your landscaping or harm the local watershed that feeds into Lackawanna State Park.'
      }
    ],
    testimonials: [
      {
        quote: 'Our well water was leaving terrible stains on our windows that we thought were permanent. Alexander\'s got them completely clear—we couldn\'t believe it! Now we have them cleaned twice a year to keep them looking perfect. Highly recommend for anyone in Dalton with well water.',
        author: 'Steven & Laura M.',
        neighborhood: 'Woodwind Hills'
      },
      {
        quote: 'We have 38 windows in our new construction home, including some very high second-story windows. Kyle\'s team had the right equipment and expertise to handle everything safely. They were professional, careful with our brand-new home, and the results were excellent.',
        author: 'Mark R.',
        neighborhood: 'North Abington'
      },
      {
        quote: 'Living near the state park is wonderful, but the spring pollen was making our windows look awful. Alexander\'s has been cleaning them seasonally for three years now. They know exactly when to come and always do a thorough job. Great service!',
        author: 'Nancy K.',
        neighborhood: 'Trolley Trail Corridor'
      }
    ],
    faqs: [
      {
        question: 'How much does window cleaning cost in Dalton?',
        answer: 'Window cleaning for Dalton homes typically ranges from $200-$500 depending on the size of your home, window count, and whether you need both interior and exterior service. Newer homes in developments like Woodwind Hills with 30-40 windows will generally be in the $350-$500 range. Properties with well water staining may require additional mineral removal treatment. We provide free estimates and will give you an exact quote based on your specific home and needs.'
      },
      {
        question: 'Can you remove hard water stains from well water?',
        answer: 'Yes! Well water staining is very common in Dalton, and it\'s one of our specialties. We use deionized water systems to prevent re-depositing minerals during cleaning, and for severe buildup, we apply specialized mineral removal treatments. We maintain windows with years of accumulation. Old permanent hard water etching may require professional restoration services. Many Dalton clients now schedule regular cleanings (twice yearly) to prevent heavy buildup from returning.'
      },
      {
        question: 'Do you clean windows in new construction homes?',
        answer: 'Absolutely! We work with many Dalton residents in newer developments like Woodwind Hills and throughout North Abington. New construction homes often have larger window counts, multiple stories, and complex window configurations. We\'re experienced with modern window systems, use floor and sill protection to keep your new home pristine, and have the equipment to safely access second and third-story windows.'
      },
      {
        question: 'What areas of Dalton do you serve?',
        answer: 'We serve all of Dalton including Woodwind Hills, Downtown Dalton, North Abington, Scott Township, and properties along the Trolley Trail corridor. We\'ve been working in Dalton since 2015 and are very familiar with the area, including newer developments and established neighborhoods near Lackawanna State Park.'
      },
      {
        question: 'When is the best time to have windows cleaned in Dalton?',
        answer: 'We recommend seasonal cleaning for Dalton homes—late spring (after heavy pollen season) and fall (after leaf drop). Properties near wooded areas or Lackawanna State Park may benefit from an additional mid-summer cleaning if tree sap is an issue. This twice-yearly schedule keeps your windows looking great year-round while preventing the kind of buildup that requires more aggressive treatment later.'
      }
    ],
    intro: [
      'Dalton is experiencing steady growth as more families discover this charming Lackawanna County borough that perfectly balances small-town character with modern amenities. New upscale developments like Woodwind Hills are bringing luxury homes with extensive window installations, while established properties throughout the borough enjoy the natural beauty of nearby Lackawanna State Park and Trolley Trail access. This combination of newer construction and natural surroundings creates specific window cleaning challenges—hard water from well systems, large window counts in multi-story homes, and seasonal debris from the surrounding forests.',
      'Since 2015, Kyle and Pamela have been serving Dalton homeowners who appreciate the area\'s quality of life and want their homes to reflect that same attention to excellence. We understand the specific challenges Dalton properties face: the well water that many homes rely on, the seasonal pollen patterns from Lackawanna State Park, and the window configurations common in the area\'s newer upscale developments. We\'re not a quick-in-and-out service—we take the time to do the job properly, treat your property with respect, and deliver results that justify your trust.',
      'Whether you\'re in a new construction home with 40+ windows, an established property dealing with well water staining, or simply want the peace of mind that comes with hiring experienced professionals, we bring the equipment, expertise, and work ethic to exceed your expectations. With over 500 satisfied clients across Northeast PA, a perfect 5.0-star rating, $2 million in liability insurance, and IWCA certification, we\'ve built our reputation on consistently excellent service and honest, fair pricing.'
    ],
    whyChooseUs: [
      '<strong>Well Water Stain Specialists:</strong> Hard water staining is extremely common in Dalton, and we\'ve perfected the solution. Our deionized water systems prevent future mineral staining. Windows with permanent hard water etching may need professional restoration beyond maintenance cleaning. We\'ll also advise you on maintenance schedules to prevent heavy buildup from returning, saving you money and frustration long-term.',
      '<strong>Large Home Expertise:</strong> Dalton\'s newer developments feature spacious homes with extensive window installations. We have professional-grade equipment for multi-story access, experience with complex architectural features, and the systematic approach needed to efficiently handle properties with 30-40+ windows. We protect your floors, handle screens carefully, and work methodically to ensure nothing is missed.',
      '<strong>Local Environmental Knowledge:</strong> Living near Lackawanna State Park offers wonderful recreational access, but we understand how the surrounding forests affect your windows. We know when pollen season peaks, which properties get heavy tree sap, and how to time service for maximum effectiveness. Our eco-friendly cleaning solutions are safe for the local watershed and won\'t harm your landscaping.',
      '<strong>Established Dalton Presence:</strong> We\'ve been serving Dalton since 2015, from Woodwind Hills to downtown properties. Our business has grown through referrals from satisfied neighbors who appreciate our quality work, professional approach, and fair pricing. When you hire us, you\'re working with a company that has a decade of proven reliability in your community.'
    ]
  },
  'south-abington': {
    name: 'South Abington',
    county: 'Lackawanna County',
    zip: '18411',
    lat: '41.49',
    lng: '-75.71',
    neighborhoods: ['Clarks Green', 'Chinchilla', 'Ransom Township', 'PA Route 307 Corridor', 'Leggetts Creek'],
    landmarks: ['South Abington Recreation Park', 'Hillside Community Park', 'The Country Club of Scranton', 'Trolley Trail'],
    challenges: [
      {
        title: 'Upscale Suburban Home Maintenance',
        description: 'South Abington has become one of Lackawanna County\'s most desirable suburbs, attracting families who prioritize quality schools, spacious properties, and proximity to both nature and city amenities. These newer and well-maintained homes often feature large window installations—20-40 windows per property with modern configurations including bay windows, picture windows, and multi-pane designs. Professional window cleaning for homes of this caliber requires more than basic residential service. We use systematic approaches to handle large window counts efficiently, professional-grade equipment for second-story access, and meticulous attention to detail that matches the care residents put into their properties. We protect your floors with drop cloths, handle screens with care, clean window sills and tracks, and ensure frames are left spotless. Many South Abington homeowners are busy professionals or families with young children who appreciate that we work efficiently without disrupting household routines.'
      },
      {
        title: 'Seasonal Challenges from Wooded Surroundings',
        description: 'South Abington\'s beautiful tree-lined streets and proximity to Hillside Community Park create a suburban oasis—but those same wooded surroundings impact your windows year-round. Spring brings heavy pollen from oak, maple, and pine trees that coats windows in a sticky yellow-green film. Summer brings tree sap, especially on properties with overhanging branches. Fall deposits leaf residue and organic material. We schedule South Abington cleanings to address these seasonal patterns strategically—late spring for post-pollen cleanup, mid-summer for sap removal on affected properties, and fall for leaf season. Our eco-friendly cleaning solutions effectively break down organic materials without the harsh chemicals that could harm your professional landscaping or the Leggetts Creek watershed. We also inspect for issues like screen damage from branches or window seal problems that could lead to bigger issues if left unaddressed.'
      },
      {
        title: 'Premium Community Expectations',
        description: 'Residents of South Abington chose this community for its quality—top-ranked schools, well-maintained recreation facilities, and a suburban environment that reflects care and investment. Your window cleaning service should meet those same standards. We arrive on time (with text reminders the day before), dress professionally, work systematically and efficiently, and communicate clearly throughout the process. Our team is trained to respect your property—we don\'t block driveways unnecessarily, we keep work areas tidy, and we complete thorough final inspections before considering a job done. With full liability insurance ($2M), bonded team members, and IWCA certification, we provide the professionalism and accountability you expect when inviting service providers into your home. We\'ve built our South Abington client base entirely through referrals from satisfied homeowners who appreciate that we treat their properties with the respect they deserve.'
      }
    ],
    testimonials: [
      {
        quote: 'We moved to South Abington for the schools and community, and wanted to find reliable service providers we could trust. Alexander\'s has been cleaning our windows twice a year for four years now. They\'re always professional, thorough, and respectful of our home. We recommend them to all our neighbors.',
        author: 'Brian & Michelle T.',
        neighborhood: 'Clarks Green'
      },
      {
        quote: 'Our home has 32 windows and we were spending entire weekends trying to keep them clean ourselves. Alexander\'s does a better job in a few hours than we ever could. They handle the screens, clean the tracks, and leave everything spotless. Worth every penny for the time and hassle it saves us.',
        author: 'Jennifer L.',
        neighborhood: 'Chinchilla'
      },
      {
        quote: 'We have three young kids and don\'t have time for home maintenance projects. Kyle\'s team worked around our schedule, finished quickly while our kids were at school, and left our windows looking amazing. Great service and very professional. We\'ve been using them for years.',
        author: 'David & Sarah M.',
        neighborhood: 'South Abington Recreation Park Area'
      }
    ],
    faqs: [
      {
        question: 'How much does window cleaning cost in South Abington?',
        answer: 'Window cleaning for South Abington homes typically ranges from $250-$550 depending on your home\'s size, window count, and whether you need interior and exterior service. The average South Abington home with 25-35 windows generally falls in the $350-$450 range for complete inside and outside cleaning including screens. We provide free estimates and will give you an exact quote based on your specific property. Many of our South Abington clients opt for twice-yearly service, which we can discount for recurring appointments.'
      },
      {
        question: 'Do you work around family schedules?',
        answer: 'Absolutely! Many South Abington families have busy schedules with school drop-offs, work commitments, and activities. We offer flexible scheduling including mid-day service while you\'re at work, and we can coordinate with your timing preferences. We send text reminders the day before so you\'re always aware when we\'re coming. For recurring clients, we\'ll work around your schedule to find consistent appointment times that work for your family.'
      },
      {
        question: 'Can you handle both interior and exterior windows?',
        answer: 'Yes! Most South Abington homes request complete service—exterior, interior, and screens. We\'ll clean both sides of your windows, wash or dust your screens depending on their condition, wipe down sills and tracks, and ensure frames are spotless. We use floor protection and are careful around furnishings, window treatments, and décor. If you only need exterior service, we offer that option as well at a reduced rate.'
      },
      {
        question: 'What areas of South Abington Township do you serve?',
        answer: 'We serve all of South Abington Township including Clarks Green, Chinchilla, Ransom Township, properties along the PA Route 307 corridor, and neighborhoods near South Abington Recreation Park and Hillside Community Park. We\'ve been working throughout the township since 2015 and are very familiar with the area\'s suburban developments and family-friendly communities.'
      },
      {
        question: 'When should windows be cleaned in South Abington?',
        answer: 'We generally recommend twice-yearly cleaning for South Abington homes—late spring (after pollen season ends) and fall (after leaf drop but before winter). This schedule keeps your windows looking great year-round and prevents buildup that becomes harder to remove if left too long. Properties with many surrounding trees or those near Hillside Park may benefit from an additional mid-summer cleaning if tree sap is an issue.'
      }
    ],
    intro: [
      'South Abington Township has earned its reputation as one of Lackawanna County\'s premier family-oriented communities, offering top-ranked schools, exceptional recreational facilities, and a suburban setting that balances tranquility with convenient access to Scranton and the Abingtons. The township\'s spacious homes, tree-lined streets, and well-maintained properties reflect residents\' commitment to quality—and that attention to detail extends to home maintenance including professional window cleaning. South Abington\'s combination of newer construction, wooded surroundings, and premium community standards creates specific needs that go beyond basic residential window service.',
      'Since 2015, Kyle and Pamela have been serving South Abington families and professionals who appreciate reliable, high-quality service providers. We understand the specific characteristics of the area—the seasonal pollen from surrounding trees, the window configurations common in the township\'s well-appointed homes, and the professional service standards residents expect. We work efficiently and respectfully, communicate clearly, and deliver results that match the care you\'ve invested in your property. Many of our South Abington clients are busy families and professionals who value service providers they can trust to work independently and deliver consistent excellence.',
      'Whether your home is in Clarks Green, near the Recreation Park, or anywhere throughout the township, we bring the professional equipment, systematic approach, and attention to detail needed to maintain your home\'s appearance. With over 500 satisfied clients across Northeast PA, a perfect 5.0-star rating, full insurance and bonding, and IWCA certification, we\'ve built our reputation on the kind of reliable, professional service that South Abington residents expect and deserve.'
    ],
    whyChooseUs: [
      '<strong>Suburban Home Specialists:</strong> South Abington\'s well-appointed suburban homes deserve professional-quality window service. We have the systematic approach and equipment to efficiently handle 25-40 window properties, the care needed for modern window systems and screens, and the attention to detail that matches your standards. We protect floors, clean sills and tracks, and treat your home with respect.',
      '<strong>Family-Friendly Scheduling:</strong> We understand South Abington families are busy with school, work, and activities. We offer flexible scheduling, send advance reminders, work efficiently to minimize disruption, and can coordinate service while you\'re away. Many clients appreciate that we handle window maintenance so they can focus on family time rather than spending weekends on ladders.',
      '<strong>Environmental Awareness:</strong> South Abington\'s tree-lined streets are beautiful but create seasonal window challenges. We understand local pollen patterns, know when tree sap is most problematic, and use eco-friendly solutions that won\'t harm your landscaping or the Leggetts Creek watershed. Our scheduling recommendations help you stay ahead of seasonal buildup.',
      '<strong>Premium Service Standards:</strong> You chose South Abington for its quality community and excellent schools. We provide the same level of professionalism you expect in all aspects of township life. Fully insured, bonded, IWCA certified, and with a decade-long reputation built on referrals from satisfied neighbors, we deliver the reliable, high-quality service your premium community deserves.'
    ]
  },
  'lake-naomi': {
    name: 'Lake Naomi',
    county: 'Monroe County',
    zip: '18328',
    lat: '41.1578',
    lng: '-75.3306',
    neighborhoods: ['Naomi Estates', 'Lakefront Properties', 'Hillside Estates', 'Forest Ridge', 'Club Properties'],
    landmarks: ['Lake Naomi Club', 'Naomi Park', 'Lake Naomi Beach', 'Pocono Mountain Gateway'],
    challenges: [
      {
        title: 'Lakefront Mineral Deposits and Water Spray',
        description: 'Lake Naomi is a pristine private lake community, and properties adjacent to or near the water face unique window cleaning challenges. Lakefront properties experience mineral-rich water spray from recreational boating, dock maintenance, and wave action that deposits stubborn white, cloudy stains on windows. Additionally, the lake\'s natural mineral content means splash-back during rainy periods leaves residue that regular cleaning can\'t remove. Properties near the lake dam or boathouse areas experience even heavier mineral buildup. We use specialized deionized water systems that prevent mineral re-deposition during cleaning, and for severe lakefront mineral staining, we apply targeted mineral removal treatments. Our team understands the unique water chemistry of Lake Naomi and schedules service to address seasonal mineral buildup patterns. Many of our lakefront clients opt for quarterly service to maintain crystal-clear views of the lake and preserve their property\'s appearance year-round.'
      },
      {
        title: 'Vacation Home Seasonal Turnover',
        description: 'Lake Naomi serves many part-time residents and vacation home owners who may be absent for extended periods, meaning windows accumulate dust, pollen, and debris between visits. Properties can go months without attention, and when owners arrive for weekends or seasonal stays, they want their homes looking pristine immediately. We offer flexible scheduling that accommodates vacation home patterns—pre-arrival deep cleaning before owners come for the season, post-departure quick cleanings to prepare homes for closing up, and seasonal transition service. Our bonded, insured team can work independently while you\'re away, and we send before/after photos documenting our work. This is especially important for properties where owners have limited on-site presence. We coordinate with property managers and can adjust our service frequency based on occupancy patterns—some clients need weekly service during peak season, others prefer monthly maintenance service.'
      },
      {
        title: 'High-Altitude Pollen and Pocono Forest Debris',
        description: 'Nestled in the Pocono Mountains at elevation above sea level, Lake Naomi properties face different environmental challenges than lower-altitude communities. The area experiences intense spring pollen from the surrounding forest canopy—oak, pine, and hemlock trees shed abundant pollen that creates thick yellow films on windows. Summer brings organic debris from dead tree branches and forest floor material. Fall leaf drop is substantial, with leaves catching in gutters and sills. Winter brings pine needle accumulation and freeze-thaw cycles that stress window seals. Our eco-friendly cleaning solutions address all these organic materials without damaging the delicate Pocono mountain ecosystem. We schedule service around these seasonal patterns and recommend quarterly cleaning for Lake Naomi properties to prevent buildup. Our experience with mountain properties means we understand how higher elevation affects pollen patterns and precipitation, allowing us to time service optimally.'
      }
    ],
    testimonials: [
      {
        quote: 'We only visit Lake Naomi on weekends and during summer vacation. Alexander\'s has been a lifesaver—they clean our windows before we arrive, and they understand our seasonal schedule perfectly. Our vacation home always looks pristine when we get there. Can\'t recommend them highly enough.',
        author: 'Richard & Carol P.',
        neighborhood: 'Lakefront Properties'
      },
      {
        quote: 'The mineral staining from the lake was awful—windows looked cloudy no matter what we tried. Kyle and Pamela actually got them clear! They knew exactly what Lake Naomi water does to windows. Now we have them cleaned quarterly and the difference is night and day.',
        author: 'Thomas M.',
        neighborhood: 'Lake Naomi Club'
      },
      {
        quote: 'Managing a vacation property remotely is stressful, but Alexander\'s takes care of window maintenance without requiring my attention. They\'re bonded, professional, and I get photos when they\'re done. Makes owning a Lake Naomi home much easier. Highly recommend for part-time residents.',
        author: 'Margaret L.',
        neighborhood: 'Hillside Estates'
      }
    ],
    faqs: [
      {
        question: 'How much does window cleaning cost for Lake Naomi properties?',
        answer: 'Window cleaning for Lake Naomi homes typically ranges from $300-$650 depending on home size, window count, and proximity to the lake. Lakefront properties with mineral staining may require additional treatment. Vacation home owners often opt for seasonal service (spring and fall deep cleaning) or quarterly maintenance plans, which we can provide at discounted rates. We provide free estimates and will assess your specific property\'s exposure to lake conditions and mineral deposits.'
      },
      {
        question: 'Can you handle severe mineral staining from the lake?',
        answer: 'Yes! Lake mineral deposits are our specialty for Lake Naomi properties. We use deionized water systems to prevent re-deposition of minerals during cleaning, and for stubborn buildup, we apply specialized mineral removal treatments that prevent future etching from mineral deposits. Many Lake Naomi clients with lakefront exposure have had remarkable results after struggling with cloudy windows for years. We\'ll advise you on maintenance schedules to prevent heavy buildup from recurring.'
      },
      {
        question: 'Do you accommodate vacation home owners with flexible scheduling?',
        answer: 'Absolutely! We understand Lake Naomi\'s unique pattern of part-time residents. We offer seasonal cleaning (before you arrive for the season), pre-visit deep cleaning before vacations, post-visit closing service, and regular maintenance between visits. Many vacation home owners prefer we handle service while they\'re away, and we\'re fully bonded and insured to work independently. We send photos documenting completion, and we can coordinate with property managers if needed.'
      },
      {
        question: 'What areas of Lake Naomi do you serve?',
        answer: 'We serve all of Lake Naomi including Naomi Estates, Lakefront Properties, Hillside Estates, Forest Ridge, and Club Properties. We\'ve been serving the Lake Naomi community since 2015 and understand the unique needs of this vacation home destination, from seasonal pollen patterns to lake mineral challenges specific to the area.'
      },
      {
        question: 'How often should Lake Naomi windows be cleaned?',
        answer: 'We recommend quarterly cleaning for most Lake Naomi properties—spring (after winter debris and pollen), early summer (before peak season), fall (after leaf drop), and winter (before closing for season or preparing for holidays). Lakefront properties or those heavily exposed to lake spray may benefit from more frequent service. Vacation home owners appreciate seasonal service that coincides with their arrival and departure schedules. This prevents heavy mineral and organic buildup while keeping your windows pristine during your time at the lake.'
      }
    ],
    intro: [
      'Lake Naomi represents the ultimate Pocono Mountains retreat—a pristine private lake community offering year-round recreational opportunities, stunning natural beauty, and an exclusive residential setting nestled among forest peaks. This unique elevation and lakefront environment creates specific window maintenance challenges that differ from valley communities. The combination of mineral-rich lake water, Pocono forest pollen, and the seasonal patterns of mountain properties requires specialized expertise and flexible scheduling to accommodate both full-time residents and the vacation home owners who constitute much of Lake Naomi\'s population.',
      'Since 2015, Kyle and Pamela have been serving Lake Naomi property owners who appreciate professional service tailored to this distinctive community\'s needs. We understand the mineral deposits that lake spray creates, the seasonal pollen patterns unique to mountain elevation, and the scheduling preferences of part-time residents who want their vacation homes pristine upon arrival. Many Lake Naomi owners were frustrated with window cloudiness and debris accumulation before finding our specialized approach. We bring solutions developed specifically for lakefront and mountain properties.',
      'Whether you\'re a full-time Lake Naomi resident seeking consistent quarterly maintenance or a vacation home owner needing seasonal service around your visits, we provide the flexibility and expertise your property demands. With experience serving 50+ Lake Naomi properties, bonding and insurance suitable for work on vacation homes, and a perfect 5.0-star rating, we\'ve built our reputation on understanding and exceeding the expectations of this exclusive Pocono community.'
    ],
    whyChooseUs: [
      '<strong>Lakefront Property Specialists:</strong> Lake mineral deposits are a unique Lake Naomi challenge, and we\'ve perfected the solution. Our deionized water systems and specialized mineral removal treatments maintain clarity and prevent future clouding from lake spray minerals. We understand lake water chemistry and seasonal mineral patterns, allowing us to schedule service optimally and advise you on maintenance that prevents heavy buildup.',
      '<strong>Vacation Home Flexibility:</strong> Lake Naomi has many part-time residents, and we accommodate that perfectly. We offer pre-arrival deep cleaning, seasonal service timed to your visits, post-departure closing preparation, and independent service while you\'re away. We\'re bonded, insured, and professional—you can trust us with your property. We send photos documenting our work and coordinate with property managers if needed.',
      '<strong>Mountain Property Experience:</strong> Pocono elevation brings different environmental challenges than lower-altitude areas. We understand high-altitude pollen patterns, forest debris from the surrounding canopy, and how mountain weather affects window maintenance. Our eco-friendly solutions are respectful of this pristine mountain ecosystem and the watershed that feeds Lake Naomi.',
      '<strong>Exclusive Community Understanding:</strong> We\'ve served Lake Naomi since 2015 and understand what makes this community special—the value residents and owners place on their property, the importance of pristine appearance during limited visit time, and the unique maintenance challenges of lakefront living. We deliver the professional, attentive service that Lake Naomi properties deserve.'
    ]
  },
  'timber-trails': {
    name: 'Timber Trails',
    county: 'Monroe County',
    zip: '18365',
    lat: '41.0752',
    lng: '-75.3872',
    neighborhoods: ['North Ridge', 'Mountain View', 'Forest Glen', 'Lakeside Properties', 'Summit Ridge'],
    landmarks: ['Timber Trails Clubhouse', 'Village Green Park', 'Pocono Ski Area Access', 'Hemlock Lake', 'Forest Trails'],
    challenges: [
      {
        title: 'Dense Forest Environment and Organic Debris',
        description: 'Timber Trails\' defining characteristic—the dense, pristine forest setting—creates ongoing window maintenance challenges. Homes are surrounded by towering hemlocks, oaks, and pines that shed constantly. Spring brings intense pollen season with yellow-green coatings that cling to glass and screen mesh. Summer brings sticky tree sap, especially near mature trees with low-hanging branches. Fall produces massive leaf drop and forest floor organic material blown onto windows. Winter brings pine needle accumulation and sap buildup from freeze-thaw cycles. Unlike suburban or valley communities, Timber Trails properties can\'t escape organic debris because it\'s generated continuously by the surrounding forest canopy. We use eco-friendly, biodegradable solutions that break down organic materials without harsh chemicals that could harm the surrounding forest or ground water. Our systematic approach includes thorough frame, sill, and gutter cleaning to remove accumulated debris. We recommend quarterly service for Timber Trails properties to address the continuous organic material buildup. Many clients appreciate that we protect the natural environment they chose Timber Trails to enjoy.'
      },
      {
        title: 'Extended Access Roads and Remote Properties',
        description: 'Timber Trails features secluded properties accessed via private roads winding through the forest, creating logistical challenges for service providers. Properties are set back from main roads, some accessed by mile-long private drives through wooded terrain. This remoteness—part of what makes Timber Trails special—means service providers must be committed to reaching every property. We arrive fully equipped with everything needed for the job, as running back to town isn\'t practical. Our team is experienced with remote properties, comfortable navigating private forest roads, and professional about parking and accessing homes without disrupting the peaceful setting. We coordinate carefully with homeowners about the best access routes, and we\'re mindful of preservation—we don\'t disturb landscaping or forest floor vegetation. For homeowners new to the community, we provide detailed access instructions and confirm routes before arrival. Our commitment to serving every corner of Timber Trails, regardless of remoteness, has made us the trusted choice for these secluded forest properties.'
      },
      {
        title: 'Moisture and Humidity from Forest Canopy',
        description: 'The dense forest canopy creates high humidity and moisture conditions year-round at Timber Trails. Morning mist, afternoon shade, and limited sun exposure mean windows take longer to dry after cleaning, and moisture can promote mold or mildew growth on frames and screens if not properly managed. The cool mountain air and forest transpiration from billions of tree leaves create a saturated environment unique to dense forest properties. We use specialized drying techniques including deionized water systems that dry spot-free even in high-humidity conditions. Our frame and sill cleaning includes anti-mildew treatments that prevent regrowth. We understand that Timber Trails properties require different drying protocols than mountain ridgetop homes with full sun exposure. We also educate homeowners about moisture management—ventilation strategies, frequency of cleaning, and seasonal adjustments. For winter cleaning, we use solutions compatible with the challenge of drying in cold, humid mountain air.'
      }
    ],
    testimonials: [
      {
        quote: 'Living in dense forest is beautiful but our windows were constantly covered with tree sap and pollen. Alexander\'s understood the challenge immediately—they weren\'t surprised by our buildup like other cleaners were. Now we have them cleaned four times a year and it makes a huge difference. Kyle and Pamela really know how to handle forest properties.',
        author: 'James & Susan H.',
        neighborhood: 'North Ridge'
      },
      {
        quote: 'Our property is pretty remote on a private forest road. We were worried nobody would want to come all the way out here. Alexander\'s didn\'t hesitate—they came prepared and did fantastic work. We\'ve been using them for three years now. Best service in the Pocono Mountains.',
        author: 'Walter K.',
        neighborhood: 'Forest Glen'
      },
      {
        quote: 'We moved to Timber Trails for the peace and privacy, but the continuous tree debris was frustrating. Alexander\'s is so respectful of the forest setting—they don\'t damage anything, use eco-friendly solutions, and understand why we chose this community. They get it in a way most service providers don\'t. Couldn\'t ask for better.',
        author: 'Elizabeth & Robert M.',
        neighborhood: 'Mountain View'
      }
    ],
    faqs: [
      {
        question: 'How much does window cleaning cost in Timber Trails?',
        answer: 'Window cleaning for Timber Trails properties typically ranges from $300-$600 depending on home size, window count, and degree of forest exposure. Properties with heavy tree coverage or remote access may be at the higher end of this range. Many Timber Trails homeowners opt for quarterly service (spring, early summer, fall, winter) to manage continuous organic debris, which we provide at discounted rates. We provide free estimates and will assess your specific property\'s exposure to tree sap and pollen.'
      },
      {
        question: 'Can you handle tree sap and constant pollen from the forest?',
        answer: 'Absolutely! Tree sap and pollen are what Timber Trails properties face constantly, and we\'ve perfected the solution. We use specialized eco-friendly solutions that break down sticky sap without damaging window coatings or frames. Our frame and sill cleaning removes accumulated pollen, and we understand the seasonal patterns unique to dense forest environments. Many clients report dramatically improved window clarity after our service and appreciate that we address buildup they\'ve been struggling with.'
      },
      {
        question: 'Do you serve remote properties accessed by private forest roads?',
        answer: 'Yes! We specifically serve remote Timber Trails properties and don\'t charge extra for private road access. We come fully equipped and prepared for forest locations. We\'re respectful of your privacy, careful not to disturb landscaping or forest floor vegetation, and professional about accessing homes without disrupting the peaceful forest setting. We coordinate access details carefully and confirm routes before arrival.'
      },
      {
        question: 'How often should windows be cleaned in Timber Trails?',
        answer: 'We recommend quarterly cleaning for most Timber Trails properties due to continuous tree debris, pollen, and sap. This means spring cleanup after winter, early summer service before peak season, fall service after heavy leaf drop, and winter preparation. Homes with particularly heavy forest exposure or low-hanging tree branches may benefit from more frequent service. This schedule keeps windows pristine while preventing the stubborn, permanent-looking buildup that occurs in dense forest environments.'
      },
      {
        question: 'Are your cleaning solutions safe for the Pocono forest environment?',
        answer: 'Yes! We use exclusively eco-friendly, biodegradable solutions that are completely safe for the forest ecosystem, ground water, and surrounding vegetation. We understand Timber Trails residents chose this community for its natural beauty and pristine environment. Our solutions break down organic materials effectively while being respectful of the landscape you\'re working to preserve. We never use harsh chemicals that could harm trees, plants, or the watershed.'
      }
    ],
    intro: [
      'Timber Trails represents Pocono Mountain living at its finest—a secluded residential community nestled in dense, pristine forest where privacy, natural beauty, and outdoor recreation define the lifestyle. Properties are surrounded by mature hemlocks, oaks, and pines that create a serene setting, but this forest environment creates unique window maintenance challenges. Continuous organic debris, tree sap, pollen, and the high humidity of the dense forest canopy mean windows require specialized care and attention that differs significantly from non-forested communities. Combined with the remote location and extended private driveways, Timber Trails needs service providers who understand and appreciate forest properties.',
      'Since 2015, Kyle and Pamela have been serving Timber Trails homeowners who value both the natural beauty of their forest setting and the appearance of their homes. We understand the challenge of continuous tree debris, the frustration of sap and pollen that regular cleaning can\'t address, and the difficulty of finding service providers willing to access remote properties. Many Timber Trails owners previously relied on national chains that couldn\'t handle the organic debris or respected local companies that wouldn\'t travel the distance. We do both—we\'re equipped and experienced for forest properties, and we\'re committed to serving every corner of Timber Trails, no matter how remote.',
      'Whether your home sits among the tallest hemlocks at the end of a forest road or in a more accessible location, we bring specialized techniques developed for dense forest environments, eco-friendly solutions that respect the Pocono ecosystem, and the commitment to serving this unique community. With experience serving 40+ Timber Trails properties, a perfect 5.0-star rating, full insurance and bonding, and a deep appreciation for the natural setting you\'ve chosen, we deliver the professional service that forest properties deserve.'
    ],
    whyChooseUs: [
      '<strong>Forest Property Specialists:</strong> Timber Trails\' dense forest creates window challenges that suburban cleaners aren\'t equipped to handle. We specialize in tree sap removal, organic debris cleaning, and pollen management specific to heavy forest exposure. Our eco-friendly solutions effectively address continuous buildup without harsh chemicals that could harm the forest ecosystem. We understand seasonal patterns unique to dense canopy environments.',
      '<strong>Remote Property Commitment:</strong> We specifically serve Timber Trails\' remote properties and private forest roads. We come fully equipped and prepared, don\'t charge extra for distance, and are respectful of the secluded setting you\'ve chosen. We coordinate access carefully, protect your landscaping and forest floor vegetation, and deliver professional service regardless of how far back your property is located.',
      '<strong>Environmental Respect:</strong> You chose Timber Trails for its pristine forest and natural beauty. We honor that choice by using exclusively eco-friendly, biodegradable solutions safe for the forest ecosystem and ground water. We understand the Pocono watershed and are conscious of our environmental impact. Many Timber Trails clients appreciate that we help maintain their property\'s appearance while respecting the natural setting they value.',
      '<strong>Pocono Mountain Experience:</strong> We\'ve served Timber Trails since 2015 and understand what makes this community special—the appreciation for privacy and nature, the challenges of forest living, and the desire for professional service that understands and respects the environment. Our reputation is built on serving forest properties with expertise and environmental consciousness that most companies don\'t possess.'
    ]
  },
  'pocono-pines': {
    name: 'Pocono Pines',
    county: 'Monroe County',
    zip: '18350',
    lat: '41.2456',
    lng: '-75.4234',
    neighborhoods: ['Pines Estates', 'Ridge View', 'Lakeside Cottages', 'Mountain Ridge Homes', 'Pine Forest Properties'],
    landmarks: ['Pocono Pines Airstrip', 'Community Center', 'Pocono Lake', 'Pocono Lake Golf Club', 'Mountain Recreation Area'],
    challenges: [
      {
        title: 'Airstrip Activity and Aircraft-Related Residue',
        description: 'Pocono Pines is unique among local communities because it features a private airstrip serving the residential community. While this provides convenience and amenities for aviation enthusiasts, properties downwind from the airstrip experience distinctive window challenges. Aircraft fuel exhaust, maintenance operations, and particulate matter from runway activity deposit on windows, creating stubborn residue that regular cleaning can\'t remove. The residue is oily and penetrating, requiring specialized solvents and techniques different from standard window cleaning. Properties near the runway corridor experience heavier exposure, but the entire community is affected by airstrip operations. We use specialized degreasers and aviation-specific cleaning protocols developed for communities with private airstrips. Our deionized water systems prevent re-deposition of these fine particulates. Many Pocono Pines residents didn\'t realize their window haze was related to airstrip activity until we explained the phenomenon and demonstrated our solution. Quarterly service helps prevent heavy buildup of these aviation residues.'
      },
      {
        title: 'Diverse Home Types and Vintage Architecture',
        description: 'Pocono Pines has evolved over decades, with homes ranging from modest cottages built in the 1960s to modern vacation residences to substantial permanent estates. This architectural diversity—with everything from small A-frames with 8-10 windows to larger homes with 40+ windows—requires flexible, adaptable service. Older cottage-style homes often feature original single-pane windows, delicate frames, and unique designs that demand gentle handling and period-appropriate cleaning techniques. More recent construction includes multi-story homes with skylights, modern multi-pane windows, and complex configurations. We assess each property\'s architectural style and adjust our approach accordingly. Our experience with vintage Pocono properties means we know how to handle delicate original windows with the care they deserve. We also understand the unique charm residents value in their homes—whether that\'s maintaining pristine views from vintage cottage windows or keeping modern architectural glass spotless. This architectural diversity is part of Pocono Pines\' appeal, and it requires service providers who can adapt.'
      },
      {
        title: 'Seasonal Ownership Patterns and Vacation Home Management',
        description: 'Like other Pocono communities, Pocono Pines has a significant seasonal component—many properties are primary residences, but a substantial percentage are vacation homes, weekend retreats, or investment properties with absentee owners. This creates unique service patterns. Some properties need consistent monthly service during peak season; others need deep cleaning before owners arrive and quick cleanups before they leave. Rental properties need window maintenance on strict turnover schedules. Property managers need professional, documented service they can bill owners for. We accommodate all these patterns flexibly. We offer pre-arrival deep cleaning before seasonal visits, turnover service for rental properties, seasonal maintenance plans, and independent service with photo documentation. Our professional approach—text reminders, before/after photos, detailed service records—makes property management straightforward. We coordinate with property managers and can adjust service frequency based on occupancy patterns. Vacation home owners appreciate that their Pocono Pines retreat is maintained perfectly between visits.'
      }
    ],
    testimonials: [
      {
        quote: 'We thought our windows were permanently hazy from hard water, but Alexander\'s explained it was airstrip residue. After they cleaned them with the right treatment, they were crystal clear! We never understood what was causing the problem until Kyle explained it. Now we\'re on quarterly service and our windows stay pristine.',
        author: 'George & Dorothy H.',
        neighborhood: 'Pines Estates'
      },
      {
        quote: 'Our cottage is from the 1960s with original windows that we wanted to preserve. Alexander\'s was so careful and knowledgeable about vintage glass. They didn\'t rush—just did beautiful, gentle work that kept our original windows perfect. Highly recommend for anyone with older Pocono homes.',
        author: 'Nancy S.',
        neighborhood: 'Lakeside Cottages'
      },
      {
        quote: 'We rent our Pocono Pines home seasonally, and having reliable window cleaning on a turnover schedule has been invaluable. Kyle\'s team works around our rental schedule, sends photos documenting their work, and is always professional. Guests arrive to spotless windows. Makes managing a vacation rental so much easier.',
        author: 'Michael & Jennifer T.',
        neighborhood: 'Mountain Ridge Homes'
      }
    ],
    faqs: [
      {
        question: 'How much does window cleaning cost in Pocono Pines?',
        answer: 'Window cleaning for Pocono Pines homes typically ranges from $250-$600 depending on home size, window count, architectural style, and airstrip exposure. Cottage-style homes with fewer windows generally fall in the $250-$350 range, while larger estates may reach $500-$600. Properties with heavy airstrip exposure may require additional specialized treatment. Many Pocono Pines owners opt for quarterly service or seasonal vacation home packages. We provide free estimates and will assess your specific property\'s exposure to airstrip activity.'
      },
      {
        question: 'Can you clean windows affected by airstrip operations?',
        answer: 'Yes! Airstrip residue is unique to Pocono Pines, and we have specialized protocols specifically for aircraft-related window deposits. We use aviation-appropriate degreasers and cleaning techniques that remove the oily, penetrating residue that regular cleaning can\'t address. Many clients see immediate improvement from our cleaning. However, if haze is from permanent glass etching, professional restoration services would be needed. We\'ll assess your property\'s airstrip exposure and adjust our service frequency accordingly.'
      },
      {
        question: 'Are you experienced with vintage Pocono cottage windows?',
        answer: 'Absolutely! Many Pocono Pines homes are classic cottages from the 1950s-1970s with original single-pane windows, delicate frames, and charming architectural details. We\'re trained in handling vintage glass with the gentleness it requires. We don\'t use aggressive techniques that could damage original frames, and we appreciate the character and charm of these historic Pocono homes. If you value your cottage\'s original character, we\'re the right choice.'
      },
      {
        question: 'Do you handle vacation rental turnover cleaning?',
        answer: 'Yes! If you own a seasonal rental in Pocono Pines, we offer professional turnover service coordinated around your rental schedule. We provide before/after photos documenting our work, maintain detailed service records for billing or guest communication, and work efficiently to ensure windows are pristine for arriving guests. We understand vacation rental operations and can adjust service frequency based on occupancy patterns.'
      },
      {
        question: 'What areas of Pocono Pines do you serve?',
        answer: 'We serve all of Pocono Pines including Pines Estates, Ridge View, Lakeside Cottages, Mountain Ridge Homes, and Pine Forest Properties. We\'ve been serving the Pocono Pines community since 2015 and understand the unique characteristics of this diverse community—from vintage cottages to modern estates to vacation rental properties, from airstrip-adjacent exposure to forest settings to lakefront locations.'
      }
    ],
    intro: [
      'Pocono Pines embodies the diverse appeal of Pocono Mountain living, offering something for everyone from charming vintage cottages to contemporary vacation homes to substantial permanent estates. This architectural diversity, combined with the community\'s unique amenities—including a private airstrip serving aviation enthusiasts—creates a distinctive residential environment. Unlike more uniform communities, Pocono Pines ranges from humble cottage living to upscale estates, from primary residences to seasonal vacation properties, from full-time residents to weekend visitors. This diversity creates equally diverse window maintenance needs. Beyond typical residential challenges, Pocono Pines properties face distinctive issues like aircraft exhaust residue from the private airstrip and the responsibility of maintaining diverse architectural styles from classic 1960s cottages to modern construction.',
      'Since 2015, Kyle and Pamela have been serving Pocono Pines\' diverse homeowner base—permanent residents who want consistent window maintenance, seasonal vacation home owners who need flexible service around their visits, property managers handling rental properties, and aviation enthusiasts whose homes are exposed to airstrip activity. We understand that Pocono Pines isn\'t one-size-fits-all. We approach each property individually, assessing its unique characteristics, maintenance challenges, and owner preferences. Vintage cottage owners appreciate our gentle touch with delicate original windows. Airstrip-adjacent properties are relieved to discover that their window haze is solvable with specialized techniques. Vacation home owners value our flexible scheduling and professional documentation. Rental property managers appreciate our turnover efficiency and photo documentation.',
      'Whether your Pocono Pines home is a beloved cottage with original charm, a modern estate, an investment rental, or an aviation enthusiast\'s weekend retreat, we bring the expertise, flexibility, and professionalism your property deserves. With experience serving 50+ diverse Pocono Pines properties, a perfect 5.0-star rating, full insurance and bonding, and deep knowledge of this community\'s unique characteristics, we\'ve built our reputation on understanding that every home is different and deserves personalized, attentive service.'
    ],
    whyChooseUs: [
      '<strong>Airstrip-Experienced Specialists:</strong> Pocono Pines\' private airstrip creates unique window challenges—aircraft residue, fuel exhaust, and maintenance-related deposits that regular cleaners aren\'t trained to handle. We use specialized aviation-appropriate degreasers and techniques that remove the oily, penetrating residue that leaves windows hazy. Many Pocono Pines residents didn\'t realize their window cloudiness was airstrip-related until we explained and demonstrated our solution.',
      '<strong>Architectural Diversity Expertise:</strong> Pocono Pines ranges from charming 1960s cottages to modern estates, each requiring different approaches. We adapt our techniques to each home\'s architectural style and period. Vintage cottage owners appreciate our gentle handling of delicate original windows. Modern home owners value our expertise with complex window systems. We treat every architectural style with the care and respect it deserves.',
      '<strong>Vacation Home and Rental Management:</strong> Many Pocono Pines properties serve seasonal or rental purposes. We accommodate flexible scheduling around occupancy patterns, provide professional documentation with before/after photos, and work seamlessly with property managers. We understand vacation rental operations and can provide turnover service that ensures arriving guests find pristine windows. This level of professional service makes managing seasonal properties straightforward.',
      '<strong>Pocono Pines Community Knowledge:</strong> We\'ve served this diverse community since 2015 and understand what makes it special—the mix of permanent and seasonal residents, the appreciation for architectural diversity from vintage cottages to modern estates, the unique airstrip amenities, and the wide range of homeowner needs. Our reputation is built on serving Pocono Pines\' diversity with equal professionalism and respect.'
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({
    city,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = cityData[citySlug];

  if (!city) {
    return {
      title: 'Location Not Found',
    };
  }

  // Location-specific title variations (55-60 chars for optimal SERP display)
  const titles: Record<string, string> = {
    'lake-naomi': 'Lakefront Window Cleaning in Lake Naomi, PA',
    'timber-trails': 'Forest Window Cleaning in Timber Trails, PA',
    'pocono-pines': 'Vacation Home Window Cleaning in Pocono Pines, PA',
  };

  // Location-specific meta descriptions with unique value props
  const descriptions: Record<string, string> = {
    'lake-naomi': 'Expert lakefront window cleaning for Lake Naomi vacation homes. Mineral deposit removal, seasonal service, pristine lake views. Family-owned since 2015.',
    'timber-trails': 'Forest property window cleaning in Timber Trails. Tree sap removal, remote access, eco-friendly solutions. 40+ properties served.',
    'pocono-pines': 'Vacation home & airstrip window cleaning in Pocono Pines. Vintage cottage experts. Aircraft residue specialists. Turnover service available.',
  };

  const title = titles[citySlug] || `Window Cleaning in ${city.name}, PA`;
  const description = descriptions[citySlug] || `Professional window cleaning in ${city.name}, ${city.county}. Residential & commercial. 500+ homes served. Call (570) 614-9575.`;

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `https://windowcleaning.sbs/locations/${citySlug}`
    },
    openGraph: {
      title: title,
      description: description,
      images: [`/images/locations/${citySlug}-hero.jpg`],
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = cityData[citySlug];

  if (!city) {
    notFound();
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Alexander's Cleaning Service - ${city.name}`,
    "telephone": "+1-570-614-9575",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": "PA",
      "postalCode": city.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.lat,
      "longitude": city.lng
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "addressRegion": "PA"
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "35"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": city.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://windowcleaning.sbs"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://windowcleaning.sbs/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": city.name,
        "item": `https://windowcleaning.sbs/locations/${citySlug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="bg-gray-100 py-3">
        <div className="container-custom">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-primary hover:text-primary-dark">Home</Link></li>
            <li className="text-gray-500">/</li>
            <li><Link href="/locations" className="text-primary hover:text-primary-dark">Locations</Link></li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700">{city.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="mb-6">Professional Window Cleaning in {city.name}, Pennsylvania</h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100">
              Serving {city.name} homes and businesses since 2015. Over 500 satisfied customers across {city.county}.
            </p>
            <div className="flex items-center gap-6 mb-8 text-sm flex-wrap">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>5.0 Stars (35+ Reviews)</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>$2M Insured</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Family-Owned</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="btn-secondary text-center">Get Free Quote</a>
              <a href="tel:+15706149575" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors text-lg text-center" style={{ minHeight: '48px' }}>
                (570) 614-9575
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Window Cleaning Experts Serving {city.name}</h2>
            {city.intro.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our {city.name} Window Cleaning Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Residential Window Cleaning</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Interior and exterior window cleaning
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Screen cleaning and reinstallation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sill and track detail cleaning
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Hard water stain removal
                </li>
              </ul>
              <Link href="/services/residential" className="text-primary font-semibold hover:text-primary-dark mt-4 inline-block">
                Learn More About Residential Services →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Commercial Window Cleaning</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Storefront and office building cleaning
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Flexible scheduling (early/after hours)
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-story building capability
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Recurring service contracts available
                </li>
              </ul>
              <Link href="/services/commercial" className="text-primary font-semibold hover:text-primary-dark mt-4 inline-block">
                Learn More About Commercial Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us in City */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Why Choose Alexander's in {city.name}?</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {city.whyChooseUs.map((reason, index) => {
              // Safely parse <strong> tags without dangerouslySetInnerHTML
              const parts = reason.split(/<strong>|<\/strong>/);
              return (
                <div key={`why-${index}`} className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 text-lg">
                    {parts.map((part, i) =>
                      i % 2 === 1 ? <strong key={`strong-${i}`}>{part}</strong> : part
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Challenges */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">{city.name}-Specific Window Cleaning Challenges</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {city.challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>
                <p className="text-gray-700">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">What {city.name} Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {city.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6">
                <div className="flex text-secondary mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.neighborhood}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Served */}
      {city.neighborhoods.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6">Neighborhoods We Serve in {city.name}</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {city.neighborhoods.map((neighborhood, index) => (
                  <span key={index} className="bg-white px-6 py-3 rounded-lg shadow">
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Frequently Asked Questions About Window Cleaning in {city.name}</h2>
            <div className="space-y-6">
              {city.faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Also Serving Nearby Areas */}
      {city.adjacentCities && city.adjacentCities.length > 0 && (
        <section className="section-padding bg-blue-50">
          <div className="container-custom">
            <h2 className="text-center mb-6">Also Serving Nearby Areas</h2>
            <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
              We provide professional window cleaning throughout Northeast PA beyond {city.name}. Find your nearby service areas below.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {city.adjacentCities.map((adjacentCity, index) => (
                <Link
                  key={index}
                  href={`/locations/${adjacentCity.slug}`}
                  className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow text-center"
                >
                  <strong className="text-gray-900">{adjacentCity.name}</strong>
                </Link>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              <Link href="/locations" className="text-primary hover:text-primary-dark font-semibold">
                View all service areas →
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section id="quote" className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-white mb-4">Stop Putting Up With Cloudy Windows</h2>
              <p className="text-xl text-blue-100 mb-2">
                Get crystal-clear views of your {city.name === 'Lake Naomi' ? 'lake' : city.name === 'Timber Trails' ? 'forest' : 'property'} with professional maintenance cleaning.
              </p>
              <p className="text-lg text-blue-100 font-semibold">
                📅 Spring Cleaning Slots Filling Fast – Schedule Your Appointment Now
              </p>
            </div>
            <QuoteForm />
            <p className="text-center text-blue-50 text-sm mt-6">
              ✓ Free assessment (no obligation) | ✓ Licensed & insured | ✓ 100% satisfaction guarantee
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
