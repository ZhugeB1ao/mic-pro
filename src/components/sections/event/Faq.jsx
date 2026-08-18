import Container from "@/components/ui/Container";
import { Plus, Minus } from "lucide-react";

export default function Faq({ data }) {
  const content = data;
  if (!content || !content.items || content.items.length === 0) return null;

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
            <span>{content.titlePrefix}</span>{" "}
            <span className="text-[#1868FB]">{content.titleHighlight}</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {content.items.map((item, index) => {
            const isOpen = Boolean(item.defaultOpen ?? index === 0);

            return (
              <div
                key={item.id || index}
                className={`rounded-2xl transition-all duration-300 ${isOpen
                  ? "bg-[#1868FB] text-white shadow-lg p-6 sm:p-8"
                  : "bg-white border border-slate-500 text-slate-900 shadow-xs p-5 sm:p-6"
                  }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold tracking-tight">
                    {item.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isOpen
                      ? "text-white"
                      : "text-slate-700"
                      }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </div>

                {isOpen && item.answer && (
                  <div className="mt-4 pt-4 text-xs sm:text-sm text-white/90 leading-relaxed font-normal space-y-3">
                    {item.answer.split("\n\n").map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
