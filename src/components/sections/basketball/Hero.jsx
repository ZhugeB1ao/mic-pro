import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/common/Button";
import { ArrowRight } from "lucide-react";

export default function Hero({ hero, data }) {
  const content = hero || data;
  if (!content) return null;

  return (
    <section id="hero" className="relative bg-transparent pt-28 pb-12 md:pt-36 md:pb-16">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-start lg:col-span-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.2] sm:leading-[1.15] break-words">
              {content.titlePrefix}{" "}
              <span className="bg-gradient-to-r from-[#F961D8] to-[#1663F9] bg-clip-text text-transparent">
                {content.titleHighlight}
              </span>
              <span className="flex items-center gap-2 text-slate-900 font-black">
                {content.titleSuffix}
              </span>
            </h1>

            <p className="mt-6 text-xs sm:text-base text-slate-600 leading-relaxed max-w-md font-medium">
              {content.description}
            </p>

            <div className="mt-8">
              <Button
                href={content.buttonHref || "#services"}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-semibold !text-slate-900 shadow-lg shadow-slate-200/80 border border-slate-100 hover:bg-slate-50 transition-all duration-300"
              >
                {content.buttonText} <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] aspect-[3/4] flex items-center justify-center">
              {content.playerImage && (
                <Image
                  src={content.playerImage}
                  alt="Basketball Player Academy Hero"
                  fill
                  unoptimized
                  className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8 lg:col-span-3">
            <div className="space-y-6">
              <div>
                <span className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight block">
                  {content.statValue}
                </span>
                {content.statDescriptionFirst && (
                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {content.statDescriptionFirst}
                  </p>
                )}
              </div>

              {content.statDescriptionSecond && (
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {content.statDescriptionSecond}
                </p>
              )}

              {!content.statDescriptionFirst &&
                !content.statDescriptionSecond &&
                content.statDescription && (
                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {content.statDescription}
                  </p>
                )}
            </div>

            <div className="pt-2">
              <p className="text-sm sm:text-base font-bold text-slate-900 mb-4">
                {content.partnerHeading}
              </p>

              <div className="flex items-center gap-6">
                {content.partners?.map((partner) => (
                  <div
                    key={partner.id}
                    className="relative h-8 w-16 sm:h-9 sm:w-20"
                  >
                    {partner.logo && (
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        unoptimized
                        className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
