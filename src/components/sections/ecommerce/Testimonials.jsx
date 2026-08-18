import Image from "next/image";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Testimonials({ data }) {
  const content = data;
  if (!content || !content.quote) return null;

  return (
    <section id="testimonials" className="relative bg-white py-16 md:py-24 overflow-hidden">
      <Container>
        <div className="relative mx-auto max-w-5xl pt-14">
          {content.author?.avatar && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
              <div className="relative h-24 w-24 overflow-hidden rounded-full  shadow-lg bg-slate-200">
                <Image
                  src={content.author.avatar}
                  alt={content.author.name || "Testimonial author"}
                  fill
                  className="object-contain translate-y-2"
                />
              </div>
            </div>
          )}

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2F6DF8] to-[#4581F9] p-8 pt-16 sm:p-12 sm:pt-20 md:p-16 md:pt-20 text-white text-center shadow-2xl shadow-blue-500/20">
            <Quote
              className="absolute left-6 sm:left-8 md:left-18 top-24 md:top-28 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 text-white/10 fill-current pointer-events-none select-none rotate-180"
            />

            <Quote
              className="absolute right-6 sm:right-10 md:right-14 bottom-6 md:bottom-8 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 text-white/10 fill-current pointer-events-none select-none "
            />

            <div className="relative z-10 space-y-1 mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {content.author?.name}
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 font-medium">
                {content.author?.role}
              </p>
            </div>

            <p className="relative z-10 text-base sm:text-xl md:text-3xl font-bold leading-relaxed sm:leading-relaxed max-w-4xl mx-auto text-white">
              {content.quote}
            </p>
          </div>

          <div className="flex items-center justify-center gap-2.5 mt-8 sm:mt-10">
            <span className="h-2 w-2 rounded-full bg-blue-100" />
            <span className="h-2 w-2 rounded-full bg-blue-100" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#0052FF]" />
            <span className="h-2 w-2 rounded-full bg-blue-100" />
            <span className="h-2 w-2 rounded-full bg-blue-100" />
          </div>
        </div>
      </Container>
    </section>
  );
}
