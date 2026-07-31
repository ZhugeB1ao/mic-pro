import Image from "next/image";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Testimonials({ testimonials = [] }) {
  if (!testimonials.length) return null;

  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-center mb-2 self-center text-3xl font-bold tracking-tight text-slate-800 md:text-5xl leading-tight">
            Our{" "}
            <span className="text-blue-600 font-extrabold">
              Testimonials
            </span>{" "}
          </h2>
          <p className="text-center text-lg font-light leading-8 text-slate-600 ">
            Read and understand our testimonial and know what people say
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 px-12 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-none"
            >
              <div className="relative">
                <div
                  className={`relative h-20 w-20 overflow-hidden rounded-full ${testimonial.bgColor}`}
                >
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div className={`absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full ${testimonial.bgColor}`}>
                    <Quote className=" h-3 w-3 text-white" />
                  </div>
              </div>

              <p className="relative z-10 mt-8 text-base leading-6 text-slate-600">
                {testimonial.quote}
              </p>

              <div
                className={`relative z-10 mt-8 flex items-center gap-4 border-t-2  ${testimonial.borderColor} pt-3`}
              >
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm pt-2 text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
