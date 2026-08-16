import Image from "next/image";
import Container from "@/components/ui/Container";

export default function TopSellers({ data }) {
  const content = data;
  if (!content || !content.items || content.items.length === 0) return null;

  return (
    <section id="top-sellers" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {content.titlePrefix || "Top"}{" "}
            <span className="text-[#1868FB]">{content.titleHighlight || "Seller"}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {content.items.map((seller) => (
            <div
              key={seller.id}
              className="relative flex items-center gap-3.5 rounded-2xl bg-white p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200 hover:-translate-y-1 overflow-hidden"
            >
              <span className="absolute top-0 right-0 flex items-center justify-center rounded-bl-xl bg-[#1868FB] px-2.5 py-0.5 text-[11px] font-bold text-white shadow-xs">
                {seller.badge}
              </span>

              <div
                style={{ backgroundColor: seller.avatarBg || "#FFE8D6" }}
                className="relative h-14 w-14 shrink-0 rounded-2xl overflow-hidden flex items-end justify-center shadow-xs"
              >
                {seller.avatar && (
                  <div className="relative h-12 w-12">
                    <Image
                      src={seller.avatar}
                      alt={seller.name}
                      fill
                      unoptimized
                      className="object-cover object-top"
                    />
                  </div>
                )}
              </div>

              <div className="min-w-0 pr-5">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                  {seller.name}
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-0.5">
                  {seller.volume}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
