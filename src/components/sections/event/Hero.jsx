import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/common/Button";
import { Play } from "lucide-react";

export default function Hero({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left">
            {content.badge && (
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-800">
                <span>{content.badge}</span>
                <span className={content.badgeYearClass || "text-[#F961D8] font-bold"}>
                  {content.badgeYear || "2023"}
                </span>
              </div>
            )}

            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-black text-slate-900 tracking-tight leading-[1.15]">
                <span>{content.titlePrefix}</span>
                <br />
                <span>{content.titleLine2}</span>
                <br />
                <span className="inline-flex items-center gap-4">
                  <span className="bg-gradient-to-r from-[#F961D8] to-[#1868FB] bg-clip-text text-transparent">
                    {content.titleHighlight}
                  </span>
                  {content.starIcon && (
                    <Image
                      src={content.starIcon}
                      alt="Blue star icon"
                      width={24}
                      height={24}
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 translate-y-4"
                    />
                  )}
                </span>
              </h1>
            </div>

            <p className="text-sm sm:text-base text-slate-500 max-w-lg font-normal leading-relaxed">
              {content.description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a href={content.primaryBtn?.href || "#ticket"}>
                <Button
                  variant="primary"
                  geometry="rounded"
                  className="w-full sm:w-auto bg-[#1868FB] px-8 py-3.5 text-sm sm:text-base font-semibold shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-all hover:scale-105"
                >
                  {content.primaryBtn?.text || "Get Ticket"}
                </Button>
              </a>

              <a
                href={content.secondaryBtn?.href || "#video"}
                className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full border border-slate-900 bg-transparent hover:bg-slate-50 text-slate-900 font-semibold text-sm sm:text-base transition-all hover:scale-105"
              >
                <Play size={18} className="text-[#1868FB] fill-[#1868FB]" />
                <span>{content.secondaryBtn?.text || "Watch Video"}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-[460px] h-[400px] sm:h-[460px] md:h-[500px]">
              {content.cards?.[0]?.image && (
                <div className="absolute top-0 right-0 w-[62%] aspect-[3/4] rounded-3xl overflow-hidden z-10">
                  <Image
                    src={content.cards[0].image}
                    alt={content.cards[0].title || "Event Stage"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </div>
              )}

              {content.cards?.[1]?.image && (
                <div className="absolute bottom-0 left-0 w-[62%] aspect-[3/4] rounded-3xl overflow-hidden z-20">
                  <Image
                    src={content.cards[1].image}
                    alt={content.cards[1].title || "Audience Arena"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
