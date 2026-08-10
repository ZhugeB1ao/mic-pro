import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Container from "@/components/ui/Container";
import { ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

export default function Blog({ blogs = [], data }) {
  const items = data?.items || blogs || [];
  const content = data || {};
  if (!items.length && !content.title) return null;

  return (
    <section id="blog" className="relative bg-white py-16 md:py-24">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 flex flex-col items-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl lg:text-5xl tracking-tight">
            {content.title}{" "}
            <span className="text-blue-600 font-extrabold">
              {content.highlight}
            </span>
          </h2>
          <p className="mt-4 text-lg sm:text-base text-slate-500 leading-relaxed font-normal w-4/5 sm:w-3/5">
            {content.subtitle}
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            
            className="w-full"
          >
            {items.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto flex">
                <div
                  className={`rounded-[2rem] p-4 sm:p-5 w-full flex flex-col justify-end transition-all duration-300 ${
                    item.outerBgColor || "bg-sky-100"
                  }`}
                >
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between flex-1 min-h-[300px]">
                    <div>
                      <span
                        className={`text-xs sm:text-sm font-bold ${
                          item.colorTag || "text-blue-600"
                        }`}
                      >
                        {item.category}
                      </span>
                      <h3 className="mt-3 text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-md sm:text-lg text-slate-400 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4">
                      <a
                        href={item.href || "#"}
                        className="inline-flex items-center gap-1 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                      >
                        Learn More <ChevronRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-swiper-pagination flex items-center justify-center gap-2 mt-8" />
        </div>
      </Container>

      <style jsx global>{`
        .custom-bullet {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background-color: #cbd5e1;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-bullet:hover {
          background-color: #94a3b8;
        }
        .custom-bullet-active {
          width: 24px;
          background-color: #2563eb;
        }
      `}</style>
    </section>
  );
}
