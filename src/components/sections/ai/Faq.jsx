import Container from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";

export default function Faq({ data }) {
  const content = data;
  if (!content || !content.items || content.items.length === 0) return null;

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {content.titlePrefix || "Frequently Asked"}{" "}
            <span className="text-[#1868FB]">{content.titleHighlight || "Questions"}</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {content.items.map((item, index) => {
            const isOpen = Boolean(item.defaultOpen);

            return (
              <div
                key={item.id || index}
                className={`rounded-xl ${
                  isOpen
                    ? "border border-[#4C85F8] bg-white p-5 sm:p-6"
                    : "border border-slate-200 bg-white p-5 sm:p-6"
                }`}
              >
                <div className="flex w-full items-center justify-between text-left">
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {item.question}
                  </span>
                  <span
                    className={`ml-4 flex shrink-0 items-center justify-center ${
                      isOpen ? "rotate-180 text-slate-600" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown size={20} />
                  </span>
                </div>

                {isOpen && item.answer && (
                  <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed font-normal pr-8">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
