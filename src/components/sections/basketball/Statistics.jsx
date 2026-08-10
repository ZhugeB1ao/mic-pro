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
    <section className="relative bg-slate-100 py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {items.map((stat, index) => {
            const gradient = statsGradient[index % statsGradient.length];

            return (
              <div
                key={stat.id}
                className="flex flex-col items-center justify-center p-6 text-center"
              >
                <span
                  className={`bg-gradient-to-r ${gradient} bg-clip-text text-7xl sm:text-5xl font-black text-transparent tracking-tight`}
                >
                  {stat.value}
                </span>
                <span className="mt-4 text-xl sm:text-lg font-normal text-slate-400">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
