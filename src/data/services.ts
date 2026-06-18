import service1 from "@/assets/service-1.png";
import service2 from "@/assets/service-2.png";
import service3 from "@/assets/service-3.png";
import service4 from "@/assets/service-4.png";
import service5 from "@/assets/service-5.png";
import service6 from "@/assets/service-6.png";
import service7 from "@/assets/service-7.png";

export interface Service {
  number: string;
  image: string;
  title: string;
  slug: string;
  description: string;
  basePrice: number; // Base price per hour
  complexityOptions: ComplexityOption[];
}

export interface ComplexityOption {
  label: string;
  multiplier: number;
  description: string;
}

export const services: Service[] = [
  {
    number: "01",
    image: service1,
    title: "Kitchen Resprays",
    slug: "kitchen-resprays",
    description:
      "Transform tired kitchen cabinets, doors and worktops with a flawless factory-grade spray finish — a fraction of the cost of a full replacement.",
    basePrice: 55,
    complexityOptions: [
      { label: "Small Kitchen", multiplier: 1, description: "Up to 10 doors and drawers" },
      { label: "Medium Kitchen", multiplier: 1.6, description: "10–18 doors and drawers" },
      { label: "Large Kitchen", multiplier: 2.4, description: "18+ doors, island and panels" },
    ],
  },
  {
    number: "02",
    image: service2,
    title: "uPVC Windows, Doors & Conservatories",
    slug: "upvc-windows-doors",
    description:
      "Refresh dated white uPVC into modern anthracite, charcoal or any RAL colour — fully prepped, masked and sprayed on-site.",
    basePrice: 45,
    complexityOptions: [
      { label: "Single Property Section", multiplier: 1, description: "1–4 windows or one door" },
      { label: "Full Frontage", multiplier: 1.8, description: "Whole front or rear elevation" },
      { label: "Whole House + Conservatory", multiplier: 2.8, description: "Every window, door & conservatory" },
    ],
  },
  {
    number: "03",
    image: service3,
    title: "Fascias, Soffits & Downpipes",
    slug: "fascias-soffits-downpipes",
    description:
      "Bring eaves and rainwater goods back to life with a hard-wearing exterior spray finish — far cheaper than replacement uPVC.",
    basePrice: 50,
    complexityOptions: [
      { label: "Single Elevation", multiplier: 1, description: "One side of a typical home" },
      { label: "Full House", multiplier: 1.8, description: "All fascias, soffits and downpipes" },
      { label: "Large / Detached", multiplier: 2.5, description: "Detached property or unusual heights" },
    ],
  },
  {
    number: "04",
    image: service4,
    title: "Garage Door Respray",
    slug: "garage-door-respray",
    description:
      "Up & over, sectional or roller garage doors brought back to showroom condition in any colour, sprayed in-situ.",
    basePrice: 45,
    complexityOptions: [
      { label: "Single Door", multiplier: 1, description: "Standard single garage door" },
      { label: "Double Door", multiplier: 1.6, description: "Double garage door or two singles" },
      { label: "Premium Finish", multiplier: 2.2, description: "Multi-coat metallic or specialist coating" },
    ],
  },
  {
    number: "05",
    image: service5,
    title: "Wardrobes & Interior Coatings",
    slug: "wardrobes-interior-coatings",
    description:
      "Fitted wardrobes, staircases, panelling and interior joinery resprayed to a flawless hand-finished workshop standard.",
    basePrice: 50,
    complexityOptions: [
      { label: "Single Unit", multiplier: 1, description: "One wardrobe or staircase" },
      { label: "Bedroom Suite", multiplier: 1.7, description: "Full fitted bedroom" },
      { label: "Whole Home Interior", multiplier: 2.6, description: "Multiple rooms of joinery" },
    ],
  },
  {
    number: "06",
    image: service6,
    title: "Shop Fronts & Commercial",
    slug: "shop-fronts-commercial",
    description:
      "Retail facades, signage panels and commercial uPVC sprayed out of hours to minimise downtime for your business.",
    basePrice: 65,
    complexityOptions: [
      { label: "Single Frontage", multiplier: 1, description: "One shop front or unit" },
      { label: "Full Refurb", multiplier: 1.8, description: "Frontage, signage and trims" },
      { label: "Multi-Site Rollout", multiplier: 2.8, description: "Several branches across the region" },
    ],
  },
  {
    number: "07",
    image: service7,
    title: "Industrial Protective Coatings",
    slug: "industrial-protective-coatings",
    description:
      "Hard-wearing protective coatings for steelwork, plant, racking and factory equipment — applied with HVLP and airless systems.",
    basePrice: 70,
    complexityOptions: [
      { label: "Small Plant / Racking", multiplier: 1, description: "Single units or short runs" },
      { label: "Structural Steel", multiplier: 1.9, description: "Beams, columns and frameworks" },
      { label: "Full Site Coating", multiplier: 3, description: "Large facility, multi-day project" },
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((s) => s.slug === slug);
};
