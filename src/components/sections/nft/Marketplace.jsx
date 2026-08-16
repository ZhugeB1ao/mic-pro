import Image from "next/image";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

export default function Marketplace({ data }) {
  const content = data;
  if (!content || !content.items || content.items.length === 0) return null;

  return (
    <section id="marketplace" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {content.titlePrefix || "Market"}{" "}
            <span className="text-[#1868FB]">{content.titleHighlight || "Place"}</span>{" "}
            {content.emoji || "🔥"}
          </h2>

          <a
            href={content.seeAllHref || "#"}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-[#1868FB] transition-colors group"
          >
            {content.seeAllText || "See All"}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {content.categories && content.categories.length > 0 && (
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10 sm:mb-14">
            {content.categories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                className={`rounded-full px-6 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                  idx === 0
                    ? "bg-[#1868FB] text-white shadow-md shadow-blue-500/20"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-blue-600 hover:text-blue-600 shadow-xs"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {content.items.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-3 bg-slate-900 shadow-xs">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {item.avatars && (
                  <div className="absolute left-3 bottom-3 z-10 h-6 w-14">
                    <Image
                      src={item.avatars}
                      alt="Avatars"
                      fill
                      unoptimized
                      className="object-contain object-left"
                    />
                  </div>
                )}

                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    item.isDark ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="rounded-full bg-black/60 backdrop-blur-md px-5 py-2 text-xs font-semibold text-white shadow-md">
                    View Now
                  </span>
                </div>
              </div>

              {item.isDark ? (
                <div className="rounded-2xl bg-[#1E1E1E] p-4 text-white shadow-md space-y-2.5">
                  <div>
                    <h3 className="text-base font-bold text-white truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {item.creatorText}{" "}
                      <span className="text-[#FF8A65] font-medium">
                        {item.creatorName}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <div className="flex items-center gap-1.5">
                      <div className="relative h-4 w-4 shrink-0">
                        <Image
                          src={item.priceIcon || content.ethIcon || "/nft/icons/eth.svg"}
                          alt="ETH"
                          fill
                          unoptimized
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-bold text-white">
                        {item.price}
                      </span>
                    </div>

                    <span className="rounded-full bg-[#1868FB] px-4 py-1.5 text-xs font-bold text-white shadow-xs">
                      {item.timeLeft}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="p-1 space-y-2.5">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {item.creatorText}{" "}
                      <span className="text-[#FF8A65] font-medium">
                        {item.creatorName}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1.5">
                      <div className="relative h-4 w-4 shrink-0">
                        <Image
                          src={item.priceIcon || content.ethIcon || "/nft/icons/eth.svg"}
                          alt="ETH"
                          fill
                          unoptimized
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-bold text-slate-900">
                        {item.price}
                      </span>
                    </div>

                    <span className="rounded-full bg-[#1868FB] px-4 py-1.5 text-xs font-bold text-white shadow-xs">
                      {item.timeLeft}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
