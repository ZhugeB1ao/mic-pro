import Container from "@/components/ui/Container";

export default function Statistics({ statistics = [], data }) {
  const items = data?.items || statistics || [];
  if (!items.length) return null;

  return (
    <section
      className="relative bg-white py-12 md:py-16"
      style={{ backgroundColor: "rgba(244, 248, 252, 1)" }}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-slate-200/60 text-center  ">
          {items.map((item) => (
            <div key={item.id} className="sm:pt-6 md:pt-0 sm:text-start sm:pl-10">
              <span
                className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight ${
                  item.colorClass || "text-slate-900"
                }`}
              >
                {item.value}
              </span>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
