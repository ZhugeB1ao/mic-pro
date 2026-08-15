import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Partners({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section id="partners" className="py-16 md:py-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {content.titlePrefix || "Join"}{" "}
            <span className="text-[#1868FB] font-extrabold">{content.highlight || "10,000+"}</span>{" "}
            marketers
            <br />
            writing with AI
          </h2>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 sm:gap-8 opacity-75 hover:opacity-100 transition-opacity">
          {content.logo1 && (
            <div className="w-full flex justify-center">
              <Image
                src={content.logo1}
                alt="Partner logos 1"
                width={1056}
                height={30}
                unoptimized
                className="h-6 sm:h-7 md:h-8 w-auto max-w-full object-contain"
              />
            </div>
          )}
          {content.logo2 && (
            <div className="w-full flex justify-center">
              <Image
                src={content.logo2}
                alt="Partner logos 2"
                width={998}
                height={48}
                unoptimized
                className="h-7 sm:h-8 md:h-10 w-auto max-w-full object-contain"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
