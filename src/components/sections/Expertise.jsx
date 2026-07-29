import Container from "@/components/ui/Container";
import { Check } from "lucide-react";

const iconBgColors = [
  "bg-gradient-to-br from-fuchsia-400 to-purple-500 shadow-purple-200",
  "bg-gradient-to-br from-orange-400 to-amber-500 shadow-orange-200",
  "bg-gradient-to-br from-sky-400 to-blue-500 shadow-blue-200",
  "bg-gradient-to-br from-rose-400 to-pink-500 shadow-rose-200",
];

export default function Expertise({ expertise = [] }) {
  if (!expertise || expertise.length === 0) return null;

  return (
    <section className="bg-white mb-10 md:mb-0 md:py-20">
      <Container className="">
        <div className="rounded-3xl border border-slate-200 bg-slate-100 p-5 pt-4 md:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
              Explore our core <span className="text-blue-600">Expertise</span>
            </h2>
            <p className="mt-4 text-base text-slate-600">
              We produce beautiful and engaging websites. Our team is mostly
              experienced in the design of stunning interfaces, e-commerce and
              marketing website development, ready to work with you on your
              project!
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
            {expertise.map((item, index) => {
              const bgColor = iconBgColors[index % iconBgColors.length];
              return (
                <div
                  key={item.id}
                  className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-slate-800">
                    {item.title}
                  </h3>

                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {item.skills?.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white ${bgColor}`}
                        >
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
