import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Statistics({ impact }) {
  if (!impact) return null;

  const { image, statistics = [] } = impact;

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl md:leading-[1.15]">
            We&apos;re here to help our Earth{" "}
            <span className="text-blue-600 font-extrabold">breathe</span> again.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-500 md:text-lg mx-auto font-normal">
            Voluptatem accusantium doloremque laud totam rem aperiam, eaque ipsa
            quae ab illoaperiam, eaque ipsa quae.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src={image}
              alt="Charity impact statistics"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="grid grid-cols-2 w-full">
            {statistics.map((item, index) => {
              const isLeftColumn = index % 2 === 0;
              const isTopRow = index < 2;

              return (
                <div
                  key={item.id || index}
                  className={`flex flex-col justify-center p-6 md:p-8 ${
                    isLeftColumn ? "border-r border-slate-100" : ""
                  } ${isTopRow ? "border-b border-slate-100" : ""}`}
                >
                  <p
                    className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${item.color}`}
                  >
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm md:text-base font-medium text-slate-500 leading-snug">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
