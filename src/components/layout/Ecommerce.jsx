import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
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
          <Image
            src={logo}
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
      { title: "CMS", link: "#" },
      { title: "WordPress", link: "#" },
      { title: "Drupal", link: "#" },
      { title: "Joomla", link: "#" },
    ],
  },
  {
    key: "resources",
    title: "Resources",
    links: [
      { title: "help Center", link: "#" },
      { title: "Podcast", link: "#" },
      { title: "Blog", link: "#" },
      { title: "Guides", link: "#" },
      { title: "Glossary", link: "#" },
      { title: "Product Sell", link: "#" },
    ],
  },
];

const ecommerceBottom = {
  type: "node",
  content: (
    <div className="space-y-12 pt-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Subscribe Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-lg items-center rounded-full border border-slate-200/90 bg-white p-1 pl-6 shadow-xs"
        >
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 bg-transparent py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-[#1A68F8] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 shadow-md shadow-blue-500/20"
          >
            Subscrive
          </button>
        </form>

        {/* Social Icons & App Store Badges Stacked */}
        <div className="flex flex-col items-center lg:items-end gap-4">
          {/* Social Icons */}
          <ul className="flex items-center gap-3">
            {socialData.map((item, idx) => {
              const Icon = item.icon;
              return (
                <li key={idx}>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/90 bg-white shadow-xs transition-all hover:scale-105 hover:border-slate-300"
                  >
                    <Icon className={`${item.color} text-sm duration-300`} />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* App Badges */}
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

      {/* Copyright */}
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
