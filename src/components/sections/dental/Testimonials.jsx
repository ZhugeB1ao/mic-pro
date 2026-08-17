import Image from "next/image";
import Container from "@/components/ui/Container";
import { Star } from "lucide-react";

export default function Testimonials({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section className="py-16 sm:py-24 bg-slate-50/40">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            <span>{content.titlePrefix || "Our thousand of smile"}</span>{" "}
            <span className="text-[#1868FB]">
              {content.titleHighlight || "patients"}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items?.map((testimonial, idx) => (
            <div
              key={testimonial.id || idx}
              className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-200/80 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-slate-100 shadow-xs">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={55}
                      height={55}
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-normal">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-sm text-slate-500 font-normal leading-relaxed">
                  {testimonial.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
