import Container from "@/components/ui/Container";

const statsGradient = [
  "from-pink-500 to-fuchsia-500",
  "from-amber-500 to-orange-500",
  "from-sky-400 to-blue-500",
  "from-rose-400 to-pink-500",
];

export default function Statistics({ statistics = [], data }) {
  const items = data?.items || statistics || [];
  if (!items.length) return null;

  return (
    <section id="statistics" className="relative bg-slate-100 py-12 md:py-16">
      <Container>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-evenly gap-4 md:gap-0">
          {items.map((stat, index) => {
            const gradient = statsGradient[index % statsGradient.length];

            return (
              <div key={stat.id} className="flex flex-col md:flex-row items-center w-full md:w-auto">
                {index > 0 && (
                  <>
                    <div className="w-32 h-[1px] bg-slate-300/80 my-4 md:hidden" />
                    <div className="hidden md:block w-[1px] h-12 bg-slate-300/80 shrink-0 mx-4 lg:mx-8" />
                  </>
                )}
                <div className="flex flex-col items-center justify-center text-center space-y-1 group w-full">
                  <span
                    className={`bg-gradient-to-r ${gradient} bg-clip-text text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent tracking-tight transition-transform duration-300 group-hover:scale-105`}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium tracking-wide">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
