import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Programs({ programs = [], data }) {
  const items = data?.items || programs || [];
  const content = data || {};
  if (!items.length && !content.title) return null;

  return (
    <section id="programs" className="relative bg-white py-16 md:py-24">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl lg:text-5xl tracking-tight">
            {content.title}{" "}
            <span className="text-blue-600 font-extrabold">
              {content.highlight}
            </span>{" "}
            {content.suffix}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed font-normal max-w-md mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div
          className="rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-12 md:p-14 lg:p-16 text-white shadow-2xl shadow-blue-500/20"
          style={{
            background:
              "linear-gradient(135deg, #3D62F5 0%, #4C82FA 100%)",
          }}
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:gap-14">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 sm:gap-6 p-2 rounded-2xl transition-all duration-300 hover:bg-white/5"
              >
                <div className="flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center rounded-2xl sm:rounded-3xl bg-white/15 backdrop-blur-sm p-4 sm:p-5 shadow-inner">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-white/80 leading-relaxed font-normal max-w-xs">
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
