import Image from "next/image";
import Container from "./Container";
import Button from "@/components/common/Button.jsx";
import logo from "@/assets/logos/logo.svg";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const button = {
  text: "Get Started",
  href: "/get-started",
};

export default function Header({
  links = links,
  button = button,
  className = "",
}) {
  return (
    <header
      className={`border-b border-slate-200 bg-white ${className}`.trim()}
    >
      <Container className="header">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="MicPro logo"
              width={40}
              height={40}
              className="h-10 w-10 shrink-0"
            />
            <h2 className="text-2xl font-semibold text-slate-900">MicPro</h2>
          </div>

          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-900 transition-colors hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <Button>
            {button.text}
          </Button>
        </div>
      </Container>
    </header>
  );
}
