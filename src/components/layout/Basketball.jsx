import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { ChevronDown } from "lucide-react";
import { FaFacebookF, FaGoogle, FaTwitter, FaDribbble } from "react-icons/fa";
import logo from "@/assets/logos/logo.svg";

const socialData = [
  { icon: FaFacebookF, color: "text-blue-600", label: "Facebook", href: "#" },
  { icon: FaGoogle, color: "text-red-500", label: "Google", href: "#" },
  { icon: FaTwitter, color: "text-blue-400", label: "Twitter", href: "#" },
  { icon: FaDribbble, color: "text-pink-500", label: "Dribbble", href: "#" },
];

const basketballFooterColumns = [
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
        <ul className="flex items-center gap-3 pt-2">
          {socialData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li key={idx}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xs transition-all hover:scale-105 hover:border-slate-300"
                >
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
    key: "main-links",
    title: "Main Links",
    links: [
      { title: "Home", link: "#" },
      { title: "Club", link: "#" },
      { title: "Tryouts", link: "#" },
      { title: "Contacts", link: "#" },
      { title: "Camps", link: "#" },
    ],
  },
  {
    key: "useful-links",
    title: "Useful Links",
    links: [
      { title: "Soccer for Life", link: "#" },
      { title: "SFL Club", link: "#" },
      { title: "Programs", link: "#" },
      { title: "Camps", link: "#" },
    ],
  },
  {
    key: "company",
    title: "Company",
    links: [
      { title: "FAQ", link: "#" },
      { title: "Support", link: "#" },
      { title: "Career", link: "#" },
      { title: "Contact Us", link: "#" },
    ],
  },
  {
    key: "location",
    title: "Location",
    links: [
      { title: "Soccer for life", link: "#" },
      { title: "Address: 225 Milburn Ave", link: "#" },
      { title: "Milburn, NJ 12345", link: "#" },
    ],
  },
];

const basketballBottom = {
  type: "node",
  content: (
    <div className="flex flex-col items-center justify-center gap-4 text-xs text-slate-500 sm:flex-row">
      <p>© 2021 Besnik.com | All Rights Reserved</p>
    </div>
  ),
};

export default function BasketballLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header
        links={[
          { name: "Home", href: "/basketball" },
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
          text: "Start a Project",
          href: "#start",
        }}
      />
      <main className="flex-1">{children}</main>
      <Footer columns={basketballFooterColumns} bottom={basketballBottom} />
    </div>
  );
}
