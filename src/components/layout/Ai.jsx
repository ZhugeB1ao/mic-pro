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

export default function AiLayout({ children, data, footerData }) {
  const defaultFooterColumns = [
    {
      key: "product",
      title: "Product",
      links: [
        { title: "Micpro Chat", link: "#" },
        { title: "Business Plan", link: "#" },
        { title: "Chrome Extension", link: "#" },
        { title: "Super Integration", link: "#" },
        { title: "Pricing", link: "#" },
        { title: "Recipes", link: "#" },
      ],
    },
    {
      key: "education",
      title: "Education",
      links: [
        { title: "watch video", link: "#" },
        { title: "Request demo", link: "#" },
        { title: "Customer Reviews", link: "#" },
        { title: "Blog", link: "#" },
        { title: "Video", link: "#" },
        { title: "Course", link: "#" },
        { title: "Marketing Guide", link: "#" },
      ],
    },
    {
      key: "support",
      title: "Support",
      links: [
        { title: "FAQ", link: "#faq" },
        { title: "Help Center", link: "#" },
        { title: "Support", link: "#" },
        { title: "Live training", link: "#" },
        { title: "Request a new Features", link: "#" },
      ],
    },
    {
      key: "company",
      title: "Company",
      links: [
        { title: "Careers", link: "#" },
        { title: "Affiliate Partners", link: "#" },
        { title: "Brand Guide", link: "#" },
        { title: "Newsroom", link: "#" },
        { title: "AI conference", link: "#" },
      ],
    },
    {
      key: "legal",
      title: "Legal",
      links: [
        { title: "Privacy", link: "#" },
        { title: "Terms", link: "#" },
        { title: "Security", link: "#" },
      ],
    },
  ];

  const content = data || footerData;
  const columns = content?.columns || defaultFooterColumns;
  const copyright = content?.copyright || "© 2021 Besnik.com I All Rights Reserved";

  const footerBottom = {
    type: "node",
    content: (
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500 font-normal">
          {copyright}
        </p>

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

  return (
    <>
      <Header
        links={[
          { name: "Chat", href: "#chat" },
          {
            name: "Use Cases",
            href: "#use-cases",
            icon: <ChevronDown size={15} className="text-slate-500" aria-hidden="true" />,
          },
          {
            name: "Resources",
            href: "#resources",
            icon: <ChevronDown size={15} className="text-slate-500" aria-hidden="true" />,
          },
          { name: "Pricing", href: "#pricing" },
          {
            name: "Features",
            href: "#features",
            icon: <ChevronDown size={15} className="text-slate-500" aria-hidden="true" />,
          },
        ]}
        button={{
          text: "Get Started free",
          href: "#get-started",
        }}
      />
      <main className="min-h-screen bg-white">{children}</main>
      <Footer columns={columns} bottom={footerBottom} />
    </>
  );
}
