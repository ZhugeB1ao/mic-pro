import Header from "../ui/Header";
import Footer from "../ui/Footer";

export default function AgencyLayout({ children }) {
  return (
    <>
      <Header
        links={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Expertise", href: "/expertise" },
          { name: "Cases", href: "/cases" },
          { name: "Pricing", href: "/pricing" },
          { name: "Company", href: "/company" },
        ]}
        button={{ 
            text: "Start a Project", href: "/get-started" 
        }}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}
