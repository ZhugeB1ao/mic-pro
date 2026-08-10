import Container from "@/components/ui/Container";

export default function Statistics({ statistics = [], data }) {
  const items = data?.items || statistics || [];
  if (!items.length) return null;

  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-10 sm:py-14 text-white">
      <Container>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {items.map((stat) => (
            <div
              key={stat.id}
              className="py-6 sm:py-0 sm:px-6 flex flex-col items-center justify-center text-center space-y-1 w-full"
            >
              <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                {stat.value}
              </p>
              <p className="text-sm sm:text-base text-blue-100 font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
