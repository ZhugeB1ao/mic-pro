import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Features({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <div id="features" className="space-y-24 sm:space-y-32 py-16 sm:py-24 bg-white">
      {content.ticketing && (
        <section id="feature-ticketing">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-5 text-left">
                <span className={content.ticketing.tagClass || "text-orange-500 font-bold text-xl tracking-wider uppercase"}>
                  {content.ticketing.tag}
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  {content.ticketing.title}
                </h2>

                <p className="text-lg text-slate-500 max-w-lg font-normal leading-relaxed">
                  {content.ticketing.description}
                </p>
              </div>

              <div className="lg:col-span-6 relative flex justify-center">
                {content.ticketing.image && (
                  <div className="relative w-full max-w-[540px]">
                    <Image
                      src={content.ticketing.image}
                      alt={content.ticketing.title}
                      width={540}
                      height={360}
                      className="w-full h-auto object-contain drop-shadow-md"
                    />
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {content.marketing && (
        <section id="feature-marketing">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 relative flex justify-center order-2 lg:order-1">
                {content.marketing.image && (
                  <div className="relative w-full max-w-[500px]">
                    <Image
                      src={content.marketing.image}
                      alt={content.marketing.title}
                      width={500}
                      height={360}
                      className="w-full h-auto object-contain drop-shadow-md"
                    />
                  </div>
                )}
              </div>

              <div className="lg:col-span-6 space-y-5 text-left order-1 lg:order-2">
                <span className={content.marketing.tagClass || "text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase"}>
                  {content.marketing.tag}
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  {content.marketing.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-500 max-w-lg font-normal leading-relaxed">
                  {content.marketing.description}
                </p>
              </div>
            </div>
          </Container>
        </section>
      )}

      {content.engagement && (
        <section id="feature-engagement">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-5 text-left">
                <span className={content.engagement.tagClass || "text-pink-500 font-bold text-xs sm:text-sm tracking-wider uppercase"}>
                  {content.engagement.tag}
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  {content.engagement.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-500 max-w-lg font-normal leading-relaxed">
                  {content.engagement.description}
                </p>
              </div>

              <div className="lg:col-span-6 relative flex justify-center">
                {content.engagement.image && (
                  <div className="relative w-full max-w-[540px]">
                    <Image
                      src={content.engagement.image}
                      alt={content.engagement.title}
                      width={540}
                      height={360}
                      className="w-full h-auto object-contain drop-shadow-md"
                    />
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
