import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Link from "next/link";
import { FaFacebookF, FaGoogle, FaTwitter, FaDribbble } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import logo from "../../assets/logos/logo.svg";

const socialData = [
  { icon: FaFacebookF, color: "text-blue-600", label: "Facebook", href: "#" },
  { icon: FaGoogle, color: "text-red-500", label: "Google", href: "#" },
  { icon: FaTwitter, color: "text-blue-400", label: "Twitter", href: "#" },
  { icon: FaDribbble, color: "text-pink-500", label: "Dribbble", href: "#" },
];

const bottomLinks = ["Platform", "Products", "Resources"];

const left = (
  <div className="space-y-3">
    <div className="flex items-center gap-3">
      <Image
        src={logo}
        alt="MicPro logo"
        width={40}
        height={40}
        unoptimized
        className="h-10 w-10 shrink-0"
      />
      
      <h2 className="text-2xl font-semibold text-slate-900">MicPro</h2>
    </div>

    <p className="text-xs text-slate-500 w-3/4">
      he new allocation will help expand response to cover those.
    </p>
  </div>
);

const right = (
  <div className="space-y-4">
    <ul className="flex flex-wrap gap-4">
      {socialData.map((item, idx) => {
        const Icon = item.icon;
        return (
          <li
            key={idx}
            className="rounded-full border border-slate-200 bg-white p-2"
          >
            <a href={item.href} aria-label={item.label}>
              <Icon className={`${item.color} duration-300`} />
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

const bottom = {
  type: "node",
  content: (
    <div className="flex flex-col-reverse xs:flex-col items-center justify-start gap-8 md:flex-row md:items-center  md:gap-16">
      <p className="text-xs text-slate-500">
        &copy; Besnik.com I All Rights Reserved
      </p>

      <ul className="flex flex-wrap gap-4">
        {bottomLinks.map((text) => (
          <li key={text} className="text-xs text-slate-500">
            {text}
          </li>
        ))}
      </ul>
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
      <Footer left={left} right={right} bottom={bottom} />
    </>
  );
}
