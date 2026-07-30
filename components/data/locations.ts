// components/data/locations.ts
// Idi centralized location data — kotha location add cheyalante ikkade array lo object add cheyi.
// Prop names (title, description, etc.) ni nee existing components (FaqAccordion, ContactForm) 
// signatures ki match cheskoni adjust cheyi.

export interface LocationData {
  slug: string;
  name: string;
  fullName: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  intro: string;
  nearbyAreas: string[];
  services: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const locations: LocationData[] = [
  {
    slug: "hyderabad",
    name: "Hyderabad",
    fullName: "Hyderabad, Telangana",
    metaTitle: "Digital Marketing Agency in Hyderabad | GK Digital Solutions",
    metaDescription:
      "GK Digital Solutions is a Hyderabad-based digital marketing agency offering SEO, Google Ads, social media marketing & website design. Free consultation available.",
    heroHeading: "Digital Marketing Agency in Hyderabad",
    heroSubheading: "SEO, Google Ads & Social Media Growth for Hyderabad Businesses",
    intro:
      "GK Digital Solutions helps Hyderabad businesses grow online with data-driven digital marketing strategies — from local SEO to full-funnel lead generation.",
    nearbyAreas: ["Kukatpally", "Miyapur", "Hitech City", "Gachibowli", "Madhapur", "Ameerpet"],
    services: [
      { title: "SEO", description: "Rank higher for local searches across Hyderabad" },
      { title: "Google Ads", description: "Instant visibility with targeted PPC campaigns" },
      { title: "Social Media Marketing", description: "Build brand presence on Instagram & Facebook" },
      { title: "Website Design", description: "Fast, mobile-first websites that convert" },
    ],
    faqs: [
      {
        question: "Do you serve businesses across all of Hyderabad?",
        answer: "Yes, we work with businesses across Hyderabad including Kukatpally, Hitech City, Gachibowli, and Secunderabad.",
      },
      {
        question: "How much does digital marketing cost in Hyderabad?",
        answer: "Pricing depends on your goals and channels. Book a free consultation for a custom quote.",
      },
    ],
  },
  {
    slug: "kphb",
    name: "KPHB",
    fullName: "KPHB Colony, Kukatpally, Hyderabad",
    metaTitle: "Digital Marketing Agency in KPHB, Hyderabad | GK Digital Solutions",
    metaDescription:
      "GK Digital Solutions offers SEO, Google Ads, social media marketing & website design for businesses in KPHB, Kukatpally, Hyderabad. Get a free consultation.",
    heroHeading: "Digital Marketing Agency in KPHB, Hyderabad",
    heroSubheading: "SEO, Google Ads & Social Media Growth for KPHB Businesses",
    intro:
      "Based near KPHB, GK Digital Solutions helps local businesses in Kukatpally grow with SEO, Google Ads, and social media marketing tailored to the area.",
    nearbyAreas: ["Kukatpally", "Miyapur", "JNTU", "Bachupally", "Nizampet"],
    services: [
      { title: "SEO", description: "Rank higher for local searches in KPHB & Kukatpally" },
      { title: "Google Ads", description: "Instant visibility with targeted PPC campaigns" },
      { title: "Social Media Marketing", description: "Build brand presence on Instagram & Facebook" },
      { title: "Website Design", description: "Fast, mobile-first websites that convert" },
    ],
    faqs: [
      {
        question: "Do you serve businesses in KPHB?",
        answer: "Yes, we are based near KPHB and serve businesses across Kukatpally, Miyapur, JNTU, and Bachupally.",
      },
      {
        question: "How much does digital marketing cost in KPHB?",
        answer: "Our packages start based on your goals — book a free consultation for a custom quote.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((loc) => loc.slug === slug);
}