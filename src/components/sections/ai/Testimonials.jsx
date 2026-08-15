import Image from "next/image";
import Container from "@/components/ui/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials({ data }) {
  const content = data;
  if (!content || !content.items || content.items.length === 0) return null;

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-white">
      <Container>
        <div
          style={{
            background: content.background || "linear-gradient(90.47deg, #3F56EE 10.5%, #5094FA 102.82%)",
          }}
          className="rounded-3xl p-6 sm:p-10 md:p-14 shadow-xl"
        >
          <div className="text-center mb-8 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {content.title || "Loved by marketers and writers like you"}
            </h2>
          </div>

          <div className="block md:hidden">
            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: ".ai-testimonials-pagination",
                bulletClass: "custom-bullet",
                bulletActiveClass: "custom-bullet-active",
              }}
              className="w-full"
            >
              {content.items.map((item, index) => (
                <SwiperSlide key={item.id || index} className="!h-auto">
                  <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-xs min-h-[220px]">
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6">
                      {item.comment}
                    </p>

                    <div className="flex items-center gap-3 pt-2">
                      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-slate-100 bg-slate-100">
                        {item.avatar ? (
                          <Image
                            src={item.avatar}
                            alt={item.name}
                            width={40}
                            height={40}
                            unoptimized
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-blue-100 text-xs font-bold text-blue-600">
                            {item.name?.[0]}
                          </div>
                        )}
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-slate-400 font-medium truncate">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="ai-testimonials-pagination flex items-center justify-center gap-2 mt-6" />
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {content.items.map((item, index) => (
              <div
                key={item.id || index}
                className="flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6">
                  {item.comment}
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-slate-100 bg-slate-100">
                    {item.avatar ? (
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={40}
                        height={40}
                        unoptimized
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-blue-100 text-xs font-bold text-blue-600">
                        {item.name?.[0]}
                      </div>
                    )}
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-medium truncate">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style jsx global>{`
        .custom-bullet {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-bullet:hover {
          background-color: rgba(255, 255, 255, 0.7);
        }
        .custom-bullet-active {
          width: 24px;
          background-color: #ffffff;
        }
      `}</style>
    </section>
  );
}
