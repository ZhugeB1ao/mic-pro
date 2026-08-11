import Container from "@/components/ui/Container";

export default function CallToAction({ cta, data }) {
  const content = cta || data || {};
  if (!content.title) return null;

  return (
    <section className="relative bg-white py-16 md:py-24">
      <Container>
        <div
          className="rounded-[2.5rem] p-10 sm:p-14 md:p-20 text-center text-white shadow-2xl shadow-purple-500/20"
          style={{
            background:
              "linear-gradient(135deg, #5B68F8 0%, #764CF6 50%, #9842EB 100%)",
          }}
        >
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {content.title}
            </h2>

            <div>
              <a
                href={content.buttonHref || "#"}
                className="inline-block rounded-xl bg-white px-8 py-3.5 text-sm sm:text-base font-bold text-[#764CF6] shadow-xl transition-all hover:bg-slate-50 hover:scale-105"
              >
                {content.buttonText || "Get Started for free"}
              </a>
            </div>

            {content.subtitle && (
              <p className="text-xs sm:text-sm text-purple-100 font-medium">
                {content.subtitle}
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
