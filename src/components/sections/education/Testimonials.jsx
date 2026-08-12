import Image from "next/image";
import Container from "@/components/ui/Container";
import { Star } from "lucide-react";

export default function Testimonials({ data }) {
  const content = data;
  if (!content) return null;

  const items = content.items || [];
  if (!items.length) return null;

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="bg-[#3D66F5] rounded-3xl p-6 sm:p-10 md:p-14 shadow-xl shadow-blue-500/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center mb-8 md:mb-12 tracking-tight">
            {content.title || "What our Student Say"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(item.rating || 5)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={14}
                        className="fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>

                  <p className="text-md sm:text-sm text-slate-500 leading-relaxed font-normal mb-6">
                    {item.comment}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-slate-100 bg-slate-50">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="40px"
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-normal leading-tight mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
