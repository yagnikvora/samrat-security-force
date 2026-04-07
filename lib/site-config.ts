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

export type SectionTitleContent = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
};

export type BrandValueKey = "supportPhone" | "supportEmail" | "address";

export type ContactDetailItem = {
  key: BrandValueKey;
  label: string;
  icon: string;
  alt: string;
};

export type SocialItem = {
  name: string;
  href: string;
  icon: string;
};

export type FooterContactItem = {
  label: string;
  icon: string;
  href?: string;
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
  footerHeadings: {
    quickLinks: "Quick Links",
    support: "Help & Support",
    contactInfo: "Contact Info",
  },
  footer: {
    compactRoutes: ["/contact", "/blog"],
    logoSrc: "/Logos/logo.png.svg",
    description: "Reliable security solutions delivered with professionalism, discipline, and 24/7 protection you can trust.",
    socials: [
      { name: "Facebook", href: "#", icon: "/svgs/common/Facebook.svg" },
      { name: "X", href: "#", icon: "/svgs/common/X.svg" },
      { name: "LinkedIn", href: "#", icon: "/svgs/common/Linkedin.svg" },
      { name: "Instagram", href: "#", icon: "/svgs/common/Instagram.svg" },
    ] as SocialItem[],
    contactItems: [
      { label: "Kazipur 6710, Dhaka, BD.", icon: "/svgs/footer/Home.svg" },
      { label: "example@domain.com", icon: "/svgs/footer/mail.svg", href: "mailto:example@domain.com" },
      { label: "+880123456789", icon: "/svgs/footer/Phone call.svg", href: "tel:+880123456789" },
      { label: "+880987654321", icon: "/svgs/footer/Phone call.svg", href: "tel:+880987654321" },
      { label: "87654321", icon: "/svgs/footer/chat_bubble.svg" },
    ] as FooterContactItem[],
    copyrightText: "Copyright (Nytrox - info@nytrox.com) © 2026 All rights reserved",
    topBox: {
      title: "Stay Updated with Our Security Insights",
      description: "Get the latest updates, security tips, and industry insights delivered straight to your inbox. Stay informed and keep your business and property protected with expert advice.",
      inputPlaceholder: "Your Email Address",
      buttonLabel: "Subscribe",
    },
  },
  homeHero: {
    eyebrow: "Trusted Protection",
    title: "Where Safety Meets",
    highlight: "Professional Excellence",
    description:
      "We deliver practical, human-first security services for businesses, residential communities, and events. Our teams are trained, responsive, and accountable.",
    primaryCtaLabel: "Get In Touch",
    secondaryCtaLabel: "View Services",
  },
  sections: {
    aboutIntro: {
      eyebrow: "About Us",
      title: "Your Trusted",
      highlight: "Security Partner",
      description: "We are committed to practical, accountable protection that keeps people and operations safe.",
    } as SectionTitleContent,
    servicesPreview: {
      eyebrow: "Our Services",
      title: "Our Exclusive",
      highlight: "Services",
      description: "A strong portfolio of protective services tailored for operational continuity.",
    } as SectionTitleContent,
    servicesGrid: {
      eyebrow: "Our Services",
      title: "Security Services",
      highlight: "That Scale",
      description: "Reliable security operations for companies, residences, and public events.",
    } as SectionTitleContent,
    homeFaqPreview: {
      eyebrow: "FAQ",
      title: "Frequently Asked",
      highlight: "Questions",
      description: "Find quick answers about our process and service model.",
      ctaLabel: "See All FAQs",
    },
    servicesFaq: {
      eyebrow: "FAQ",
      title: "Frequently Asked",
      highlight: "Questions",
      description: "Service and deployment questions answered clearly.",
    } as SectionTitleContent,
    faqPage: {
      eyebrow: "F.A.Q",
      title: "Answers to Common",
      highlight: "Security Questions",
      description: "Clear, direct responses to help you understand our process and coverage model.",
    } as SectionTitleContent,
    teamGrid: {
      eyebrow: "Our Team",
      title: "Meet Our",
      highlight: "Security Team",
      description: "A disciplined team with strong operational standards and responsive leadership.",
    } as SectionTitleContent,
    clientsGrid: {
      eyebrow: "Clients",
      title: "Our Valuable",
      highlight: "Clients",
      description: "Trusted by institutions, businesses, and communities that require reliable protection.",
    } as SectionTitleContent,
    blogList: {
      eyebrow: "Blog",
      title: "Latest Security",
      highlight: "Insights",
      description: "Practical insights on guard operations, surveillance, and incident prevention.",
      readMoreLabel: "Read More",
    },
  },
  aboutHighlights: [
    {
      title: "24/7 Support",
      description: "Our team remains available for emergencies and rapid response coordination.",
    },
    {
      title: "Trained Professionals",
      description: "Every officer is site-briefed, disciplined, and aligned with security protocols.",
    },
    {
      title: "Advanced Technology",
      description: "Monitoring processes and reporting systems are integrated with field operations.",
    },
  ],
  contactPage: {
    metadataTitle: "Contact Us",
    heroTitle: "Contact Us",
    breadcrumbHome: "Home",
    breadcrumbHomeHref: "/",
    breadcrumbCurrent: "Contact Us",
  },
  contactSection: {
    heading: "Get In Touch With Us",
    description:
      "Have questions or need reliable security services? Our team is here to help. Reach out to us anytime, and we will provide the right solutions to keep your business and property safe.",
    infoHeading: "Contact Info",
    infoDescription:
      "Feel free to contact us for any inquiries or support. We are always ready to assist you with professional security solutions.",
    details: [
      { key: "supportPhone", label: "Phone Number", icon: "/svgs/common/Call.svg", alt: "Phone" },
      { key: "supportEmail", label: "Email Address", icon: "/svgs/common/Email.svg", alt: "Email" },
      { key: "address", label: "Office Location", icon: "/svgs/common/Location.svg", alt: "Location" },
    ] as ContactDetailItem[],
    followLabel: "Follow Us:",
    socials: [
      { name: "Facebook", href: "#", icon: "/svgs/common/Facebook.svg" },
      { name: "X", href: "#", icon: "/svgs/common/X.svg" },
      { name: "LinkedIn", href: "#", icon: "/svgs/common/Linkedin.svg" },
      { name: "Instagram", href: "#", icon: "/svgs/common/Instagram.svg" },
    ] as SocialItem[],
  },
  contactMap: {
    title: "Our Location",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.462639225516!2d70.78923047506925!3d22.29833647968802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca1efac3c12b%3A0xa931c3b51e45dd09!2sSamrat%20Security%20Force!5e0!3m2!1sen!2sin!4v1775580069129!5m2!1sen!2sin",
  },
  contactForm: {
    gmailComposeBaseUrl: "https://mail.google.com/mail/?view=cm&fs=1",
    emailTemplate: {
      greeting: "Hello Samrat Security Team,",
      requestIntro: "I would like to inquire about your security services. Please find my details below:",
      detailsHeading: "Contact Details",
      fullNameLabel: "Full Name",
      emailLabel: "Email Address",
      subjectLabel: "Subject",
      messageHeading: "Message",
      signOff: "Thank you for your time. I look forward to your response.",
      closingNamePrefix: "Best regards",
    },
    placeholders: {
      name: "Your Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
    },
    defaultSubject: "Security Service Inquiry",
    errors: {
      required: "Please fill in your name, email, and message.",
      invalidEmail: "Please enter a valid email address.",
    },
    submitLabel: "Send Message",
  },
};
