import Container from "@/components/ui/Container";

export default function Statistics({ statistics = [], data }) {
  const items = data?.items || statistics || [];
  if (!items.length) return null;

  return (
    <section id="statistics" className="py-12 md:py-16 bg-[#F4F8FC]">
      <Container>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-evenly gap-4 md:gap-0">
          {items.map((item, idx) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center w-full md:w-auto">
              {idx > 0 && (
                <>
                  <div className="w-32 h-[1px] bg-slate-300/80 my-4 md:hidden" />
                  <div className="hidden md:block w-[1px] h-12 bg-slate-300/80 shrink-0 mx-4 lg:mx-8" />
                </>
              )}
              <div className="flex flex-col items-center justify-center text-center space-y-1 group w-full">
                <span
                  className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight transition-transform duration-300 group-hover:scale-105 ${
                    item.colorClass || "text-slate-900"
                  }`}
                >
                  {item.value}
                </span>
                <p className="text-xs sm:text-sm text-slate-500 font-medium tracking-wide">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
