import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { FaFacebookF, FaGoogle, FaTwitter, FaDribbble } from "react-icons/fa";
import logo from "@/assets/logos/logo.svg";

const socialData = [
  { icon: FaFacebookF, color: "text-blue-600", label: "Facebook", href: "#" },
  { icon: FaGoogle, color: "text-red-500", label: "Google", href: "#" },
  { icon: FaTwitter, color: "text-blue-400", label: "Twitter", href: "#" },
  { icon: FaDribbble, color: "text-pink-500", label: "Dribbble", href: "#" },
];

const restaurantFooterColumns = [
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
        <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
          he new allocation will help expand response to cover those.
        </p>
        <ul className="flex items-center gap-2 pt-2">
          {socialData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li
                key={idx}
                className="rounded-full border border-slate-200 bg-white p-2.5 shadow-sm transition-transform hover:scale-105"
              >
                <a href={item.href} aria-label={item.label}>
                  <Icon className={`${item.color} text-sm duration-300`} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    ),
  },
  {
    key: "service",
    title: "Service",
    links: [
      { title: "online order", link: "#" },
      { title: "Pre-Reservation", link: "#" },
      { title: "24/7 Service", link: "#" },
      { title: "PCI Compliance", link: "#" },
      { title: "Integrations", link: "#" },
      { title: "Pricing", link: "#" },
    ],
  },
  {
    key: "quick-links",
    title: "Quick Links",
    links: [
      { title: "Restaurants", link: "#" },
      { title: "Review", link: "#" },
      { title: "Blog", link: "#" },
      { title: "Order Foods", link: "#" },
      { title: "Security", link: "#" },
    ],
  },
  {
    key: "about",
    title: "About",
    links: [
      { title: "Our Story", link: "#" },
      { title: "Benefits", link: "#" },
      { title: "Career", link: "#" },
      { title: "Contact Us", link: "#" },
    ],
  },
  {
    key: "help",
    title: "Help",
    links: [
      { title: "Contact", link: "#" },
      { title: "Support", link: "#" },
      { title: "FAQ", link: "#" },
    ],
  },
];

const restaurantBottom = {
  type: "node",
  content: (
    <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
      <ul className="flex flex-wrap items-center gap-6">
        <li className="hover:text-slate-900 cursor-pointer">Platform</li>
        <li className="hover:text-slate-900 cursor-pointer">Products</li>
        <li className="hover:text-slate-900 cursor-pointer">Resources</li>
      </ul>
      <p>© 2021 Besnik.com | All Rights Reserved</p>
    </div>
  ),
};

export default function RestaurantLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header
        links={[
          { name: "Home", href: "/restaurant" },
          {
            name: "Services",
            href: "#services",
            icon: <ChevronDown size={14} className="opacity-70" />,
          },
          {
            name: "Expertise",
            href: "#expertise",
            icon: <ChevronDown size={14} className="opacity-70" />,
          },
          { name: "Cases", href: "#cases" },
          { name: "Pricing", href: "#pricing" },
          {
            name: "Company",
            href: "#company",
            icon: <ChevronDown size={14} className="opacity-70" />,
          },
        ]}
        button={{
          text: "Order Now",
          href: "#order",
        }}
      />
      <main className="flex-1">{children}</main>
      <Footer columns={restaurantFooterColumns} bottom={restaurantBottom} />
    </div>
  );
}
