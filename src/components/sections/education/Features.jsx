import Image from "next/image";
import Container from "@/components/ui/Container";

const CIRCLE_COLORS = [
  "bg-gradient-to-br from-sky-400 to-blue-500 shadow-blue-200",
  "bg-gradient-to-br from-amber-500 to-orange-400 shadow-orange-200",
  "bg-gradient-to-br from-fuchsia-500 to-pink-400 shadow-fuchsia-200",
  "bg-gradient-to-br from-rose-400 to-red-500 shadow-rose-200",
];

export default function Features({ data }) {
  const content = data;
  if (!content) return null;

  const items = content.items || [];
  if (!items.length) return null;

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center space-y-3 mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {content.title || "A Choice That Makes The"}{" "}
            <span className="text-[#1868FB]">
              {content.highlight || "Difference"}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const bgColor = CIRCLE_COLORS[idx % CIRCLE_COLORS.length];

            return (
              <div
                key={item.id}
                className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-100/80 shadow-xs hover:shadow-xl hover:border-slate-200 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-start"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 shadow-md ${bgColor}`}
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={26}
                      height={26}
                      unoptimized
                      className="h-6 w-auto object-contain"
                    />
                  )}
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
