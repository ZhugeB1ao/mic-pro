import Container from "@/components/ui/Container";
import Button from "@/components/common/Button";
import { ArrowRight } from "lucide-react";

export default function CallToAction({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section id="appointment" className="py-16 sm:py-24 bg-white">
      <Container>
        <div
          style={{
            background:
              content.gradient ||
              "linear-gradient(243.41deg, #9A40E4 7.82%, #5C70F4 74.31%)",
          }}
          className="relative overflow-hidden rounded-3xl sm:rounded-[36px] px-6 py-14 sm:px-12 sm:py-20 text-center shadow-2xl"
        >
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-400/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5 sm:space-y-6">
            {content.tag && (
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-white/80 uppercase">
                {content.tag}
              </p>
            )}

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {content.title || "For Any Emergency Contact"}
            </h2>

            <div className="pt-3 flex justify-center">
              <a href={content.buttonHref || "#appointment"}>
                <Button
                  variant="light"
                  geometry="square"
                  className="gap-3 px-7 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span>{content.buttonText || "Book An Appointment"}</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1868FB] text-white">
                    <ArrowRight size={14} />
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
