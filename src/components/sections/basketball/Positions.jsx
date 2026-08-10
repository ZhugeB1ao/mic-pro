import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Positions({ positions = [], data }) {
  const items = data?.items || positions || [];
  const content = data || {};
  if (!items.length && !content.title) return null;

  const mid = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, mid);
  const rightItems = items.slice(mid);

  return (
    <section id="positions" className="relative bg-slate-50/40 py-16 md:py-24">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 flex flex-col items-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl lg:text-5xl tracking-tight">
            {content.title}{" "}
            <span className="text-blue-600 font-extrabold">
              {content.highlight}
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed font-normal max-w-md">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left Column (items 1, 2, 3) */}
          <div className="space-y-6 order-1 lg:order-1 lg:col-span-4">
            {leftItems.map((item) => (
              <div
                key={item.id}
                className={`rounded-2xl p-6 border shadow-sm transition-all duration-300 hover:shadow-md ${
                  item.bgClass || "bg-slate-50/60 border-slate-100/60"
                }`}
              >
                <h3
                  className={`text-base font-bold ${
                    item.colorClass || "text-slate-900"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Column - Arch Player Image */}
          <div className="flex justify-center order-3 lg:order-2 lg:col-span-4 pt-4 sm:pt-6 lg:py-4">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] flex items-end justify-center">
              {/* Arch Background */}
              <div className="absolute inset-x-2 top-8 bottom-0 rounded-t-full bg-[linear-gradient(180deg,#2D72F9_0%,#8E4BF4_60%,#E054D6_100%)] shadow-2xl" />

              {/* Player Image */}
              <div className="relative z-10 w-full h-full">
                <Image
                  src={content.centerImage}
                  alt="Basketball Positions Player"
                  fill
                  className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column (items 4, 5) */}
          <div className="space-y-6 order-2 lg:order-3 lg:col-span-4">
            {rightItems.map((item) => (
              <div
                key={item.id}
                className={`rounded-2xl p-6 border shadow-sm transition-all duration-300 hover:shadow-md ${
                  item.bgClass || "bg-slate-50/60 border-slate-100/60"
                }`}
              >
                <h3
                  className={`text-base font-bold ${
                    item.colorClass || "text-slate-900"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
