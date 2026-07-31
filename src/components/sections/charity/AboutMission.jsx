import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";

export default function AboutMission({ support }) {
  if (!support) return null;

  const { title, description, image, features = [] } = support;

  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="text-center w-3/4 mb-12 self-center text-3xl font-bold tracking-tight text-slate-800 md:text-5xl leading-tight">
            You can Help lots of people{" "}
            <span className="text-blue-600 font-extrabold">helping</span>{" "}
            others.
          </h2>
        </div>

        <div className="grid gap-0 md:gap-12 lg:grid-cols-2 items-center">
          <div className="mt-12 lg:mt-0 order-2 lg:order-2">
            <h2 className="max-w-sm text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl md:leading-tight">
              {title}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-500 md:text-lg">
              {description}
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature.id} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white bg-orange-600 "
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-7 text-slate-700 md:text-base">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[1.06] overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
