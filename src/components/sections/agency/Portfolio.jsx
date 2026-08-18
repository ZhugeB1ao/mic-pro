import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Portfolio({ data }) {
  const content = data;
  if (!content) return null;

  const items = content.items || [];
  if (!items.length) return null;

  return (
    <section id="portfolio" className="bg-white pb-24 pt-[72rem] md:pt-20 md:pb-32 ">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {content.title}
            <span className="text-blue-600 font-extrabold"> {content.highlight}</span>
          </h2>
        </div>

        <div className="mt-16 space-y-8 md:mt-20 md:space-y-10">
          {items.map((item) => {
            const isImageRight = item.layout === "image-right";

            return (
              <article
                key={item.id}
                className="grid items-center gap-8 overflow-hidden rounded-[2rem] py-5 md:grid-cols-2 md:gap-12 md:py-10"
              >
                <div
                  className={
                    isImageRight
                      ? "text-start md:order-1 md:pr-8"
                      : "text-end md:order-2 md:pl-8"
                  }
                >
                  <p className="text-sm font-light tracking-[0.2em]">
                    {item.category}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="my-4 md:my-8 max-w-xl text-base leading-7 text-slate-600 md:inline-block">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    className={`inline-block border-b-[3px] py-3 uppercase gap-2 tracking-[1em] font-medium transition-colors ${
                      isImageRight
                        ? "[border-image:linear-gradient(90.05deg,#B112F4_-9.94%,rgba(177,18,244,0)_123.03%)_1]"
                        : "[border-image:linear-gradient(90.05deg,rgba(177,18,244,0)_-9.94%,#B112F4_123.03%)_1]"
                    }`}
                  >
                    {item.buttonText}
                  </a>
                </div>

                <div
                  className={`relative mt-8 md:mt-0 overflow-hidden aspect-[4/3] bg-white p-3 shadow-sm ${isImageRight ? "md:order-2" : "md:order-1"}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
