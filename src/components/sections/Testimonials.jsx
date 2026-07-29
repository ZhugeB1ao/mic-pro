import Image from "next/image";
import { Quote, Star } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Testimonials({ testimonials = [] }) {
  if (!testimonials.length) return null;

  const testimonial = testimonials[0];

  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <div className="rounded-[1.75rem] bg-[#4E74F5] px-6 py-8 text-white shadow-[0_24px_80px_rgba(78,116,245,0.32)] md:px-24 md:py-10">
          <div className="flex flex-col-reverse md:flex-row justify-center gap-8 ">
            <div className="relative  border-white/20 py-5 border-t  md:border-r md:border-t-0 md:px-10 ">
              <Quote
                className="h-10 w-10 absolute -left-3 text-white/70 invisible md:visible"
                strokeWidth={1.7}
              />
              <p className="mt-5 max-w-4xl text-xl text-center md:text-left leading-7 font-light text-white/95">
                {testimonial.quote}
              </p>
            </div>

            <div className="flex min-w-40 flex-col py-8 items-center md:items-start gap-4 lg:justify-start">
              <div className="relative h-36 w-36 md:h-20 md:w-20 shrink-0 overflow-hidden rounded-full border-2 border-white/25 bg-white/10">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-2xl font-semibold sm:text-base  ">
                  {testimonial.name}
                </p>
                <p className="text-lg text-white/80 sm:text-sm text-center md:text-left">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center mt-10">
          <ul className="flex items-center gap-5">
            {[...Array(5)].map((_, index) => (
              index === 2 ? (<li
                key={index}
                className="h-4 w-4 rounded-full bg-blue-600"
              />) : (<li
                key={index}
                className="h-4 w-4 rounded-full bg-[#DFE4FB]"
              />)
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
