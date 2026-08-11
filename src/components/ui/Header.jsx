import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`bg-transparent absolute inset-x-0 top-0 z-50 ${className}`.trim()}
    >
      <Container className="header">
        <div className="flex items-center justify-between py-4">
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

          <nav className="hidden flex-wrap items-center gap-x-8 gap-y-3 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 transition-colors hover:text-blue-600"
              >
                {link.name}
                {link.icon}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button>{button.text}</Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-900 transition-colors hover:bg-slate-100 md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-lg md:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 hover:text-blue-600"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-3">
              <Button
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {button.text}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
