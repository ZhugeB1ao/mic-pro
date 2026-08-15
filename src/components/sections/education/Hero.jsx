import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/common/Button";
import { Play } from "lucide-react";

export default function Hero({ data }) {
  const content = data;
  if (!content) return null;

  const students = content.students || [];

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <Container className="relative z-10">
        {content.abcImage && (
          <div className="absolute -left-2 top-8 md:left-6 md:top-20 z-20 pointer-events-none hidden sm:block">
            <Image
              src={content.abcImage}
              alt="ABC Blackboard Illustration"
              width={110}
              height={100}
              unoptimized
              className="w-20 md:w-28 h-auto drop-shadow-md"
            />
          </div>
        )}

        {content.booksImage && (
          <div className="absolute -right-2 top-6 md:right-6 md:top-20 z-20 pointer-events-none hidden sm:block">
            <Image
              src={content.booksImage}
              alt="Books Illustration"
              width={110}
              height={100}
              unoptimized
              className="w-20 md:w-28 h-auto drop-shadow-md"
            />
          </div>
        )}

        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight md:leading-[1.15]">
            {content.titlePrefix || "Welcome to the World of"}{" "}
            <br className="hidden sm:inline" />
            <span className="inline-flex items-center justify-center gap-2">
              <span className="bg-gradient-to-r from-[#F961D8] to-[#7B4DFF] bg-clip-text text-transparent">
                {content.titleHighlight || "Knowledge"}
              </span>
              {content.bulbImage ? (
                <Image
                  src={content.bulbImage}
                  alt="Lightbulb"
                  width={48}
                  height={48}
                  unoptimized
                  className="inline-block w-8 sm:w-10 md:w-12 h-auto align-middle -mt-1 md:-mt-2"
                />
              ) : (
                <span>{content.emoji || "💡"}</span>
              )}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto font-normal leading-relaxed">
            {content.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a href={content.primaryButtonHref || "#courses"}>
              <Button
                variant="primary"
                geometry="rounded"
                className="bg-[#1868FB] px-8 py-3.5 text-sm font-semibold shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-all hover:scale-105"
              >
                {content.primaryButtonText || "Get Started"}
              </Button>
            </a>

            <a
              href={content.secondaryButtonHref || "#video"}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors group"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                <Play size={14} className="fill-current ml-0.5" />
              </span>
              <span>{content.secondaryButtonText || "Watch Video"}</span>
            </a>
          </div>
        </div>

        {students.length > 0 && (
          <div className="mt-10 sm:mt-14 md:mt-20 max-w-5xl mx-auto grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 items-start">
            {students.map((student, idx) => (
              <div
                key={student.id || idx}
                className={`relative flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 ${
                  student.offset || ""
                }`}
              >
                <div className="relative w-full aspect-[3/4.6] overflow-hidden">
                  <Image
                    src={student.image}
                    alt={student.alt || "Student"}
                    fill
                    sizes="(max-width: 640px) 25vw, 25vw"
                    unoptimized
                    className="object-cover object-top"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
