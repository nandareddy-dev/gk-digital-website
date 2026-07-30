// components/data/locations.ts
// Kotha area add cheyalante — ikkade ఒక object add cheyi. Kotha file create cheyakkarledu.

export interface LocationData {
  slug: string;
  name: string; // Display name, e.g. "Miyapur"
  areaLabel: string; // Breadcrumb label, e.g. "Miyapur, Hyderabad"
  metaTitle: string;
  metaDescription: string;
  intro: string;
  localHighlights: string[];
  neighborhoods: string[];
  services: string[];
}

export const locations: LocationData[] = [
  {
    slug: "hyderabad",
    name: "Hyderabad",
    areaLabel: "Hyderabad, Telangana",
    metaTitle: "Digital Marketing Agency in Hyderabad | GK Digital Solutions",
    metaDescription:
      "GK Digital Solutions is a Hyderabad-based digital marketing agency offering SEO, Google Ads, Meta Ads, and website design for local businesses.",
    intro:
      "We're a Hyderabad-based team helping local businesses get found, get leads, and grow — with the kind of market understanding that only comes from working here.",
    localHighlights: [
      "Based in Hyderabad — we understand the local market, not just national trends",
      "Worked with Hyderabad businesses across interior design, real estate, and D2C",
      "In-person meetings available for Hyderabad-based clients",
      "Local SEO expertise for 'near me' and area-specific searches",
    ],
    neighborhoods: [
      "Banjara Hills",
      "Jubilee Hills",
      "Gachibowli",
      "Kondapur",
      "Madhapur",
      "Kukatpally",
      "Secunderabad",
      "Hitech City",
    ],
    services: [
      "Local SEO & Google Business Profile optimization",
      "Google Ads for Hyderabad-based service businesses",
      "Meta Ads targeted to local neighborhoods",
      "Website design for Hyderabad businesses",
    ],
  },
  {
    slug: "kphb",
    name: "KPHB",
    areaLabel: "KPHB, Kukatpally, Hyderabad",
    metaTitle: "Digital Marketing Agency in KPHB, Hyderabad | GK Digital Solutions",
    metaDescription:
      "GK Digital Solutions offers SEO, Google Ads, Meta Ads, and website design for businesses in KPHB, Kukatpally, Hyderabad. Get a free audit today.",
    intro:
      "We're a Hyderabad-based team helping KPHB and Kukatpally businesses get found, get leads, and grow — with the kind of local market understanding that only comes from working here.",
    localHighlights: [
      "Based near KPHB — we understand the Kukatpally market directly, not just national trends",
      "Worked with local businesses across interior design, real estate, and D2C in Kukatpally",
      "In-person meetings available for KPHB and Kukatpally-based clients",
      "Local SEO expertise for 'near me' and KPHB-area specific searches",
    ],
    neighborhoods: [
      "Kukatpally",
      "Miyapur",
      "JNTU",
      "Bachupally",
      "Nizampet",
      "Pragathi Nagar",
      "Hitech City",
      "Madhapur",
    ],
    services: [
      "Local SEO & Google Business Profile optimization for KPHB searches",
      "Google Ads for KPHB & Kukatpally-based service businesses",
      "Meta Ads targeted to Kukatpally and nearby neighborhoods",
      "Website design for KPHB-based businesses",
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((loc) => loc.slug === slug);
}