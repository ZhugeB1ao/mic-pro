import Image from "next/image";
import Container from "@/components/ui/Container";

export default function AboutDecare({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            {content.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square">
              <div className="w-full h-full rounded-full overflow-hidden relative shadow-xl">
                <Image
                  src={content.image || "/dental/images/about/smiling-girl.png"}
                  alt={content.title || "Patient smile"}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              <div className="absolute top-2 right-4 w-14 h-14 rounded-full bg-[#FFF5EB] border border-orange-100/70 shadow-lg flex items-center justify-center p-3.5 z-10 animate-in fade-in zoom-in duration-300">
                <Image
                  src={content.toothIcon || "/dental/images/hero/teeth.png"}
                  alt="Tooth icon"
                  width={28}
                  height={28}
                  unoptimized
                  className="w-7 h-7 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            {content.steps?.map((step, idx) => (
              <div key={idx} className="space-y-3">
                <div
                  style={{ background: step.gradient }}
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs text-white shadow-xs"
                >
                  {step.number}
                </div>
                <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
