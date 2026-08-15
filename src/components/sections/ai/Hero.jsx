import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/common/Button";

export default function Hero({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            {content.titlePrefix || "World's Best AI Writer for Easy"}
            <br />
            <span className="inline-block mt-1">
              <span className="bg-gradient-to-r from-[#F961D8] to-[#7B4DFF] bg-clip-text text-transparent mr-3">
                {content.titleHighlightContent || "Content"}
              </span>
              <span className="bg-gradient-to-r from-[#2068F8] to-[#00C0FF] bg-clip-text text-transparent">
                {content.titleHighlightCreation || "Creation"}
              </span>
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed">
            {content.description}
          </p>

          <div className="pt-2">
            <a href={content.primaryButtonHref || "#get-started"}>
              <Button
                variant="primary"
                geometry="rounded"
                className="bg-[#1868FB] px-8 py-3.5 text-sm font-semibold shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-all hover:scale-105"
              >
                {content.primaryButtonText || "Start Writing for free"}
              </Button>
            </a>
          </div>
        </div>

        {content.dashboardImage && (
          <div className="mt-12 sm:mt-16 max-w-6xl mx-auto">
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden drop-shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
              <Image
                src={content.dashboardImage}
                alt={content.titlePrefix || "AI Writer Dashboard"}
                width={1170}
                height={611}
                unoptimized
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
