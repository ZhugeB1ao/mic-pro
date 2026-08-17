import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/common/Button";
import { Check } from "lucide-react";

export default function TopPriority({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {content.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-md">
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
                    <span className="text-sm sm:text-base font-normal text-slate-600">
                      {bullet.text}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4">
              <a href={content.buttonHref || "#get-started"}>
                <Button
                  variant="primary"
                  geometry="rounded"
                  className="bg-[#1868FB] px-8 py-3.5 text-sm sm:text-base font-semibold shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-all hover:scale-105"
                >
                  {content.buttonText || "Get Started"}
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-4xl">
              <div className="w-full aspect-[5/4] translate-y-4">
                <Image
                  src={content.image || "/dental/images/priority/male-patient.png"}
                  alt={content.title || "Dental Health"}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
