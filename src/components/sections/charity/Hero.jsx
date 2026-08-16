import Button from "@/components/common/Button";
import Container from "@/components/ui/Container";
import { ArrowRight, Play } from "lucide-react";

export default function Hero({ hero, data }) {
  const content = hero || data;
  if (!content) return null;

  return (
    <section id="hero" className="relative bg-transparent pt-28 pb-16 md:pt-36 md:pb-24">
      <Container className="flex flex-col items-center text-center">
        <h1 className="max-w-4xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight break-words px-2">
          <span>{content.titleLine1}</span> <br className="hidden sm:inline" />
          <span>{content.titleLine2}{" "}</span>
          <span className="bg-gradient-to-r from-[#F961D8] to-[#1663F9] bg-clip-text text-transparent">
            {content.titleHighlight}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-xs sm:text-base md:text-lg leading-relaxed text-slate-500 px-4">
          {content?.description ||
            "Are you looking for a way to close all marketing, technical and customer support tasks for your company in one place"}
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4">
          <Button
            variant="primary"
            className="w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2 text-sm sm:text-base rounded-full shadow-lg shadow-blue-200"
          >
            {content?.primaryButtonText || "Donate Now"}
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button
            variant="light"
            className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base rounded-full bg-transparent text-slate-800 hover:bg-slate-100/40 flex items-center justify-center gap-2"
          >
            <Play
              size={18}
              aria-hidden="true"
              className="text-blue-500"
              fill="currentColor"
            />
            {content?.secondaryButtonText || "Watch Video"}
          </Button>
        </div>
      </Container>
    </section>
  );
}
