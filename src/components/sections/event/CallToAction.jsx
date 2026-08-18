import Container from "@/components/ui/Container";
import Button from "@/components/common/Button";
import { ArrowRight } from "lucide-react";

export default function CallToAction({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section id="cta" className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="rounded-[32px] sm:rounded-[40px] bg-gradient-to-r from-[#4A72F6] via-[#6857EE] to-[#9A46EA] p-10 sm:p-14 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            {content.badge && (
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-wider text-white/90">
                {content.badge}
              </span>
            )}

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.2] text-white">
              {content.title}
            </h2>

            <div className="pt-4 flex justify-center">
              <a href={content.buttonHref || "#register"}>
                <Button
                  variant="light"
                  geometry="square"
                  className="bg-white px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-slate-900 shadow-xl hover:bg-slate-50 transition-all hover:scale-105 gap-3"
                >
                  <span>{content.buttonText || "Get Started Now"}</span>
                  <span className="w-6 h-6 rounded-full bg-[#1868FB] text-white flex items-center justify-center">
                    <ArrowRight size={13} className="stroke-[3]" />
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
