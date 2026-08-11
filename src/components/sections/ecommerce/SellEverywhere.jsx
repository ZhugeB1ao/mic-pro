import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";

const CIRCLE_COLORS = [
  "bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-fuchsia-100",
  "bg-gradient-to-tr from-amber-500 to-orange-400 shadow-orange-100",
  "bg-gradient-to-tr from-sky-400 to-blue-500 shadow-blue-100",
  "bg-gradient-to-tr from-rose-400 to-pink-400 shadow-rose-100",
];

export default function SellEverywhere({ sellEverywhere, data }) {
  const content = sellEverywhere || data || {};
  if (!content.title) return null;

  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-80 sm:w-[420px] h-80 sm:h-[420px] bg-sky-200/50 rounded-full blur-3xl sm:blur-[110px] pointer-events-none -z-0" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-lg aspect-[583/554]">
              <Image
                src={
                  content.image ||
                  "/ecommerce/images/sell-everywhere/sell-everywhere.png"
                }
                alt="Sell everywhere multi-channel preview"
                fill
                className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              {content.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg font-normal">
              {content.description}
            </p>

            {content.features?.length > 0 && (
              <ul className="space-y-4 pt-2">
                {content.features.map((feature, idx) => {
                  const text = typeof feature === "string" ? feature : feature.text;
                  const bgGradient = CIRCLE_COLORS[idx % CIRCLE_COLORS.length];

                  return (
                    <li key={idx} className="flex items-start gap-3.5">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-white shadow-sm shrink-0 mt-0.5 ${bgGradient}`}
                      >
                        <Check size={12} strokeWidth={3} className="text-white" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-normal">
                        {text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
