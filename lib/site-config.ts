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
  logo: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  category: string;
};

export type LogoItem = {
  name: string;
  src: string;
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

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type PageHeroContent = {
  title: string;
  breadcrumbs: BreadcrumbItem[];
};

export type ServicesShowcaseContent = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  viewAllLabel: string;
  viewAllHref: string;
  cardIcon: string;
};

export type HomeSecuritySolutionItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  imageClassName?: string;
  cardClassName?: string;
};

export type HomeSecuritySolutionsContent = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  viewAllLabel: string;
  viewAllHref: string;
  actionIcon: string;
  cards: HomeSecuritySolutionItem[];
};

export type ExpertisePoint = {
  title: string;
  description: string;
};

export type ExpertiseProgressItem = {
  label: string;
  value: number;
};

export type ProfessionalExpertiseContent = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  sideCardTitle: string;
  sideCardDescription: string;
  sideCardIcon: string;
  points: ExpertisePoint[];
  progressItems: ExpertiseProgressItem[];
};

export const siteConfig = {
  brand: {
    name: "Samrat Security",
    tagline:
      "Reliable security solutions delivered with professionalism, discipline, and 24/7 protection.",
    supportPhone: "+91 98989 24397",
    supportEmail: "support@samratsecurity.com",
    address: "Kazipur 6710, Sirajganj, BD",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "F.A.Q", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Our Clients", href: "/clients" },
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
        "Trained and professional security guards ensuring safety for offices, factories, and residential areas.",
    },
    {
      id: "02",
      title: "Event Security",
      description:
        "Complete security management for events, ensuring smooth operations and crowd control.",
    },
    {
      id: "03",
      title: "Corporate Security",
      description:
        "Reliable protection for corporate offices with disciplined staff and advanced security protocols.",
    },
    {
      id: "04",
      title: "Residential Security",
      description:
        "Dedicated security services for apartments, societies, and private properties.",
    },
    {
      id: "05",
      title: "CCTV Surveillance",
      description:
        "24/7 monitoring with advanced camera systems to detect and prevent any suspicious activity.",
    },
    {
      id: "06",
      title: "Access Control",
      description:
        "Smart entry management systems to control and monitor who enters your premises.",
    },
  ] as ServiceItem[],
  servicesShowcase: {
    eyebrow: "Our Services",
    title: "Our Exclusive",
    highlight: "Services",
    description:
      "We offer a wide range of professional security services designed to protect your business, property, and people.",
    viewAllLabel: "View All",
    viewAllHref: "/services",
    cardIcon: "/svgs/common/docs.svg",
  } as ServicesShowcaseContent,
  homeSecuritySolutions: {
    eyebrow: "Projects",
    title: "Our Security",
    highlight: "Solutions",
    description: "Explore our wide range of security solutions delivered across different industries.",
    viewAllLabel: "View All",
    viewAllHref: "/services",
    actionIcon: "/svgs/common/Our_Security_solution.svg",
    cards: [
      {
        title: "Access Verification Systems",
        description: "Secure authentication systems for controlled and safe entry management.",
        imageSrc: "/images/common/OurSecuritySolutionsImg1_HomePage.jpg",
        imageAlt: "Access control at a public event",
        href: "/services",
        imageClassName: "object-cover object-[center_25%]",
      },
      {
        title: "Night Security Services",
        description: "Dedicated night patrol and monitoring to ensure safety during high-risk hours.",
        imageSrc: "/images/common/OurSecuritySolutionsImg2_HomePage.jpg",
        imageAlt: "Security officers on night patrol",
        href: "/services",
        imageClassName: "object-cover object-[center_20%]",
      },
      {
        title: "VIP Protection Services",
        description: "Personalized security for high-profile individuals ensuring safety, privacy, and confidence.",
        imageSrc: "/images/common/OurSecuritySolutionsImg3_HomePage.jpg",
        imageAlt: "VIP security personnel near residential perimeter",
        href: "/services",
        imageClassName: "object-cover object-[center_20%]",
      },
      {
        title: "Remote Surveillance Control",
        description: "Advanced remote monitoring systems to keep an eye on your property from anywhere.",
        imageSrc: "/images/common/OurSecuritySolutionsImg4_HomePage.jpg",
        imageAlt: "Control room surveillance monitoring",
        href: "/services",
        imageClassName: "object-cover object-center",
      },
      {
        title: "Industrial Security",
        description: "Specialized security services for factories and industrial areas with strict safety and monitoring protocols.",
        imageSrc: "/images/common/OurSecuritySolutionsImg5_HomePage.jpg",
        imageAlt: "Industrial site security team",
        href: "/services",
        imageClassName: "object-cover object-[center_2%]",
      },
    ],
  } as HomeSecuritySolutionsContent,
  professionalExpertise: {
    eyebrow: "Why Choose Us",
    title: "Delivering Safety Through",
    highlight: "Professional Expertise",
    description:
      "We provide reliable and professional security services designed to protect your people and property. With trained personnel, modern technology, and a strong commitment to safety, we ensure peace of mind for every client we serve.",
    ctaLabel: "Get In Touch",
    ctaHref: "/contact",
    imageSrc: "/images/common/YourTrustedSecurityPartnerImg1_HomePage.png",
    imageAlt: "Professional security officers",
    sideCardTitle: "Turning Safety Into Complete Protection",
    sideCardDescription:
      "We combine experience, technology, and skilled manpower to deliver effective security solutions tailored to your needs.",
    sideCardIcon: "/svgs/common/docs.svg",
    points: [
      {
        title: "Our Expertise",
        description: "Years of industry experience helping businesses and residential spaces stay secure.",
      },
      {
        title: "Reliable Team",
        description: "Dedicated and disciplined professionals committed to maintaining safety at all times.",
      },
    ],
    progressItems: [
      { label: "Security Guard", value: 97 },
      { label: "House Keeping", value: 97 },
    ],
  } as ProfessionalExpertiseContent,
  faqs: [
    {
      question: "How do your security services work?",
      answer:
        "We assess your requirements, create a customized security plan, and deploy trained personnel along with necessary technology to ensure complete protection.",
    },
    {
      question: "Are your security guards professionally trained?",
      answer:
        "Yes, all our guards are highly trained, verified, and experienced in handling different security situations with discipline and efficiency.",
    },
    {
      question: "Do you provide 24/7 security services?",
      answer:
        "Absolutely. We offer round-the-clock security services to ensure continuous protection for your property and people.",
    },
    {
      question: "Can I customize security services based on my needs?",
      answer:
        "Yes, we provide flexible and tailored security solutions depending on your business, event, or residential requirements.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve corporate offices, residential societies, events, industrial areas, retail stores, and more.",
    },
    {
      question: "How do I choose the right security service for my needs?",
      answer:
        "Our team analyzes your location, risks, and requirements to recommend the most suitable security solution tailored to your needs.",
    },
    {
      question: "Do your security guards carry any equipment?",
      answer:
        "Yes, depending on the requirement, our guards may be equipped with communication devices, surveillance tools, and other necessary equipment.",
    },
    {
      question: "Can your services be used for short-term projects or events?",
      answer:
        "Absolutely. We provide flexible security services for short-term needs such as events, exhibitions, and temporary projects.",
    },
    {
      question: "How do you ensure the reliability of your staff?",
      answer:
        "All our personnel go through strict background checks, professional training, and regular performance evaluations to maintain high standards.",
    },
    {
      question: "Do you provide security services in multiple locations?",
      answer:
        "Yes, we offer scalable security solutions and can deploy teams across multiple locations as per client requirements.",
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
    { id: "c1", name: "Blue Club", logo: "/images/our_clients/blue_club.jpg" },
    { id: "c2", name: "Blinkit", logo: "/images/our_clients/blinkit.png" },
    { id: "c3", name: "TeaPost", logo: "/images/our_clients/tea_post.png" },
    { id: "c4", name: "Radio Mirchi", logo: "/images/our_clients/radio_mirchi.png" },
    { id: "c5", name: "Balaji Hardware", logo: "/images/our_clients/balaji_hardware.jpg" },
    { id: "c6", name: "Silver Pumps", logo: "/images/our_clients/silver_pumps.png" },
    { id: "c7", name: "Meena Cast", logo: "/images/our_clients/meena_cast.png" },
    { id: "c8", name: "DNCC", logo: "/images/our_clients/DNCC.jpg" },
    { id: "c9", name: "Gangotri School", logo: "/images/our_clients/gangotri_school.png" },
    { id: "c10", name: "Navyug School", logo: "/images/our_clients/navyug_school.png" },
    { id: "c11", name: "New Era School", logo: "/images/our_clients/new_era_school.png" },
    { id: "c12", name: "SGVP School", logo: "/images/our_clients/SGVP_school.png" },
    { id: "c13", name: "Navodaya Vidhyalay", logo: "/images/our_clients/navodaya_vidhyalay.png" },
    { id: "c14", name: "Khushbu Auto Finance", logo: "/images/our_clients/khushbu_auto_finance.jpg" },
    { id: "c15", name: "Shree Mayur Engineering", logo: "/images/our_clients/shree_mayur_engineering.png" },
    { id: "c16", name: "Zincare", logo: "/images/our_clients/zincare.png" },
  ] as ClientItem[],
  galleryItems: [
    { id: "g1", title: "Corporate Security Briefing", category: "Corporate" },
    { id: "g2", title: "Event Access Control", category: "Event" },
    { id: "g3", title: "Residential Patrol Deployment", category: "Residential" },
    { id: "g4", title: "Control Room Monitoring", category: "Surveillance" },
    { id: "g5", title: "VIP Escort Detail", category: "Executive" },
    { id: "g6", title: "Perimeter Inspection", category: "Industrial" },
    { id: "g7", title: "Night Shift Operations", category: "24/7 Coverage" },
    { id: "g8", title: "Emergency Response Drill", category: "Training" },
  ] as GalleryItem[],
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
    compactRoutes: ["/contact", "/blog", "/faq"],
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
      title: "Let's Help You Find the Right Service",
      description: "Looking for reliable security services? Get expert advice, customized solutions, and the protection your business or property needs all in one place.",
      ctaDescription: "Connect with our experts and get tailored protection for your needs.",
      buttonLabel: "Contact",
      buttonHref: "/contact",
    },
  },
  homeHero: {
    eyebrow: "Trusted & Professional Security Services",
    title: "Where Safety Meets",
    highlight: "Professional Excellence",
    description:
      "We deliver dependable security services with trained professionals and modern technology. Whether it's corporate spaces, events, or residential areas, our team ensures complete protection with quick response and strong discipline.",
    stats: [
      { label: "Industry Experience", value: "10+" },
      { label: "Satisfied Clients", value: "300+" },
      { label: "Monitoring & Support", value: "24/7" },
    ] as StatItem[],
    primaryImage: "/images/common/HeroSectionImg_HomePage.png",
    secondaryImage: "/images/common/HeroSectionImg2_HomePage.png",
    sealText: "10+ YEARS OF EXPERIENCE",
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
    galleryGrid: {
      eyebrow: "Gallery",
      title: "Security Operations",
      highlight: "In Action",
      description:
        "A quick look at our on-ground deployments, monitoring workflows, and response-ready field operations.",
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
  aboutShowcase: {
    eyebrow: "About Us",
    title: "Your Trusted",
    highlight: "Security Partner",
    description: "We are committed to delivering reliable and professional security services that protect what matters most.",
    viewAllLabel: "View All",
    viewAllHref: "/about",
    primaryImage: "/images/common/YourTrustedSecurityPartnerImg1_HomePage.png",
    secondaryImage: "/images/common/YourTrustedSecurityPartnerImg2_HomePage.png",
    supportCardTitle: "24/7 Support",
    supportCardDescription: "Our team is always alert and ready to respond at any time.",
    supportCardCtaHref: "/contact",
    featureIcon: "/svgs/common/docs.svg",
    features: [
      {
        title: "Our Expertise",
        description: "With years of experience, we provide customized security solutions for businesses, events, and residential areas.",
      },
      {
        title: "Trained Professionals",
        description: "Our security personnel are highly trained, disciplined, and prepared to handle all types of situations.",
      },
      {
        title: "Advanced Technology",
        description: "We use modern surveillance systems and smart monitoring tools to ensure maximum protection.",
      },
    ],
    moreCtaLabel: "More About Us",
    moreCtaHref: "/about",
    callLabel: "Call Us Any Time",
    callIcon: "/svgs/common/Phone_Number.svg",
    logos: [
      { name: "GeM", src: "/images/about_us/SliderLogo1.png" },
      { name: "Scrum Alliance", src: "/images/about_us/SliderLogo2.png" },
      { name: "ISO", src: "/images/about_us/SliderLogo3.png" },
      { name: "MSME", src: "/images/about_us/SliderLogo4.png" },
      { name: "Certified Badge", src: "/images/about_us/SliderLogo5.png" },
    ] as LogoItem[],
  },
  pageHeroes: {
    about: {
      title: "About Us",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "About Us" },
      ],
    } as PageHeroContent,
    services: {
      title: "Services",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Services" },
      ],
    } as PageHeroContent,
    faq: {
      title: "F.A.Q",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "F.A.Q" },
      ],
    } as PageHeroContent,
    team: {
      title: "Our Team",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Our Team" },
      ],
    } as PageHeroContent,
    clients: {
      title: "Our Clients",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Our Clients" },
      ],
    } as PageHeroContent,
    gallery: {
      title: "Gallery",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Gallery" },
      ],
    } as PageHeroContent,
    blog: {
      title: "Blog",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Blog" },
      ],
    } as PageHeroContent,
    contact: {
      title: "Contact Us",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Contact Us" },
      ],
    } as PageHeroContent,
  },
  blogPostPage: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
    ] as BreadcrumbItem[],
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.862952741749!2d70.79347179999999!3d22.298746299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb0b0872a3e9%3A0x428d318f3c88c6f7!2sTRENDS!5e0!3m2!1sen!2sin!4v1775842740092!5m2!1sen!2sin",
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
