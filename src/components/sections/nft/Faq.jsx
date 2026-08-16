import Container from "@/components/ui/Container";
import { Plus } from "lucide-react";

export default function Faq({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {content.titlePrefix || "Frequently Asked"}{" "}
            <span className="text-[#1868FB]">{content.titleHighlight || "Questions"}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto items-start">
          <div className="space-y-5 sm:space-y-6">
            {content.column1?.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 sm:p-7 transition-all"
              >
                <div className="flex items-center gap-3.5">
                  {item.defaultOpen ? (
                    <span className="w-5 h-1 rounded-full bg-[#1868FB] inline-block shrink-0" />
                  ) : (
                    <span className="w-5 flex justify-center shrink-0">
                      <Plus size={40} className="text-slate-800 stroke-[2.5]" />
                    </span>
                  )}
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {item.question}
                  </h3>
                </div>

                {item.defaultOpen && item.answer && (
                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal pl-8 max-w-md">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-5 sm:space-y-6">
            {content.column2?.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 sm:p-7 transition-all"
              >
                <div className="flex items-center gap-3.5">
                  {item.defaultOpen ? (
                    <span className="w-5 h-1 rounded-full bg-[#1868FB] inline-block shrink-0" />
                  ) : (
                    <span className="w-5 flex justify-center shrink-0">
                      <Plus size={40} className="text-slate-800 stroke-[2.5]" />
                    </span>
                  )}
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {item.question}
                  </h3>
                </div>

                {item.defaultOpen && item.answer && (
                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal pl-8 max-w-md">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
