import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { FaFacebookF, FaGoogle, FaTwitter, FaDribbble } from "react-icons/fa";
import logo from "@/assets/logos/logo.svg";

const socialData = [
  { icon: FaFacebookF, color: "text-blue-600", label: "Facebook", href: "#" },
  { icon: FaGoogle, color: "text-red-500", label: "Google", href: "#" },
  { icon: FaTwitter, color: "text-sky-400", label: "Twitter", href: "#" },
  { icon: FaDribbble, color: "text-pink-500", label: "Dribbble", href: "#" },
];

const dentalFooterColumns = [
  {
    key: "brand",
    content: (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <img
            src={typeof logo === "string" ? logo : logo.src}
            alt="MicPro logo"
            width={36}
            height={36}
            className="h-9 w-9 shrink-0"
          />
          <span className="text-2xl font-bold text-slate-900 tracking-tight">
            MicPro
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-xs">
          Our services have been in the dental field for more than 10 years
        </p>
        <div className="space-y-1 text-xs sm:text-sm text-slate-600 font-medium pt-1">
          <p>(123) 456 7890 123</p>
          <p>besnik@gmail.com</p>
        </div>
      </div>
    ),
  },
  {
    key: "services",
    title: "Services",
    links: [
      { title: "Cosmetic Braces", link: "#" },
      { title: "Dental Implant", link: "#" },
      { title: "General Dentistry", link: "#" },
      { title: "Restorative dentistry", link: "#" },
      { title: "Extractions", link: "#" },
    ],
  },
  {
    key: "information",
    title: "Information",
    links: [
      { title: "An Appointment", link: "#appointment" },
      { title: "Sign up", link: "#" },
      { title: "Join Community", link: "#" },
      { title: "Newsletter", link: "#" },
      { title: "New Patient", link: "#" },
    ],
  },
  {
    key: "company",
    title: "Company",
    links: [
      { title: "Partnership", link: "#" },
      { title: "Social Media", link: "#" },
      { title: "About Company", link: "#about" },
      { title: "Clinic Maps", link: "#" },
      { title: "Contact Us", link: "#contact" },
    ],
  },
  {
    key: "subscribe",
    content: (
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-900">Subscribe</h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex max-w-sm items-stretch overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs"
          >
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="min-w-0 flex-1 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex w-11 items-center justify-center bg-[#1868FB] text-white transition-colors hover:bg-blue-700"
            >
              <span className="text-base leading-none">→</span>
            </button>
          </form>
        </div>

        <div className="space-y-1">
          <p className="font-bold text-sm tracking-tight text-slate-900">
            8/10
          </p>
          <p className="text-xs text-slate-500 font-normal">Overall rating</p>
          <div className="flex items-center gap-1 text-base leading-none text-amber-400">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span className="text-slate-200">★</span>
          </div>
        </div>
      </div>
    ),
  },
];

const dentalFooterBottom = {
  type: "node",
  content: (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
      <ul className="flex flex-wrap items-center gap-6">
        <li>
          <a href="#" className="transition-colors hover:text-blue-600">
            Platform
          </a>
        </li>
        <li>
          <a href="#" className="transition-colors hover:text-blue-600">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="transition-colors hover:text-blue-600">
            Resources
          </a>
        </li>
      </ul>

      <p>© 2021 Besnik.com I All Rights Reserved</p>

      <div className="flex items-center gap-3">
        {socialData.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={idx}
              href={item.href}
              aria-label={item.label}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xs transition-transform hover:scale-110"
            >
              <Icon size={13} className={item.color} />
            </a>
          );
        })}
      </div>
    </div>
  ),
};

const dentalHeaderLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Appointment", href: "#appointment" },
  { name: "Facility", href: "#facility" },
  { name: "About", href: "#about" },
  { name: "Schedule", href: "#schedule" },
];

export default function DentalLayout({ children, data }) {
  const content = data;
  const columns = content?.columns || dentalFooterColumns;
  const bottom = content?.bottom || dentalFooterBottom;

  return (
    <>
      <Header
        links={dentalHeaderLinks}
        button={{
          text: "Start a Project",
          href: "#appointment",
        }}
      />
      <main className="min-h-screen bg-white">{children}</main>
      <Footer columns={columns} bottom={bottom} />
    </>
  );
}
