import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/common/Button";
import { Check } from "lucide-react";

const CIRCLE_COLORS = [
  "bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-fuchsia-100",
  "bg-gradient-to-tr from-amber-500 to-orange-400 shadow-orange-100",
  "bg-gradient-to-tr from-sky-400 to-blue-500 shadow-blue-100",
  "bg-gradient-to-tr from-rose-400 to-pink-400 shadow-rose-100",
];

export default function About({ data }) {
  const content = data;
  if (!content) return null;

  const bullets = content.bullets || [];
  const banner = content.banner || {};

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <Container className="space-y-20 md:space-y-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[480px] aspect-square transition-transform duration-500 hover:scale-105">
              {content.image && (
                <Image
                  src={content.image}
                  alt="Boy with books"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                  className="object-contain drop-shadow-xl"
                />
              )}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {content.titlePrefix || "Premium courses from"}{" "}
              <span className="text-[#1868FB]">
                {content.titleHighlight || "the industry"}
              </span>{" "}
              {content.titleSuffix || "leaders"}
            </h2>

            <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
              {content.description}
            </p>

            {bullets.length > 0 && (
              <div className="grid grid-cols-2 gap-4 pt-2">
                {bullets.map((bullet, idx) => {
                  const bgColor = CIRCLE_COLORS[idx % CIRCLE_COLORS.length];

                  return (
                    <div key={bullet.id} className="flex items-center gap-2.5">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-white shadow-sm shrink-0 ${bgColor}`}
                      >
                        <Check size={12} strokeWidth={3} className="text-white" />
                      </div>
                      <span className="text-sm md:text-base font-bold text-slate-800">
                        {bullet.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="pt-4">
              <a href={content.buttonHref || "#courses"}>
                <Button
                  variant="primary"
                  geometry="rounded"
                  className="bg-[#1868FB] px-8 py-3.5 text-sm font-semibold shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-all hover:scale-105"
                >
                  {content.buttonText || "Get Started"}
                </Button>
              </a>
            </div>
          </div>
        </div>

        {banner.title && (
          <div className="overflow-hidden rounded-3xl bg-[#EDF3FF] grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-md">
            <div className="lg:col-span-6 p-8 sm:p-12 md:p-16 flex flex-col justify-center items-start space-y-4">
              <span className="text-xs sm:text-sm font-medium text-blue-600 tracking-wide">
                {banner.tag || "Join Us"}
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                {banner.title}
              </h3>

              <p className="text-xl sm:text-lg text-slate-500 font-normal leading-relaxed max-w-md">
                {banner.description}
              </p>

              <div className="pt-3">
                <a href={banner.buttonHref || "#courses"}>
                  <Button
                    variant="primary"
                    geometry="square"
                    className="bg-[#1868FB] px-7 py-3 text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/20 hover:bg-blue-600 transition-all hover:scale-105"
                  >
                    {banner.buttonText || "Get Started"}
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#774FF8] relative min-h-[300px] sm:min-h-[380px] flex items-end justify-center overflow-hidden">
              {banner.image && (
                <div className="relative w-full h-full min-h-[300px] sm:min-h-[380px]">
                  <Image
                    src={banner.image}
                    alt="Student thumbs up"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    unoptimized
                    className="object-contain object-bottom transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
