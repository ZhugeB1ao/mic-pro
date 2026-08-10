import { useState } from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials({ testimonials = [], data }) {
  const [activeIndex, setActiveIndex] = useState(2);
  const items = data?.items || testimonials || [];

  if (!items.length) return null;

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14 flex flex-1 flex-col items-center justify-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {data?.title || "What Our"} <span className="text-blue-600">{data?.highlight || "Clients"} Say</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal w-2/3">
            Here, We make almost every genre of applications. Your name it and we build it.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  {item.avatar && (
                    <Image
                      src={item.avatar}
                      alt={item.name || "Client avatar"}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover border border-slate-200"
                    />
                  )}
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{item.name}</h3>
                    <p className="text-xs text-slate-400 font-medium">{item.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                &quot;{item.comment}&quot;
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2.5 mt-10">
          {[0, 1, 2, 3, 4, 5].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                idx === activeIndex
                  ? "w-8 h-2.5 bg-blue-600"
                  : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
