import Image from "next/image";
import { Plus } from "lucide-react";
import Container from "@/components/ui/Container";

export default function SimilarItems({ similarItems, data }) {
  const content = similarItems || data || {};
  if (!content.title) return null;

  return (
    <section id="similar-items" className="relative bg-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 flex flex-col items-start justify-center">
            {content.category && (
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-400">
                {content.category}
              </span>
            )}

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight w-3/4">
              {content.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg font-normal w-3/4">
              {content.description}
            </p>

            {content.badges?.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {content.badges.map((badge) => (
                  <div
                    key={badge.id}
                    className="flex items-center gap-3.5 p-4 shadow-xs"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-400">
                      <Plus size={16} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">
                        {badge.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5">
                        {badge.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg aspect-[508/575]">
              <Image
                src={content.image || "/ecommerce/images/similar-item/man.png"}
                alt="Similar style model"
                fill
                className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
