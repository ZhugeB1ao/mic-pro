import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Partners({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section id="partners" className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <Container>
        <div className="max-w-5xl mx-auto flex items-center justify-center">
          <div className="relative w-full max-w-4xl h-8 sm:h-10 md:h-12 flex items-center justify-center">
            <Image
              src={content.image}
              alt={content.alt || "Event Partners"}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
