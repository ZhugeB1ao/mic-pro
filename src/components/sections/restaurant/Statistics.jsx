import Container from "@/components/ui/Container";

export default function Statistics({ data }) {
  const content = data;
  if (!content) return null;

  const items = content.items || [];
  if (!items.length) return null;

  return (
    <section id="statistics" className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-10 md:py-14 text-white">
      <Container>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-evenly gap-4 md:gap-0">
          {items.map((stat, idx) => (
            <div key={stat.id} className="flex flex-col md:flex-row items-center w-full md:w-auto">
              {idx > 0 && (
                <>
                  <div className="w-32 h-[1px] bg-white/25 my-4 md:hidden" />
                  <div className="hidden md:block w-[1px] h-12 bg-white/25 shrink-0 mx-4 lg:mx-8" />
                </>
              )}
              <div className="flex flex-col items-center justify-center text-center space-y-1 w-full">
                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-blue-100 font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
