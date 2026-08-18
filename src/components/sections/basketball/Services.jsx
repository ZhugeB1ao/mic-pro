import Image from "next/image";
import Container from "@/components/ui/Container";
import { ChevronRight } from "lucide-react";

export default function Services({ data }) {
  const content = data;
  if (!content) return null;

  const items = content.items || [];
  if (!items.length) return null;

  return (
    <Container id="services">
      <div className="bg-white rounded-t-[2.5rem] border-t-2 border-x-2 border-slate-100 p-8 md:p-16 mt-[750px] sm:mt-10">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl lg:text-5xl tracking-tight">
            {content.title}{" "}
            <span className="text-blue-600 font-extrabold">
              {content.highlight}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-start rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full text-white shadow-md transition-transform duration-300 group-hover:scale-110 ${
                  item.bgColor || "bg-pink-500"
                } p-3.5`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain brightness-0 invert"
                />
              </div>

              <h3 className="mt-6 text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>

              <p className="mt-2 text-xs text-slate-500 leading-relaxed font-medium">
                {item.description}
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors"
              >
                {item.buttonText || "Learn More"}
                <ChevronRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
