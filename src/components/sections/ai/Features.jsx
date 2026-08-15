import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Features({ data }) {
  const content = data;
  if (!content || !content.items || content.items.length === 0) return null;

  return (
    <section id="features" className="py-12 md:py-20 bg-white">
      <Container>
        <div className="rounded-3xl bg-gradient-to-r from-[#4A5EF6] via-[#6355F4] to-[#8C45FF] p-6 sm:p-10 md:p-14 shadow-xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {content.title || "MicPro will help you..."}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5">
            {content.items.map((item) => (
              <div
                key={item.id}
                className="group flex items-start gap-3.5 rounded-2xl bg-white p-4 sm:p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-lg text-slate-900 cursor-pointer"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110 ${item.iconColor}`}
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.title || "feature icon"}
                      width={24}
                      height={24}
                      unoptimized
                      className="h-full w-full object-contain"
                    />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
