import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Features({ data }) {
  const content = data;
  if (!content || !content.items || content.items.length === 0) return null;

  return (
    <Container id="features" className="relative z-20 -mt-12 sm:-mt-16 md:-mt-20">
      <div className="bg-white rounded-t-[2.5rem] sm:rounded-t-[3rem] border-t-2 border-x-2 border-slate-100 p-6 sm:p-8 md:p-10 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {content.items.map((item) => (
            <div
              key={item.id || item.title}
              className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-slate-200/80 group"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 p-3 ${
                  item.bgClass || "bg-slate-50"
                }`}
              >
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={44}
                    height={44}
                    unoptimized
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                {item.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
