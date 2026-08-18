import Container from "@/components/ui/Container";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Blog({ data }) {
  const content = data;
  if (!content) return null;

  const items = content.items || [];
  if (!items.length) return null;

  return (
    <section id="blog" className="py-20 bg-[#F4F7F9]">
      <Container>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          <div className="space-y-6 flex-1">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              {content.title} <span className="text-blue-600">{content.highlight}</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-sm">
              Eat the food you dream about at affordable prices. No need to come to us just call is.
            </p>
            <a
              href="#blog"
              className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-6 py-3 rounded-md shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-200 group"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="flex-1 divide-y divide-slate-200/80">
            {items.map((item) => (
              <a
                key={item.id}
                href={item.href || "#"}
                className="group flex flex-col sm:flex-row items-start gap-12 py-6 first:pt-0 last:pb-0 transition-opacity hover:opacity-90"
              >
                <div className="relative h-36 w-full sm:w-52 shrink-0 overflow-hidden rounded-2xl bg-slate-200">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title || "Blog image"}
                      fill
                      sizes="(max-width: 640px) 100vw, 208px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex-1 w-full">
                  {item.category && (
                    <span className="text-xs font-semibold text-slate-400 tracking-wide">
                      {item.category}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 leading-snug mt-2">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed font-normal mt-4">
                      {item.description}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
