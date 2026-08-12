import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Partners({ data }) {
  const content = data;
  if (!content) return null;

  const items = content.items || [];
  if (!items.length) return null;

  return (
    <section id="partners" className="py-8 md:py-12 bg-slate-100">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 text-center md:text-left max-w-xs leading-snug">
            {content.title ||
              "Trusted By Top 100+ Companies & Universities"}
          </h3>

          <div className="grid grid-cols-6 md:grid-cols-5 gap-6 md:gap-10 lg:gap-14 flex-1 w-full">
            {items.map((partner, idx) => (
              <div
                key={partner.id}
                className={`flex items-center justify-center transition-transform hover:scale-105 ${
                  idx < 2 ? "col-span-3" : "col-span-2"
                } md:col-span-1`}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={36}
                  unoptimized
                  className="h-7 sm:h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
