export type ProjectStatus = "LIVE" | "IN DEVELOPMENT" | "PROTOTYPE";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  tech: string[];
  image: string;
  features: string[];
  isFeatured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "serveiq",
    name: "ServeIQ",
    tagline: "Restaurant Intelligence Platform",
    description:
      "An advanced restaurant management ecosystem built for admins, staff, and superadmins to control orders, operations, and analytics in one unified system.",
    status: "IN DEVELOPMENT",
    tech: ["React", "Node.js", "Express", "Cloud APIs"],
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=90",
    features: [
      "Order & kitchen workflow management",
      "Staff role control",
      "Billing & inventory integration",
      "Real-time operational dashboards",
    ],
    isFeatured: true,
  },
  {
    slug: "servespare",
    name: "ServeSpare",
    tagline: "Service & Spare Parts Management System",
    description:
      "A digital system designed to manage equipment servicing, spare parts tracking, and maintenance workflows.",
    status: "LIVE",
    tech: ["React", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=90",
    features: [
      "Service request management",
      "Spare inventory tracking",
      "Technician assignment",
      "Service history records",
    ],
  },
  {
    slug: "manpower-hub",
    name: "Manpower Hub",
    tagline: "Recruitment & Workforce Management Platform",
    description:
      "A platform designed for manpower agencies to manage recruitment pipelines, candidate records, job postings, and client coordination.",
    status: "LIVE",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=90",
    features: [
      "Candidate database",
      "Job position management",
      "Interview scheduling",
      "Client requirement tracking",
    ],
  },
  {
    slug: "emi-system",
    name: "Smart EMI System",
    tagline: "Financing Platform",
    description:
      "A financing platform enabling businesses to sell products through installment plans while tracking payments, schedules, and customer accounts.",
    status: "LIVE",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=90",
    features: [
      "EMI account creation",
      "Payment tracking",
      "Installment scheduling",
      "Automated reminders",
    ],
  },
  {
    slug: "simplecommerce",
    name: "SimpleCommerce",
    tagline: "Lightweight Ecommerce Platform",
    description:
      "A lightweight ecommerce platform designed for small businesses to manage products, orders, and customer purchases efficiently.",
    status: "LIVE",
    tech: ["React", "Next.js", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=90",
    features: [
      "Product catalog",
      "Order management",
      "Customer tracking",
      "Email notifications",
    ],
  },
  {
    slug: "restaurant-erp",
    name: "Restaurant ERP",
    tagline: "Centralized Enterprise System",
    description:
      "A centralized enterprise system connecting inventory, purchasing, finance, and restaurant operations into one platform.",
    status: "IN DEVELOPMENT",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=90",
    features: [
      "Inventory management",
      "Supplier coordination",
      "Financial tracking",
      "Multi-branch operations",
    ],
  },
  {
    slug: "ledger-management",
    name: "Ledger Management System",
    tagline: "Financial Tracking Platform",
    description:
      "A digital ledger system designed for businesses to record transactions, manage balances, and maintain financial transparency across accounts.",
    status: "LIVE",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=90",
    features: [
      "Debit / credit entry management",
      "Account balance tracking",
      "Transaction history logs",
      "Basic financial reporting",
    ],
  },
  {
    slug: "inventory-management",
    name: "Inventory Management System",
    tagline: "Stock & Asset Tracking Platform",
    description:
      "A centralized system for managing product inventory, stock levels, and supply flow for small and medium businesses.",
    status: "LIVE",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=90",
    features: [
      "Stock level monitoring",
      "Product catalog management",
      "Supplier tracking",
      "Inventory alerts",
    ],
  },
  {
    slug: "billing-invoice-system",
    name: "Billing & Invoice System",
    tagline: "Digital Billing Platform",
    description:
      "A system that allows businesses to generate invoices, manage customer billing, and track payment records.",
    status: "LIVE",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=90",
    features: [
      "Invoice generation",
      "Customer billing records",
      "Payment tracking",
      "Exportable receipts",
    ],
  },
  {
    slug: "order-management",
    name: "Order Management System",
    tagline: "Operations Workflow Platform",
    description:
      "A platform designed to manage incoming orders, track order progress, and coordinate fulfillment operations.",
    status: "LIVE",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=90",
    features: [
      "Order tracking",
      "Status updates",
      "Customer order history",
      "Delivery coordination",
    ],
  },
  {
    slug: "notification-messaging-engine",
    name: "Notification & Messaging Engine",
    tagline: "Communication Automation System",
    description:
      "A backend communication engine designed to trigger notifications through email, SMS, and messaging platforms based on system events.",
    status: "LIVE",
    tech: ["Node.js", "Express", "MongoDB", "Twilio"],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=90",
    features: [
      "Email notifications",
      "SMS alerts",
      "WhatsApp messaging integration",
      "Event-based triggers",
    ],
  },
  {
    slug: "service-booking-platform",
    name: "Service Booking Platform",
    tagline: "On-Demand Service Marketplace",
    description:
      "A digital platform that connects service providers with customers looking for household or technical services.",
    status: "LIVE",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&q=90",
    features: [
      "Service listings",
      "Provider dashboards",
      "Booking management",
      "Customer request handling",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
