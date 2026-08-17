import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Services({ services = [], data }) {
  const items = data?.items || services || [];
  if (!items.length) return null;

  return (
    <section
      id="services"
      className="relative py-16 md:py-24"
      style={{ backgroundColor: "rgba(244, 248, 252, 1)" }}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl sm:rounded-3xl bg-white p-8 sm:p-10 text-center flex flex-col items-center justify-between shadow-sm border border-slate-100/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex flex-col items-center w-full">
                <div className="relative h-24 w-28 sm:h-28 sm:w-32 mb-8 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed font-normal max-w-[270px]">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-2 w-full flex justify-center">
                <a
                  href={item.buttonHref || "#"}
                  className={`inline-flex items-center justify-center px-7 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    item.active
                      ? "bg-[#1A5DF8] text-white shadow-md shadow-blue-500/25 hover:bg-blue-700"
                      : "border border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {item.buttonText || "Learn More"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
