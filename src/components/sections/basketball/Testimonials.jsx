import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/common/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section id="testimonials" className="relative bg-white py-16 md:py-24">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white  grid grid-cols-1 lg:grid-cols-12">
          <div className="p-8 sm:p-12 lg:col-span-5 flex flex-col justify-between bg-slate-100">
            <div>
              <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">
                {content.badge}
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                {content.leftTitle}
              </h2>
              <p className="mt-3 text-md sm:text-lg text-slate-400 font-medium">
                {content.leftDescription}
              </p>
            </div>

            <div className="mt-10">
              <Button
                href="#"
                className="bg-blue-600 text-white hover:bg-blue-700 rounded-md px-6 py-3 text-xs font-bold"
              >
                {content.leftButtonText}
              </Button>
            </div>
          </div>

          <div className="py-8 sm:py-12 px-12 sm:px-32 lg:col-span-7 text-white flex flex-col justify-between relative"
            style={{
              background: 
                "linear-gradient(141.56deg, #A26DF6 22.12%, #5B54F8 77.88%)"
            }}
          >
            <div>
              <blockquote className="text-2xl sm:text-3xl font-bold  sm:leading-relaxed tracking-tight">
                {content.quote}
              </blockquote>

              {content.partners && (
                <div className="mt-8 flex items-center gap-6 opacity-90">
                  {content.partners.map((p) => (
                    <div key={p.id} className="relative opacity-90 h-12 w-40 sm:h-6 sm:w-20">
                      <Image
                        src={p.logo}
                        alt={p.name}
                        fill
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full bg-amber-200">
                  <Image
                    src={content.avatar}
                    alt={content.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    {content.name}
                  </h4>
                  <p className="text-xs text-purple-200">{content.role}</p>
                </div>
              </div>

              <div className="sm:flex items-center gap-2 hidden">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-white/10 border-2 hover:border-white transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-white/10 border-2 hover:border-white transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
