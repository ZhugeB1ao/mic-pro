export const eventData = {
  hero: {
    badge: "Design Event Conference",
    badgeYear: "2023",
    badgeClass: "inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-800",
    badgeYearClass: "text-[#F961D8] font-bold",
    titlePrefix: "Designing",
    titleLine2: "Events for Brand",
    titleHighlight: "Awareness",
    starIcon: "/event/icons/star-blue.svg",
    description:
      "Our team of skilled dentists and dental professionals are dedicated to providing you with comprehensive and personalized dental care.",
    primaryBtn: {
      text: "Get Ticket",
      href: "#ticket",
    },
    secondaryBtn: {
      text: "Watch Video",
      href: "#video",
    },
    cards: [
      {
        id: 1,
        title: "Stage Lighting Event",
        image: "/event/images/hero/event-1.png",
      },
      {
        id: 2,
        title: "Audience Arena Event",
        image: "/event/images/hero/event-2.png",
      },
    ],
  },

  partners: {
    image: "/event/images/partners/partners.png",
    alt: "Partners: Amazon, Contentful, WhatsApp, Dropbox, Slack",
  },

  statistics: [
    {
      id: 1,
      icon: "/event/icons/ticket.svg",
      iconBg: "bg-[#FFF4EB]",
      value: "10,000",
      label: "Conference Tickets Confirmed",
    },
    {
      id: 2,
      icon: "/event/icons/users.svg",
      iconBg: "bg-[#EBF7FF]",
      value: "30+",
      label: "Participants from Different Countries",
    },
    {
      id: 3,
      icon: "/event/icons/briefcase.svg",
      iconBg: "bg-[#EEF4FF]",
      value: "100+",
      label: "Sponsor of big company",
    },
  ],

  eventTypes: {
    titlePrefix: "The simplest way to host all your",
    titleHighlight: "events",
    items: [
      {
        id: 1,
        title: "In Person events",
        description: "Go beyond webinars and workshop",
        buttonText: "Get Ticket",
        buttonHref: "#ticket",
        headerBg: "bg-[linear-gradient(183.68deg,#F961D8_3.23%,#F36D98_87.92%)]",
        gradientStyle: "linear-gradient(183.68deg, #F961D8 3.23%, #F36D98 87.92%)",
        image: "/event/images/events/event-1.png",
      },
      {
        id: 2,
        title: "Virtual Events",
        description: "Go beyond webinars and workshop",
        buttonText: "Get Ticket",
        buttonHref: "#ticket",
        headerBg: "bg-[linear-gradient(183.9deg,#1663F9_3.41%,#3DC7E5_81.28%)]",
        gradientStyle: "linear-gradient(183.9deg, #1663F9 3.41%, #3DC7E5 81.28%)",
        image: "/event/images/events/event-2.png",
      },
      {
        id: 3,
        title: "Design events",
        description: "Go beyond webinars and workshop",
        buttonText: "Get Ticket",
        buttonHref: "#ticket",
        headerBg: "bg-[linear-gradient(183.9deg,#F5953A_3.41%,#FF7999_81.28%)]",
        gradientStyle: "linear-gradient(183.9deg, #F5953A 3.41%, #FF7999 81.28%)",
        image: "/event/images/events/event-3.png",
      },
    ],
  },

  features: {
    ticketing: {
      tag: "TURN A PROFIT",
      tagClass: "text-[#FF9035] font-bold text-xs sm:text-sm tracking-wider uppercase",
      title: "0% commission event ticketing",
      description:
        "Our ticketing platform supports a wide range of payment options and 10+ payment gateways, so you can sell tickets exactly the way you want.",
      image: "/event/images/features/feature-1.png",
    },
    marketing: {
      tag: "GO THE DISTANCE",
      tagClass: "text-[#1868FB] font-bold text-xs sm:text-sm tracking-wider uppercase",
      title: "Omni-channel marketing tools",
      description:
        "From a fully-customizable event website to email campaigns, from customizable social banners to affiliate marketing",
      image: "/event/images/features/feature-2.png",
    },
    engagement: {
      tag: "KEEP THEM HOOKED",
      tagClass: "text-[#F85E9F] font-bold text-xs sm:text-sm tracking-wider uppercase",
      title: "Holistic audience engagement",
      description:
        "Onsite or online, our session interaction tools, networking lounges, discussion channels, and 1:1 meetings make it easier than ever for you to engage attendees",
      image: "/event/images/features/feature-3.png",
    },
  },

  testimonial: {
    badge: "CUSTOMER STORY",
    quote:
      "\"We used Backstage to organize our second anniversary. It helped us gather more than 450 guests to celebrate this event with us.\"",
    author: {
      name: "Yaron Shifman",
      role: "CEO, Swathly Ltd",
      avatar: "/event/images/testimonial/man.png",
    },
    rating: 5,
    companyLogo: "/event/logos/amazon.png",
    companyName: "Amazon",
  },

  faq: {
    titlePrefix: "Frequently Asked",
    titleHighlight: "Questions",
    items: [
      {
        id: 1,
        question: "What is all-in-one event management software?",
        answer:
          "All-in-one event management software is a technology solution that helps event planners to organize all types of events (conference, workshop, trade show) in any format (onsite, online, hybrid) from beginning to end.\n\nThis includes all aspects of the event planning process like building an event website, setting up event ticketing, and handling event day operations like check-in and badging, session management, and event analytics.",
        defaultOpen: true,
      },
      {
        id: 2,
        question: "How can I get a proposal for my project?",
        answer:
          "Contact our team and we'll prepare a tailored proposal based on your requirements.",
        defaultOpen: false,
      },
      {
        id: 3,
        question: "What process should I expect from your UX agency?",
        answer:
          "Research, planning, design, development and continuous support.",
        defaultOpen: false,
      },
      {
        id: 4,
        question: "Can you help us redesign our legacy enterprise/B2B software?",
        answer:
          "Yes. We modernize existing systems while preserving business workflows.",
        defaultOpen: false,
      },
      {
        id: 5,
        question: "How much does it cost to hire you for a UI/UX design project?",
        answer:
          "Pricing depends on scope, timeline and project requirements.",
        defaultOpen: false,
      },
    ],
  },

  cta: {
    badge: "Free Ticket",
    title: "Ready to manage your events smarter, better?",
    buttonText: "Get Started Now",
    buttonHref: "#register",
  },
};