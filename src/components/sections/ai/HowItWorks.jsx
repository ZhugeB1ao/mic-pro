import Image from "next/image";
import Container from "@/components/ui/Container";

export default function HowItWorks({ data }) {
  const content = data;
  if (!content || !content.steps || content.steps.length === 0) return null;

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-18">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {content.titlePrefix || "How it work with"}{" "}
            <span className="text-[#1868FB]">{content.titleHighlight || "Micpro"}</span>
          </h2>
        </div>

        <div className="space-y-10 sm:space-y-12 max-w-5xl mx-auto">
          {content.steps.map((step, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={step.id || index}
                style={{
                  backgroundColor: step.cardBg || "rgba(255, 248, 253, 1)",
                  borderColor: step.cardBorder || "rgba(231, 231, 234, 1)",
                }}
                className="rounded-3xl border p-6 sm:p-10 md:p-12 transition-all duration-300 hover:shadow-md"
              >
                <div
                  className={`flex flex-col items-center gap-10 lg:gap-14 ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  <div className="w-full lg:w-1/2 flex justify-center pb-6 sm:pb-8">
                    <div
                      style={{
                        background: step.imageBg,
                      }}
                      className="relative w-full max-w-[390px] rounded-[28px] sm:rounded-[32px] pt-6 px-5 sm:pt-8 sm:px-6 shadow-md transition-transform duration-300 hover:scale-[1.02]"
                    >
                      {step.image && (
                        <div className="relative -mb-8 sm:-mb-10 w-full rounded-2xl sm:rounded-[20px] overflow-hidden bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                          <Image
                            src={step.image}
                            alt={step.title || `Step ${index + 1}`}
                            width={420}
                            height={440}
                            unoptimized
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 text-left space-y-3 sm:space-y-4">
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
