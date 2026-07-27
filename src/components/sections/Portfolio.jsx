import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Portfolio({ portfolio = [] }) {
  if (!portfolio.length) return null;

  return (
    <section className="bg-white pb-24 pt-20 md:pb-32 ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Our Team’s
            <span className="text-blue-600 font-extrabold"> Work</span>
          </h2>
        </div>

        <div className="mt-16 space-y-8 md:mt-20 md:space-y-10">
          {portfolio.map((item) => {
            const isImageRight = item.layout === "image-right";

            return (
              <article
                key={item.id}
                className="grid items-center gap-8 overflow-hidden rounded-[2rem] p-5 md:grid-cols-2 md:gap-12 md:p-8"
              >
                <div
                  className={
                    isImageRight ? "md:order-1 md:pr-8" : "md:order-2 md:pl-8"
                  }
                >
                  <p className="text-sm font-light tracking-[0.2em]">
                    {item.category}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="my-8 max-w-xl text-base leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    className="uppercase gap-2 tracking-[1em] font-medium transition-colors"
                  >
                    {item.buttonText}
                  </a>
                </div>

                <div
                  className={`relative overflow-hidden aspect-[4/3] bg-white p-3 shadow-sm ${isImageRight ? "md:order-2" : "md:order-1"}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
