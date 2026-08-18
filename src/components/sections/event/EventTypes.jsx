import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/common/Button";

export default function EventTypes({ data }) {
  const content = data;
  if (!content || !content.items || content.items.length === 0) return null;

  return (
    <section id="event-types" className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
            <span>{content.titlePrefix}</span>{" "}
            <span className="text-[#1868FB]">{content.titleHighlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {content.items.map((item) => (
            <div
              key={item.id}
              style={{ background: item.gradientStyle }}
              className="rounded-[32px] p-6 sm:p-8 flex flex-col justify-between text-white shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center space-y-3 mb-6">
                <h3 className="text-xl sm:text-4xl font-black tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-lg text-white/90 font-medium">
                  {item.description}
                </p>
                <div className="pt-2">
                  <a href={item.buttonHref || "#ticket"}>
                    <Button
                      variant="light"
                      geometry="rounded"
                      className="bg-white px-7 py-2.5 text-xs sm:text-sm font-bold text-[#1868FB] shadow-md hover:bg-slate-50 transition-all hover:scale-105"
                    >
                      {item.buttonText || "Get Ticket"}
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg text-slate-900 mt-auto flex items-center justify-center overflow-hidden min-h-[180px]">
                {item.image && (
                  <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
