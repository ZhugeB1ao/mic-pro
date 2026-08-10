import Image from "next/image";
import Container from "@/components/ui/Container";
import { Check } from "lucide-react";

export default function Benefits({ benefits, data }) {
  const content = benefits || data;
  if (!content) return null;

  return (
    <section
      id="benefits"
      className="relative bg-white pb-24 pt-[76rem]  md:pt-20 md:pb-32"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start lg:col-span-6">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              {content.title}{" "}
              <span className="text-blue-600 font-extrabold">
                {content.highlight}
              </span>{" "}
              {content.suffix}
            </h2>

            <p className="mt-6 text-sm sm:text-base text-slate-400 leading-relaxed font-normal max-w-lg">
              {content.description}
            </p>

            <ul className="mt-8 space-y-4">
              {content.features?.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500 text-black shadow-sm">
                    <Check size={14} strokeWidth={2} />
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:col-span-6">
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] ">
              <div
                className="absolute inset-x-0 bottom-0 top-24 sm:top-24 shadow-2xl"
                style={{
                  background:
                    "linear-gradient(146.73deg, #8058ED 6.15%, #D95ECC 91.82%)",
                }}
              />

              <div className="relative z-10 w-full aspect-square flex items-end justify-center">
                <Image
                  src={content.image}
                  alt="Basketball Benefits Player"
                  fill
                  className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
