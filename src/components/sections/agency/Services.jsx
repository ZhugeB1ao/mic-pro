import Image from "next/image";
import Container from "@/components/ui/Container";

const iconBgColors = [
  "bg-gradient-to-br from-fuchsia-400 to-purple-500 shadow-purple-200",
  "bg-gradient-to-br from-orange-400 to-amber-500 shadow-orange-200",
  "bg-gradient-to-br from-sky-400 to-blue-500 shadow-blue-200",
  "bg-gradient-to-br from-rose-400 to-pink-500 shadow-rose-200",
];

export default function Services({ data }) {
  const content = data;
  if (!content) return null;

  const servicesList = content.items || [];
  const partnersList = content.partners || [];

  const showServices = servicesList && servicesList.length > 0;
  const showPartners = partnersList && partnersList.length > 0;

  if (!showServices && !showPartners) return null;

  return (
    <Container id="services">
      <div className="bg-white rounded-t-[2.5rem] border-t-2 border-x-2 border-slate-100 p-8 md:p-16">
        {showServices && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicesList.map((service, index) => {
              const bgColor = iconBgColors[index % iconBgColors.length];

              return (
                <div
                  key={service.id}
                  className="group flex flex-col items-start rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full text-white shadow-md transition-transform duration-300 group-hover:scale-110 ${bgColor}`}
                  >
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain brightness-0 invert"
                    />
                  </div>

                  <h3 className="mt-8 text-left text-[17px] font-bold leading-snug text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>
        )}

        {showServices && showPartners && (
          <div className="my-8 md:my-16 border-t border-slate-100/60" />
        )}

        {showPartners && (
          <div className="flex flex-col items-center">
            <h2 className="text-center w-1/2 text-2xl font-bold tracking-tight text-slate-800 md:text-5xl leading-tight">
              More than <span className="text-blue-600 font-extrabold">80,000+</span> companies <br className="sm:hidden" /> trust Micpro
            </h2>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16 lg:gap-x-20 w-full">
              {partnersList.map((partner) => (
                <div
                  key={partner.id}
                  className="flex items-center justify-center transition-all duration-300"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={130}
                    height={36}
                    className="h-8 w-auto object-contain opacity-40 grayscale contrast-75 hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
