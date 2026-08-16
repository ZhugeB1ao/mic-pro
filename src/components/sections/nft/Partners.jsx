import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Partners({ data }) {
  const content = data;
  if (!content || !content.items || content.items.length === 0) return null;

  return (
    <Container id="partners" className="relative z-20 -mt-12 sm:-mt-16 md:-mt-20">
      <div className="bg-white rounded-t-[2.5rem] sm:rounded-t-[3rem] border-t-2 border-x-2 border-slate-100 p-6 sm:p-8 md:py-10 md:px-12 shadow-xs">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-10 max-w-5xl mx-auto">
          {content.items.map((partner) => (
            <div
              key={partner.id}
              className="relative h-7 sm:h-9 w-24 sm:w-32 flex items-center justify-center grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
