import Image from "next/image";
import { Heart, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Products({ products = [], data }) {
  const items = data?.items || products || [];
  const content = data || {};
  if (!items.length && !content.title) return null;

  return (
    <section id="products" className="relative bg-white py-12 md:py-20">
      <Container>
        <div className="rounded-[2.5rem] border border-slate-100 bg-white p-6 sm:p-10 md:p-14 shadow-2xl shadow-slate-200/50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              {content.title}{" "}
              <span className="text-[#2068F8]">{content.highlight}</span>
            </h2>

            <a
              href={content.buttonHref || "#"}
              className="inline-flex items-center gap-2 rounded-xl bg-[#2068F8] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-blue-700 shadow-md shadow-blue-500/20"
            >
              {content.buttonText || "See all Products"}
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-100/80 bg-white p-3.5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div
                  className={`relative flex items-center justify-center rounded-2xl p-6 min-h-[240px] ${
                    item.bgCard || "bg-[#EFEFEF]"
                  }`}
                >
                  <button
                    type="button"
                    aria-label="Add to favorites"
                    className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-xs text-slate-400 hover:text-red-500 shadow-xs transition-colors"
                  >
                    <Heart
                      size={16}
                      className={
                        item.isFavorite
                          ? "fill-red-500 text-red-500"
                          : "text-slate-400"
                      }
                    />
                  </button>

                  <div className="relative w-44 h-44">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      unoptimized
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between px-1.5 pb-1">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-800">
                      {item.name}
                    </h3>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <span className="text-sm sm:text-base font-extrabold text-slate-900">
                        {item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-[11px] sm:text-xs text-slate-400 line-through font-normal">
                          {item.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="rounded-md bg-[#2068F8] px-4 py-1.5 text-xs font-bold text-white transition-all hover:bg-blue-700 shadow-xs"
                  >
                    BUY
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
