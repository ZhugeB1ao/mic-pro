import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { ChevronDown } from "lucide-react";

export default function AgencyLayout({ children }) {
  return (
    <>
      <Header
        links={[
          { name: "Home", href: "/" },
          {
            name: "Services",
            href: "/services",
            icon: <ChevronDown size={16} aria-hidden="true" />,
          },
          {
            name: "Expertise",
            href: "/expertise",
            icon: <ChevronDown size={16} aria-hidden="true" />,
          },
          { name: "Cases", href: "/cases" },
          { name: "Pricing", href: "/pricing" },
          {
            name: "Company",
            href: "/company",
            icon: <ChevronDown size={16} aria-hidden="true" />,
          },
        ]}
        button={{
          text: "Start a Project",
          href: "/get-started",
        }}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}
