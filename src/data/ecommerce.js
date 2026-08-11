export const ecommerceData = {
  hero: {
    title: "Shop the Best",
    highlight: "Styles",
    suffix: "One Place",
    leftAvatar: "/ecommerce/images/hero/think-1.png",
    leftDoodle: "/ecommerce/images/hero/think-1-i.png",
    rightAvatar: "/ecommerce/images/hero/think-2.png",
    rightDoodle: "/ecommerce/images/hero/think-2-i.png",
    groupImage: "/ecommerce/images/hero/think-group.png",
  },

  products: {
    title: "Popular",
    highlight: "Products",
    buttonText: "See all Products",
    buttonHref: "#products",
    items: [
      {
        id: 1,
        name: "Smart t- Sirt",
        price: "40$",
        originalPrice: "100$",
        image: "/ecommerce/images/products/product-1.png",
        bgCard: "bg-[#EFEFEF]",
        isFavorite: true,
      },
      {
        id: 2,
        name: "Smart t- Sirt",
        price: "40$",
        originalPrice: "100$",
        image: "/ecommerce/images/products/product-2.png",
        bgCard: "bg-[#F9ECE4]",
        isFavorite: false,
      },
      {
        id: 3,
        name: "Smart t- Sirt",
        price: "40$",
        originalPrice: "100$",
        image: "/ecommerce/images/products/product-3.png",
        bgCard: "bg-[#E5F3F7]",
        isFavorite: false,
      },
      {
        id: 4,
        name: "Smart t- Sirt",
        price: "40$",
        originalPrice: "100$",
        image: "/ecommerce/images/products/product-4.png",
        bgCard: "bg-[#FAE9F1]",
        isFavorite: false,
      },
    ],
  },

  similarItems: {
    category: "Men Fashion",
    title: "Similar Items You Might Enjoy",
    description:
      "Hello Designers! This is the video calling website landing page design concept. Video calling software is very popular nowadays.",
    badges: [
      {
        id: 1,
        title: "Care instructions",
        value: "Machine wash at 30.c",
      },
      {
        id: 2,
        title: "Fabric material",
        value: "84% cotton, 16% polyester",
      },
    ],
    image: "/ecommerce/images/similar-item/man.png",
  },

  sellEverywhere: {
    title: "Sell everywhere",
    description:
      "Bring your products and services to the world. Get started with selling on one channel and expand everywhere online and in person.",
    features: [
      { text: "Build a new online store or connect to any website", color: "text-[#9333EA]" },
      { text: "Sell across social media platforms like Facebook, Instagram and TikTok", color: "text-[#F97316]" },
      { text: "Integrate with online marketplaces like Amazon, eBay, Walmart", color: "text-[#2563EB]" },
      { text: "Connect with Point-of-Sale in your physical store", color: "text-[#F43F5E]" },
    ],
    image: "/ecommerce/images/sell-everywhere/sell-everywhere.png",
  },

  growFaster: {
    title: "Grow faster",
    description:
      "Take your business to the next level with our easy-to-use marketing tools to attract and retain more customers.",
    features: [
      { text: "Automated Google and Facebook ads", color: "text-[#EC4899]" },
      { text: "TikTok, Pinterest and Snapchat Pixel integrations", color: "text-[#F97316]" },
      { text: "Automated abandoned cart emails and other customizable Marketing emails", color: "text-[#2563EB]" },
      { text: "Discount coupons and gift cards", color: "text-[#F43F5E]" },
    ],
    image: "/ecommerce/images/grow-faster/grow-faster.png",
  },

  statistics: {
    items: [
      {
        id: 1,
        value: "36+",
        label: "User Trust",
        colorClass: "text-[#F844A6]",
      },
      {
        id: 2,
        value: "42k+",
        label: "Brand Vision",
        colorClass: "text-[#FE8A27]",
      },
      {
        id: 3,
        value: "8k+",
        label: "Achievement",
        colorClass: "text-[#3D91F9]",
      },
      {
        id: 4,
        value: "20k+",
        label: "Products",
        colorClass: "text-[#F85C7F]",
      },
    ],
  },

  testimonials: {
    quote:
      "Internal stakeholders were happy with the final product. The team was able to communicate their progress clearly and concisely. They took the initiative and executed the project without much supervision Internal stakeholders were happy with the final product.",
    author: {
      name: "Mitchell Marsh",
      role: "UI/UX Designer",
      avatar: "/ecommerce/images/testimonials/mitchell-marsh.png",
    },
  },

  services: {
    items: [
      {
        id: 1,
        icon: "/ecommerce/images/services/support.png",
        title: "Onetime Support",
        description:
          "Find your place with an immersive photo experience and the most listings, including things",
        buttonText: "Learn More",
        buttonHref: "#",
        active: false,
      },
      {
        id: 2,
        icon: "/ecommerce/images/services/market.png",
        title: "App Market",
        description:
          "No matter what path you take to sell your home, we can help you navigate a successful",
        buttonText: "Learn More",
        buttonHref: "#",
        active: true,
      },
      {
        id: 3,
        icon: "/ecommerce/images/services/mobile.png",
        title: "Manage on Mobile",
        description:
          "We're creating a seamless online experience – from shopping on the largest rental network",
        buttonText: "Learn More",
        buttonHref: "#",
        active: false,
      },
    ],
  },

  cta: {
    title: "Your Own Online Store is Just a Few Clicks Away",
    buttonText: "Get Started for free",
    buttonHref: "#",
    subtitle: "No credit card required — pay when you're ready.",
  },
};