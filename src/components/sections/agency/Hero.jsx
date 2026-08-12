import Button from "@/components/common/Button";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

export default function Hero({ hero, data }) {
  const content = hero || data;

  return (
    <section id="hero" className="relative bg-transparent h-screen pt-16 pb-100 md:pt-24 md:pb-100">
      <Container className="flex flex-col items-center text-center">
        <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl md:leading-tight">
          {content?.titlePrefix || "Build Your Dream"} <br />
          
          <span className="bg-gradient-to-r from-[#F961D8] to-[#1663F9] bg-clip-text text-transparent">
            {content.titleHighlight}
          </span>
          
          {" "}Team
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 sm:text-xl">
          {content?.description ||
            "Are you looking for a way to close all marketing, technical and customer support tasks for your company in one place"}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" className="px-8 py-3.5 flex items-center gap-2 text-base rounded-full shadow-lg shadow-blue-200">
            {content?.primaryButtonText || "Get Started"}
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button variant="light" className="px-8 py-3.5 text-base rounded-full border border-slate-400 bg-transparent text-slate-800 hover:bg-slate-100/40">
            {content?.secondaryButtonText || "Pricing"}
          </Button>
        </div>
      </Container>
    </section>
  );
}
