import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { FaFacebookF, FaGoogle, FaTwitter, FaDribbble } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

// Social icons column — moved up from the footer bottom into the columns grid
const socialColumn = {
  key: "social",
  title: "Follow Us",
  content: (
    <ul className="flex flex-wrap gap-4">
      <li className="rounded-full border border-slate-200 bg-white p-2">
        <FaFacebookF className="text-blue-600 duration-300" />
      </li>
      <li className="rounded-full border border-slate-200 bg-white p-2">
        <FaGoogle className="text-red-500 duration-300" />
      </li>
      <li className="rounded-full border border-slate-200 bg-white p-2">
        <FaTwitter className="text-blue-400 duration-300" />
      </li>
      <li className="rounded-full border border-slate-200 bg-white p-2">
        <FaDribbble className="text-pink-500 duration-300" />
      </li>
    </ul>
  ),
};

// Footer columns: brand + link columns + social column (no aside/subscribe)
const columns = [
  {
    key: "brand",
    content: (
      <div className="space-y-3">
        <p className="text-xs text-slate-500">
          Together we can make a difference. Your support helps vulnerable
          communities around the world.
        </p>
      </div>
    ),
  },
  {
    key: "explore",
    title: "Explore",
    links: [
      { title: "About Us", link: "/#" },
      { title: "Our Mission", link: "/#" },
      { title: "Impact", link: "/#" },
      { title: "Volunteer", link: "/#" },
      { title: "Contact Us", link: "/#" },
    ],
  },
  {
    key: "causes",
    title: "Causes",
    links: [
      { title: "Health & Shelter", link: "/#" },
      { title: "Food & Groceries", link: "/#" },
      { title: "Education", link: "/#" },
      { title: "Clean Water", link: "/#" },
      { title: "Emergencies", link: "/#" },
    ],
  },
  {
    key: "resources",
    title: "Resources",
    links: [
      { title: "News", link: "/#" },
      { title: "Reports", link: "/#" },
      { title: "Press", link: "/#" },
      { title: "FAQ", link: "/#" },
      { title: "Careers", link: "/#" },
    ],
  },
  socialColumn,
];

// Footer bottom: links + copyright only (icons moved up to columns)
const bottom = {
  type: "node",
  content: (
    <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-center md:justify-between md:gap-4">
      <ul className="flex flex-wrap gap-4">
        <li className="text-xs text-slate-500">Platform</li>
        <li className="text-xs text-slate-500">Products</li>
        <li className="text-xs text-slate-500">Resources</li>
      </ul>

      <p className="text-xs text-slate-500">
        &copy; Besnik.com I All Rights Reserved
      </p>
    </div>
  ),
};

export default function CharityLayout({ children }) {
  return (
    <>
      <Header
        links={[
          { name: "Home", href: "/" },
          {
            name: "Causes",
            href: "/causes",
            icon: <ChevronDown size={16} aria-hidden="true" />,
          },
          {
            name: "Impact",
            href: "/impact",
            icon: <ChevronDown size={16} aria-hidden="true" />,
          },
          { name: "About", href: "/about" },
          { name: "News", href: "/news" },
          {
            name: "Get Involved",
            href: "/get-involved",
            icon: <ChevronDown size={16} aria-hidden="true" />,
          },
        ]}
        button={{
          text: "Donate Now",
          href: "/donate",
        }}
      />
      <main>{children}</main>
      <Footer columns={columns} bottom={bottom} />
    </>
  );
}
