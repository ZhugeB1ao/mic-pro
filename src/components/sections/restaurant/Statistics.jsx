import Container from "@/components/ui/Container";

export default function Statistics({ statistics = [] }) {
  if (!statistics.length) return null;

  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-14 text-white">
      <Container>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center items-center divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {statistics.map((stat) => (
            <div key={stat.id} className="pt-4 sm:pt-0 sm:px-4 space-y-1 w-1/2 sm:w-auto flex flex-col items-center justify-center mx-auto">
              <p className="text-4xl sm:text-5xl font-extrabold tracking-tight">
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
