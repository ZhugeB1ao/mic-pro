import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { FaFacebookF, FaGoogle, FaTwitter, FaDribbble } from "react-icons/fa";
import logo from "@/assets/logos/logo.svg";

const socialData = [
  { icon: FaFacebookF, color: "text-[#1877F2]", label: "Facebook", href: "#" },
  { icon: FaGoogle, color: "text-[#EA4335]", label: "Google", href: "#" },
  { icon: FaTwitter, color: "text-[#1DA1F2]", label: "Twitter", href: "#" },
  { icon: FaDribbble, color: "text-[#EA4C89]", label: "Dribbble", href: "#" },
];

const ecommerceFooterColumns = [
  {
    key: "brand",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <img
            src={typeof logo === "string" ? logo : logo.src}
            alt="MicPro logo"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0"
          />
          <h2 className="text-2xl font-bold text-slate-900">MicPro</h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs font-normal">
          he new allocation will help expand response to cover those.
        </p>
      </div>
    ),
  },
  {
    key: "sell-online",
    title: "Sell Online",
    links: [
      { title: "Sell Everywhere", link: "#" },
      { title: "Sell on website", link: "#" },
      { title: "Sell on instagram", link: "#" },
      { title: "Sell on amazon", link: "#" },
      { title: "Sell on mobile", link: "#" },
    ],
  },
  {
    key: "business-solutions",
    title: "Business Solutions",
    links: [
      { title: "Entrepreneurs", link: "#" },
      { title: "Drop shipping", link: "#" },
      { title: "Wholesale", link: "#" },
      { title: "Local Business", link: "#" },
      { title: "Fashion", link: "#" },
    ],
  },
  {
    key: "technology",
    title: "Technology",
    links: [
      { title: "Security", link: "#" },
      { title: "Cloud Backup", link: "#" },
      { title: "PCI Compliance", link: "#" },
      { title: "Integrations", link: "#" },
      { title: "Pricing", link: "#" },
    ],
  },
  {
    key: "support",
    title: "Support",
    links: [
      { title: "Help Center", link: "#" },
      { title: "Guides", link: "#" },
      { title: "API Docs", link: "#" },
      { title: "Community", link: "#" },
      { title: "Contact Us", link: "#" },
    ],
  },
];

const ecommerceBottom = {
  type: "node",
  content: (
    <div className="space-y-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          {socialData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                aria-label={item.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xs transition-all hover:scale-110 hover:border-slate-300"
              >
                <Icon size={14} className={item.color} />
              </a>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <span className="text-xs sm:text-sm font-semibold text-slate-700">
            Available on
          </span>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="inline-block transition-opacity hover:opacity-85"
            >
              <Image
                src="/ecommerce/logos/google-play.png"
                alt="Get it on Google Play"
                width={125}
                height={38}
                className="h-9 w-auto object-contain"
              />
            </a>
            <a
              href="#"
              className="inline-block transition-opacity hover:opacity-85"
            >
              <Image
                src="/ecommerce/logos/app-store.png"
                alt="Download on the App Store"
                width={125}
                height={38}
                className="h-9 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 pt-8 text-center text-xs sm:text-sm text-slate-400 font-normal">
        <p>© 2021 Besnik.com I All Rights Reserved</p>
      </div>
    </div>
  ),
};

export default function EcommerceLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header
        links={[
          { name: "Home", href: "/ecommerce" },
          {
            name: "Product",
            href: "#products",
            icon: <ChevronDown size={14} className="opacity-70" />,
          },
          {
            name: "New Arrival",
            href: "#new-arrival",
            icon: <ChevronDown size={14} className="opacity-70" />,
          },
          { name: "Blog", href: "#blog" },
          { name: "Shop", href: "#shop" },
          {
            name: "Brand",
            href: "#brand",
            icon: <ChevronDown size={14} className="opacity-70" />,
          },
        ]}
        button={{
          text: "Shop Now",
          href: "#shop",
        }}
      />
      <main className="flex-1">{children}</main>
      <Footer columns={ecommerceFooterColumns} bottom={ecommerceBottom} />
    </div>
  );
}
