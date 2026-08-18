import Container from "@/components/ui/Container";
import Image from "next/image";
import { ShoppingCart, ArrowRight } from "lucide-react";

export default function Menu({ data }) {
  const content = data;
  if (!content) return null;

  const items = content.items || [];
  if (!items.length) return null;

  return (
    <section id="menu" className="py-20 bg-white">
      <Container>
        <div className="max-w-xl mx-auto text-center space-y-3 mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {content.title} <span className="text-blue-600">{content.highlight}</span>
          </h2>
        </div>

        <div
          className="max-w-5xl mx-auto border border-orange-100 rounded-3xl p-6 sm:p-10"
          style={{
            background:
              "linear-gradient(90.3deg, #F2F4FF -3.3%, #FFE6EC 53.98%, #FFF4EA 114.06%)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((food, idx) => (
              <div
                key={food.id || idx}
                className="bg-white rounded-2xl p-4 sm:p-15 border border-slate-100/80 shadow-sm flex items-center justify-between gap-4 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4 sm:gap-5 flex-1 min-w-0">
                  {food.image && (
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-[#FAF6F0] shrink-0 flex items-center justify-center p-2.5">
                      <Image
                        src={food.image}
                        alt={food.title || "Food item"}
                        width={96}
                        height={96}
                        className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl truncate">
                      {food.title}
                    </h3>
                    {(food.description || food.address) && (
                      <p className="text-xs text-slate-400 font-normal leading-relaxed truncate">
                        {food.description || food.address}
                      </p>
                    )}
                    <p className="text-[#1D6BF3] font-extrabold text-xl sm:text-2xl pt-1">
                      {food.currency || "$"}
                      {food.price}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Add to cart"
                  className="w-12 h-12 rounded-md bg-[#1D6BF3] hover:bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 active:scale-95 transition-all duration-200"
                >
                  <ShoppingCart className="w-5 h-5 text-white stroke-[2.2]" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-md hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              <span>View All Food</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
