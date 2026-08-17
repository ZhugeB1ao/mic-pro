import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "@/components/common/Button.jsx";
import logo from "@/assets/logos/logo.svg";

const defaultLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const defaultButton = {
  text: "Get Started",
  href: "/get-started",
};

export default function Header({
  links = defaultLinks,
  button = defaultButton,
  className = "",
}) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`bg-transparent absolute inset-x-0 top-0 z-50 ${className}`.trim()}
    >
      <Container className="header">
        <div className="flex items-center justify-between py-4 sm:py-5">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img
              src={typeof logo === "string" ? logo : logo.src}
              alt="MicPro logo"
              width={40}
              height={40}
              className="h-9 w-9 sm:h-10 sm:w-10 shrink-0"
            />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              MicPro
            </h2>
          </Link>

          <nav className="hidden lg:flex items-center gap-x-7 xl:gap-x-9">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 transition-colors hover:text-[#1868FB]"
              >
                {link.name}
                {link.icon}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block shrink-0">
            <a href={button.href || "#"}>
              <Button
                variant="primary"
                geometry="rounded"
                className="bg-[#1868FB] px-6 py-2.5 text-sm font-semibold shadow-md shadow-blue-500/20 hover:bg-blue-600 transition-all hover:scale-105"
              >
                {button.text}
              </Button>
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 backdrop-blur-sm text-slate-900 transition-colors hover:bg-slate-100 lg:hidden shadow-xs"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="rounded-2xl border border-slate-100 bg-white/95 backdrop-blur-md p-5 shadow-xl lg:hidden mb-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1.5">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 hover:text-[#1868FB]"
                >
                  <span>{link.name}</span>
                  {link.icon}
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <a href={button.href || "#"} onClick={() => setOpen(false)}>
                <Button
                  variant="primary"
                  geometry="rounded"
                  className="w-full bg-[#1868FB] py-3 text-sm font-semibold shadow-md shadow-blue-500/20"
                >
                  {button.text}
                </Button>
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
