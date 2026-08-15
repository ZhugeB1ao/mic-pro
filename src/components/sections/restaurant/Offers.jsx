import Container from "@/components/ui/Container";
import Image from "next/image";

export default function Offers({ offers, data }) {
  const content = offers || data || {};
  if (!content.banner && (!content.foods || !content.foods.length)) return null;

  return (
    <section id="offers" className="py-20 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {content.title || "Get The Best"} <span className="text-blue-600">{content.highlight || "Offer"}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-md mx-auto">
            Eat the food you dream about at affordable prices. No need to come to us just call is.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {content.banner && (
            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden min-h-[380px] lg:min-h-[420px] flex flex-col justify-center p-8 sm:p-10 text-white shadow-xl group">
              {content.banner.image && (
                <Image
                  src={content.banner.image}
                  alt={content.banner.title || "Offer"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

              <div className="relative z-10 space-y-3 max-w-xs">
                {content.banner.title && (
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {content.banner.title}
                  </h3>
                )}

                {content.banner.discount && (
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl font-light italic text-[#1D6BF3]">
                      {content.banner.discount}
                    </span>
                    <span className="text-lg font-bold text-white uppercase tracking-wider">
                      OFF
                    </span>
                  </div>
                )}

                {content.banner.description && (
                  <p className="text-xs sm:text-sm text-white w-2/3 font-normal leading-relaxed">
                    {content.banner.description}
                  </p>
                )}

                <div className="pt-6">
                  <button className="bg-[#1D6BF3] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-full transition-all duration-200 shadow-md active:scale-95">
                    {content.banner.buttonText || "Order Now"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {content.foods && content.foods.length > 0 && (
            <div className="lg:col-span-6 flex flex-col justify-between gap-5">
              {content.foods.map((item) => (
                <div
                  key={item.id}
                  className="rounded-md p-1 sm:p-2 flex items-center gap-5 transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ backgroundColor: "rgba(252, 247, 251, 1)" }}
                >
                  {item.image && (
                    <div className="relative w-32 h-28 sm:w-32 sm:h-28 overflow-hidden shrink-0 bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.title || "Offer food item"}
                        fill
                        sizes="(max-width: 640px) 96px, 112px"
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="font-bold text-slate-900 text-base sm:text-lg shrink-0">
                        {item.title}
                      </h4>
                      <div className="flex-1 border-b border-slate-200/90 mx-2 mb-1.5 -translate-y-1" />
                      <span className="text-[#1D6BF3] font-normal italic text-xl sm:text-2xl shrink-0">
                        {item.currency || "$"}
                      </span>
                      <span className="text-[#1D6BF3] font-bold text-xl sm:text-2xl shrink-0">
                        {item.price}
                      </span>
                    </div>

                    {item.description && (
                      <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed mt-2 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
