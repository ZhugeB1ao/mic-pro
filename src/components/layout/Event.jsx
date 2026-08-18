import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { FaFacebookF, FaGoogle, FaTwitter, FaDribbble } from "react-icons/fa";

const eventHeaderLinks = [
  { name: "Home", href: "/" },
  { name: "Schedule", href: "#schedule" },
  { name: "Speaker", href: "#speaker" },
  { name: "Ticket", href: "#ticket" },
  { name: "Contact", href: "#contact" },
  { name: "Program", href: "#program" },
];

const eventFooterColumns = [
  {
    key: "features",
    title: "Features",
    links: [
      { title: "Website Builder", link: "#" },
      { title: "Ticketing System", link: "#" },
      { title: "Zoom Integration", link: "#" },
      { title: "Event Analytics", link: "#" },
      { title: "Sponsor Management", link: "#" },
      { title: "All Features", link: "#" },
    ],
  },
  {
    key: "resources",
    title: "Resources",
    links: [
      { title: "The green Room", link: "#" },
      { title: "Help Center", link: "#" },
      { title: "Community Forum", link: "#" },
      { title: "Blog", link: "#" },
      { title: "Webinars", link: "#" },
      { title: "Product Updates", link: "#" },
    ],
  },
  {
    key: "quick-links",
    title: "Quick links",
    links: [
      { title: "Pricing", link: "#" },
      { title: "Contact us", link: "#" },
      { title: "Customers", link: "#" },
      { title: "Newsletter", link: "#" },
    ],
  },
  {
    key: "solutions",
    title: "Solutions",
    links: [
      { title: "Onsite operations", link: "#" },
      { title: "Virtual events", link: "#" },
      { title: "Virtual trade show", link: "#" },
      { title: "Hybrid events", link: "#" },
    ],
  },
  {
    key: "compare",
    title: "How to compare",
    links: [
      { title: "Airmeet alternative", link: "#" },
      { title: "event alternative", link: "#" },
      { title: "hoping alternative", link: "#" },
      { title: "Swapcard alternative", link: "#" },
    ],
  },
];

const eventFooterBottom = {
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
        <a
          href="#"
          aria-label="Facebook"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xs transition-transform hover:scale-110"
        >
          <FaFacebookF size={12} className="text-blue-600" />
        </a>
        <a
          href="#"
          aria-label="Google"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xs transition-transform hover:scale-110"
        >
          <FaGoogle size={12} className="text-red-500" />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xs transition-transform hover:scale-110"
        >
          <FaTwitter size={12} className="text-sky-400" />
        </a>
        <a
          href="#"
          aria-label="Dribbble"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xs transition-transform hover:scale-110"
        >
          <FaDribbble size={12} className="text-pink-500" />
        </a>
      </div>
    </div>
  ),
};

export default function EventLayout({ children, data }) {
  const content = data;
  const columns = content?.columns || eventFooterColumns;
  const bottom = content?.bottom || eventFooterBottom;

  return (
    <>
      <Header
        links={eventHeaderLinks}
        button={{
          text: "Register",
          href: "#register",
        }}
      />
      <main className="min-h-screen bg-white">{children}</main>
      <Footer columns={columns} bottom={bottom} />
    </>
  );
}
