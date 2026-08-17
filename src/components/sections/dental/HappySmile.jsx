import Image from "next/image";
import Container from "@/components/ui/Container";
import { Check } from "lucide-react";

export default function HappySmile({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[480px]">
              <div className="rounded-tl-[3.5rem] sm:rounded-tl-[4.5rem] rounded-br-[3.5rem] sm:rounded-br-[4.5rem] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-2xl relative w-full aspect-[5/4]">
                <Image
                  src={content.image || "/dental/images/smile/dentist.png"}
                  alt={content.title || "A healthy smile"}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {content.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-lg">
              {content.description}
            </p>

            {content.bullets && (
              <div className="space-y-3.5 pt-2">
                {content.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div
                      style={{ background: bullet.gradient }}
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white shadow-2xs"
                    >
                      <Check size={12} strokeWidth={3.5} />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {bullet.text}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
