import Image from "next/image";
import Container from "@/components/ui/Container";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Courses({ data }) {
  const content = data;
  if (!content) return null;

  const coursesList = content.items || [];

  return (
    <section id="courses" className="pt-12 md:pt-20 bg-white">
      <Container>
        <div className="bg-white rounded-t-3xl border-t border-x border-slate-100  p-6 md:p-12">
          <div className="text-center space-y-3 mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              {content.title || "Browse Our Best"}{" "}
              <span className="text-[#1868FB]">
                {content.highlight || "Courses"}
              </span>
            </h2>
          </div>

          {coursesList.length > 0 && (
            <>
              <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
                {coursesList.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>

              <div className="block sm:hidden relative">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={16}
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                    el: ".education-courses-pagination",
                    bulletClass: "custom-bullet",
                    bulletActiveClass: "custom-bullet-active",
                  }}
                  className="w-full"
                >
                  {coursesList.map((course) => (
                    <SwiperSlide key={course.id}>
                      <CourseCard course={course} />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="education-courses-pagination flex items-center justify-center gap-2 mt-6" />
              </div>
            </>
          )}
        </div>
      </Container>

      <style jsx global>{`
        .custom-bullet {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background-color: #e2e8f0;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-bullet:hover {
          background-color: #cbd5e1;
        }
        .custom-bullet-active {
          width: 24px;
          background-color: #1868fb;
        }
      `}</style>
    </section>
  );
}

function CourseCard({ course }) {
  return (
    <div className="group flex flex-col justify-between bg-white rounded-2xl p-4 border border-slate-100 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-blue-100 h-full">
      <div>
        <div className="relative h-44 sm:h-40 w-full overflow-hidden rounded-xl bg-slate-50 mb-4">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            unoptimized
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <h3 className="text-[15px] font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 text-blue-600 font-medium">
          <Image
            src="/education/icons/colleague-hat.svg"
            alt="Lessons"
            width={16}
            height={16}
            unoptimized
            className="h-4 w-4 object-contain"
          />
          <span>{course.lessons}</span>
        </div>

        <div className="flex items-center gap-0.5 text-amber-400">
          {[...Array(course.rating || 5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className="fill-amber-400 text-amber-400"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
