import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Statistics({ data }) {
  const content = data;
  if (!content || content.length === 0) return null;

  return (
    <section id="statistics" className="py-16 sm:py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {content.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl border border-slate-100 p-8 sm:p-10 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-start"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-xs ${item.iconBg || "bg-blue-50"
                  }`}
              >
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                )}
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                {item.value}
              </div>

              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
