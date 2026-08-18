import Image from "next/image";
import Container from "@/components/ui/Container";
import { Star } from "lucide-react";

export default function Testimonial({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section id="testimonial" className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-[#1868FB] to-[#2563EB] p-8 sm:p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-10">
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white/90">
              {content.badge || "CUSTOMER STORY"}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-8 space-y-8">
                <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-extrabold leading-snug tracking-tight text-white">
                  {content.quote}
                </blockquote>

                <div className="flex flex-wrap items-center gap-6 sm:gap-10">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full bg-white/20 border-2 border-white/40 overflow-hidden shrink-0">
                      {content.author?.avatar && (
                        <Image
                          src={content.author.avatar}
                          alt={content.author.name || "Testimonial author"}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-base text-white">
                        {content.author?.name}
                      </div>
                      <div className="text-xs text-white/80">
                        {content.author?.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-amber-300">
                    {Array.from({ length: content.rating || 5 }).map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex items-center justify-center">
                <div className="relative w-44 h-24 flex items-center justify-center">
                  <Image
                    src={content.companyLogo}
                    alt={content.companyName || "Amazon"}
                    fill
                    className="object-contain"
                    sizes="176px"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 pt-4">
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span className="w-6 h-2 rounded-full bg-white" />
              <span className="w-2 h-2 rounded-full bg-white/40" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
