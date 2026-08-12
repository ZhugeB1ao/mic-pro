import Container from "@/components/ui/Container";
import Image from "next/image";

export default function Features({ features = [], data }) {
  const items = data?.items || features || [];
  if (!items.length) return null;

  return (
    <section id="features" className="py-20 bg-slate-10">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {data?.title || "Our Special"}{" "}
            <span className="text-blue-600">{data?.highlight || "Features"}</span>
          </h2>
          <p className="text-xl sm:text-base text-slate-500 font-normal">
            This lesson provides a basic framework for conducting a recipe demonstration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl p-5 border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-52 w-full overflow-hidden rounded-xl bg-white mb-5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-center space-y-2 px-2 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg sm:text-lg text-slate-500 w-2/3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
