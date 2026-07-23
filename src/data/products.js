import skinGlowImg from "../assets/images/product_image.jpeg";
import dehydrationImg from "../assets/images/product_image.jpeg";
import stressImg from "../assets/images/product_image.jpeg";
import nadImg from "../assets/images/product_image.jpeg";
import immunityImg from "../assets/images/product_image.jpeg";
import detoxImg from "../assets/images/product_image.jpeg";

export const products = [
  {
    id: 1,
    title: "Skin Glow Therapy",
    subtitle: "Reveal your natural glow from within.",
    image: skinGlowImg,

    benefits: [
      "Supports healthy, glowing skin",
      "Helps protect against oxidative stress",
      "Supports collagen formation",
      "Promotes skin hydration",
      "Helps maintain an even-looking complexion",
    ],

    contains: [
      "Glutathione",
      "Vitamin C",
      "Alpha-Lipoic Acid (ALA)",
      "Vitamin B Complex",
    ],
  },

  {
    id: 2,
    title: "De-Hydration Therapy",
    subtitle: "Restore hydration and refresh your body.",
    image: dehydrationImg,

    benefits: [
      "Restores hydration levels",
      "Replenishes essential electrolytes",
      "Supports recovery after travel, exercise or heat exposure",
      "Helps maintain energy and overall wellness",
      "Promotes a refreshed feeling",
    ],

    contains: [
      "Normal Saline (NS)",
      "Ringer's Lactate",
      "Kabilyte / Sterofunding (as clinically appropriate)",
      "Essential Electrolytes",
      "Vitamin B Complex",
    ],
  },

  {
    id: 3,
    title: "Stress & Relaxation Therapy",
    subtitle: "Relax your mind. Restore your balance.",
    image: stressImg,

    benefits: [
      "Supports relaxation and overall well-being",
      "Helps reduce feelings of stress and fatigue",
      "Promotes mental clarity and calmness",
      "Supports hydration and recovery",
      "Helps improve sleep",
    ],

    contains: [
      "Magnesium",
      "Vitamin B Complex",
      "Vitamin C",
      "Essential Electrolytes",
    ],
  },

  {
    id: 4,
    title: "NAD+ Signature Therapy",
    subtitle: "Recharge your body. Elevate your wellness.",
    image: nadImg,

    description:
      "Our NAD+ Signature Therapy delivers NAD+ through IV infusion to support cellular energy production and overall wellness.",

    benefits: [
      "Supports cellular energy production",
      "Promotes overall wellness and vitality",
      "Helps reduce feelings of fatigue",
      "Supports mental clarity and focus",
      "Encourages recovery and healthy aging",
    ],

    contains: [
      "NAD+ (Nicotinamide Adenine Dinucleotide)",
      "Essential Electrolytes",
    ],
  },

  {
    id: 5,
    title: "Immunity Booster Therapy",
    subtitle: "Strengthen your wellness from within.",
    image: immunityImg,

    benefits: [
      "Supports normal immune function",
      "Helps replenish essential vitamins and antioxidants",
      "Promotes hydration and recovery",
      "Supports energy and overall wellness",
      "Helps protect against oxidative stress",
    ],

    contains: [
      "High-Dose Vitamin C",
      "Glutathione",
      "Zinc",
      "Vitamin B Complex",
    ],
  },

  {
    id: 6,
    title: "Detoxification Therapy",
    subtitle: "Refresh your body. Restore your balance.",
    image: detoxImg,

    benefits: [
      "Supports the body's natural detoxification process",
      "Helps protect against oxidative stress",
      "Promotes hydration and recovery",
      "Supports liver health and cellular wellness",
      "Replenishes essential vitamins and antioxidants",
    ],

    contains: [
      "Glutathione",
      "Vitamin C",
      "Alpha-Lipoic Acid (ALA)",
      "N-Acetylcysteine (NAC)",
    ],
  },
];