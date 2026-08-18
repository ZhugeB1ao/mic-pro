import Image from "next/image";
import Container from "@/components/ui/Container";

const iconBgColors = [
  "bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-fuchsia-100",
  "bg-gradient-to-tr from-amber-500 to-orange-400 shadow-orange-100",
  "bg-gradient-to-tr from-sky-400 to-blue-500 shadow-blue-100",
  "bg-gradient-to-tr from-rose-400 to-pink-400 shadow-rose-100",
];

export default function Partners({ data }) {
  const content = data;
  if (!content) return null;

  const servicesList = content.services || [];
  const partnersList = content.partners || [];

  const showServices = servicesList && servicesList.length > 0;
  const showPartners = partnersList && partnersList.length > 0;

  if (!showServices && !showPartners) return null;

  return (
    <section id="partners" className="relative bg-white py-16 md:py-24">
      <Container>
        <div className="flex flex-col items-center">
          <h2 className="mx-auto max-w-3xl text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight md:leading-[1.15]">
            {content.titlePrefix}{" "}
            <span className="text-blue-600 font-extrabold">{content.titleHighlight}</span>{" "}
            {content.titleSuffix}
          </h2>

          {showPartners && (
            <div className="my-12 flex w-full justify-center overflow-hidden border-y border-slate-100 py-8 md:my-16 md:py-10">
              <div className="grid grid-cols-6 md:grid-cols-5 gap-6 md:gap-12 lg:gap-16 w-full max-w-4xl px-4">
                {partnersList.map((partner, idx) => (
                  <div
                    key={partner.id}
                    className={`flex items-center justify-center ${
                      idx < 2 ? "col-span-3" : "col-span-2"
                    } md:col-span-1`}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={130}
                      height={36}
                      className="h-10 w-auto object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {showServices && (
            <div className="mt-6 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {servicesList.map((service, index) => {
                const bgColor = iconBgColors[index % iconBgColors.length];

                return (
                  <div
                    key={service.id}
                    className="group relative flex flex-col items-start rounded-2xl border border-slate-100 bg-white p-6 pt-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div
                      className={`absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-md transition-transform duration-300 group-hover:scale-110 ${bgColor}`}
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain brightness-0 invert"
                      />
                    </div>

                    <h3 className="mt-2 text-left text-base font-bold text-slate-900 md:text-[17px] group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>

                    {service.description && (
                      <p className="mt-1 text-left text-xs font-medium text-slate-400 md:text-sm">
                        {service.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
