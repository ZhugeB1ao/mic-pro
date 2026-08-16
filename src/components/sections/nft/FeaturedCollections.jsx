import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/common/Button";

export default function FeaturedCollections({ data }) {
  const content = data;
  if (!content || !content.items || content.items.length === 0) return null;

  return (
    <section id="collections" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {content.titlePrefix || "Featured"}{" "}
            <span className="text-[#1868FB]">{content.titleHighlight || "Collections"}</span>{" "}
            {content.emoji || "🔥"}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8  mx-auto">
          {content.items.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl border border-slate-100 bg-white p-4 sm:p-5 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-4 bg-slate-50">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}

                <div className="absolute right-3.5 top-3.5 flex h-9 w-9 items-center justify-center rounded-fullshadow-md">
                  <Image
                    src={item.liked ? "/nft/icons/heart-red.svg" : "/nft/icons/heart-grey.svg"}
                    alt={item.liked ? "Liked" : "Like"}
                    width={36}
                    height={36}
                    unoptimized
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Created by{" "}
                    <a
                      href={item.creatorHref || "#"}
                      className="text-[#1868FB] font-medium hover:underline"
                    >
                      {item.creator}
                    </a>
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Floor</span>
                    <span className="font-bold text-slate-900">{item.floor}</span>
                  </div>

                  <div className="text-right">
                    <span className="text-slate-400 block text-[11px]">Total Volume</span>
                    <span className="font-bold text-slate-900">{item.totalVolume}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href={content.buttonHref || "#marketplace"}>
            <Button
              variant="primary"
              geometry="rounded"
              className="bg-[#1868FB] px-10 py-3.5 text-sm font-semibold shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-all hover:scale-105"
            >
              {content.buttonText || "View More"}
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}
