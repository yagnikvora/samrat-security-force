export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
};

export type ClientItem = {
  id: string;
  name: string;
};

export type BlogPreview = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
};

export const siteConfig = {
  brand: {
    name: "Samrat Security",
    tagline:
      "Reliable security solutions delivered with professionalism, discipline, and 24/7 protection.",
    supportPhone: "+88012345678",
    supportEmail: "support@samratsecurity.com",
    address: "Kazipur 6710, Sirajganj, BD",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "F.A.Q", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ] as NavItem[],
  footerLinks: {
    quick: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About Us", href: "/about" },
    ] as NavItem[],
    support: [
      { label: "Contact Us", href: "/contact" },
      { label: "Blog Articles", href: "/blog" },
      { label: "FAQs", href: "/faq" },
      { label: "Our Team", href: "/team" },
    ] as NavItem[],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ] as NavItem[],
  },
  heroStats: [
    { label: "Years Experience", value: "10+" },
    { label: "Satisfied Clients", value: "300+" },
    { label: "Emergency Support", value: "24/7" },
    { label: "Certified Officers", value: "150+" },
  ] as StatItem[],
  services: [
    {
      id: "01",
      title: "Manned Guarding",
      description:
        "Trained guards for offices, factories, and residential complexes.",
    },
    {
      id: "02",
      title: "Event Security",
      description:
        "End-to-end event protection with coordinated crowd control.",
    },
    {
      id: "03",
      title: "Corporate Security",
      description:
        "Corporate access control, patrol routines, and incident readiness.",
    },
    {
      id: "04",
      title: "Residential Security",
      description:
        "Dedicated building and neighborhood safety monitoring services.",
    },
    {
      id: "05",
      title: "CCTV Surveillance",
      description:
        "24/7 monitoring and reporting with escalation-ready processes.",
    },
    {
      id: "06",
      title: "Access Control",
      description:
        "Visitor management and access policy enforcement for all sites.",
    },
  ] as ServiceItem[],
  faqs: [
    {
      question: "How do your security services work?",
      answer:
        "We assess your requirements, create a security plan, and deploy trained personnel with practical monitoring workflows.",
    },
    {
      question: "Are your security guards professionally trained?",
      answer:
        "Yes. Every deployed professional passes structured training and site-specific briefing before assignment.",
    },
    {
      question: "Do you provide 24/7 security services?",
      answer:
        "Yes, we provide full-time and shift-based coverage based on your operating hours and risk profile.",
    },
    {
      question: "Can I customize services for my site?",
      answer:
        "Yes. Plans are customized by location type, crowd size, threat level, and reporting requirements.",
    },
    {
      question: "Do you support multiple locations?",
      answer:
        "Yes, we can deploy teams across multiple branches with centralized coordination and periodic audit reporting.",
    },
  ] as FaqItem[],
  team: [
    { id: "t1", name: "Justin Deviz", role: "Founder - Director" },
    { id: "t2", name: "Rahim Uddin", role: "Operations Lead" },
    { id: "t3", name: "Nabila Akter", role: "Training Coordinator" },
    { id: "t4", name: "Asif Mahmud", role: "Field Supervisor" },
    { id: "t5", name: "Imran Kabir", role: "Risk Analyst" },
    { id: "t6", name: "Sharmin Sultana", role: "Client Success" },
    { id: "t7", name: "Tanvir Hossain", role: "Patrol Manager" },
    { id: "t8", name: "Mina Khatun", role: "Compliance Officer" },
  ] as TeamMember[],
  clients: [
    { id: "c1", name: "Blue Club" },
    { id: "c2", name: "Blinkit" },
    { id: "c3", name: "TeaPost" },
    { id: "c4", name: "Radio Mirchi" },
    { id: "c5", name: "Silver Pumps" },
    { id: "c6", name: "DNCC" },
    { id: "c7", name: "Navyug School" },
    { id: "c8", name: "SGVP School" },
  ] as ClientItem[],
  blogPlaceholders: [
    {
      slug: "how-professional-security-guards-improve-safety",
      title: "How Professional Security Guards Improve Safety",
      excerpt:
        "Learn how trained security teams reduce response time and improve confidence for businesses and communities.",
      category: "Safety",
      publishedAt: "2026-04-01",
    },
    {
      slug: "importance-of-cctv-surveillance",
      title: "Importance of CCTV Surveillance in Modern Security",
      excerpt:
        "Discover how monitoring workflows with clear escalation paths protect property and people.",
      category: "Technology",
      publishedAt: "2026-03-28",
    },
    {
      slug: "event-security-planning-guide",
      title: "Event Security: Planning for Safe Gatherings",
      excerpt:
        "A practical checklist for planning secure events with reliable crowd flow and incident response.",
      category: "Events",
      publishedAt: "2026-03-20",
    },
  ] as BlogPreview[],
  newsletter: {
    title: "Stay Updated with Our Security Insights",
    description:
      "Get practical updates, safety tips, and industry insights delivered directly to your inbox.",
  },
};
