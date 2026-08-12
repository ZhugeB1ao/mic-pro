import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { ChevronDown } from "lucide-react";
import { FaFacebookF, FaGoogle, FaTwitter, FaDribbble } from "react-icons/fa";

const socialData = [
  { icon: FaFacebookF, color: "text-[#1877F2]", label: "Facebook", href: "#" },
  { icon: FaGoogle, color: "text-[#EA4335]", label: "Google", href: "#" },
  { icon: FaTwitter, color: "text-[#1DA1F2]", label: "Twitter", href: "#" },
  { icon: FaDribbble, color: "text-[#EA4C89]", label: "Dribbble", href: "#" },
];

const educationFooterColumns = [
  {
    key: "learn",
    title: "Learn Something New",
    links: [
      { title: "Learn a Language", link: "#" },
      { title: "Learn a Design", link: "#" },
      { title: "Learn a Coding", link: "#" },
      { title: "Learn a HR", link: "#" },
      { title: "MS Computer Science", link: "#" },
      { title: "Applied Data Science", link: "#" },
    ],
  },
  {
    key: "popular",
    title: "Popular Topics",
    links: [
      { title: "Accounting", link: "#" },
      { title: "Cybersecurity", link: "#" },
      { title: "Data Analysis", link: "#" },
      { title: "Data Science", link: "#" },
      { title: "Excel", link: "#" },
      { title: "Google", link: "#" },
      { title: "Python", link: "#" },
    ],
  },
  {
    key: "company",
    title: "Our Company",
    links: [
      { title: "About us", link: "#" },
      { title: "What We Offer", link: "#" },
      { title: "Leadership", link: "#" },
      { title: "career", link: "#" },
      { title: "For Government", link: "#" },
      { title: "Free Course", link: "#" },
    ],
  },
  {
    key: "community",
    title: "Community",
    links: [
      { title: "Learners", link: "#" },
      { title: "Partners", link: "#" },
      { title: "Beta Testers", link: "#" },
      { title: "Translators", link: "#" },
      { title: "Blog", link: "#" },
      { title: "Tech Blog", link: "#" },
    ],
  },
  {
    key: "more",
    title: "More",
    links: [
      { title: "Press", link: "#" },
      { title: "Investors", link: "#" },
      { title: "Terms", link: "#" },
      { title: "Help", link: "#" },
      { title: "Account", link: "#" },
      { title: "Privacy", link: "#" },
      { title: "Security", link: "#" },
      { title: "Article", link: "#" },
    ],
  },
];

const educationBottom = {
  type: "node",
  content: (
    <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-400 sm:flex-row">
      <p>© 2021 Besnik.com I All Rights Reserved</p>
      <div className="flex items-center gap-3">
        {socialData.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={idx}
              href={item.href}
              aria-label={item.label}
              className={`flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xs transition-transform hover:scale-110 ${item.color}`}
            >
              <Icon size={14} />
            </a>
          );
        })}
      </div>
    </div>
  ),
};

export default function EducationLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header
        links={[
          { name: "Home", href: "/education" },
          {
            name: "Course",
            href: "#courses",
            icon: <ChevronDown size={14} className="opacity-70" />,
          },
          {
            name: "Mentor",
            href: "#about",
            icon: <ChevronDown size={14} className="opacity-70" />,
          },
          { name: "Blog", href: "#blog" },
          { name: "Contact", href: "#contact" },
          {
            name: "Program",
            href: "#features",
            icon: <ChevronDown size={14} className="opacity-70" />,
          },
        ]}
        button={{
          text: "Sign Up",
          href: "#signup",
        }}
      />
      <main className="flex-1">{children}</main>
      <Footer columns={educationFooterColumns} bottom={educationBottom} />
    </div>
  );
}
