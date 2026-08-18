import Container from "@/components/ui/Container";

export default function Blog({ data }) {
  const content = data;
  if (!content) return null;

  const items = content.items || [];
  if (!items.length) return null;

  return (
    <section id="blog" className="py-16 md:py-24 bg-slate-100">
      <Container>
        <div className="text-center space-y-3 mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {content.title || "Our Latest"}{" "}
            <span className="text-[#1868FB]">
              {content.highlight || "Blog"}
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl p-6 sm:p-8 border border-slate-100/80 shadow-xs hover:shadow-xl hover:border-slate-200 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative"
            >
              <div>
                <div className="min-h-[28px] mb-2 flex items-center absolute -top-4 left-10">
                  {item.badge && (
                    <span className="inline-block bg-[#FF5538] text-white text-[11px] font-bold px-5 py-2.5 rounded-full shadow-xs">
                      {item.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-400 font-medium mb-3">
                  {item.date}
                </p>

                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors mb-5">
                  {item.title}
                </h3>
              </div>

              <div
                className={`rounded-2xl p-5 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal ${
                  item.bgColor || "bg-slate-50"
                }`}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
