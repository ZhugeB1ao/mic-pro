import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Services({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            <span>{content.titlePrefix || "Smile Confidently with Our Dental"}</span>{" "}
            <span className="text-[#1868FB]">
              {content.titleHighlight || "Services"}
            </span>
          </h2>
          <p className="text-md text-slate-500 font-normal leading-relaxed max-w-xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items?.map((service, idx) => (
            <div
              key={service.id || idx}
              className="rounded-3xl border border-slate-100 bg-white p-8 sm:p-10 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-200/80 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50/50 border border-blue-100/50 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 p-3">
                {service.icon && (
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    unoptimized
                    className="w-10 h-10 object-contain"
                  />
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                {service.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
