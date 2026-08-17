import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/common/Button";
import { Star } from "lucide-react";

export default function Specialists({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section id="facility" className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            <span>{content.titlePrefix || "Our Dental"}</span>{" "}
            <span className="text-[#1868FB]">
              {content.titleHighlight || "Specialist"}
            </span>
          </h2>
          <p className="text-md text-slate-500 font-normal leading-relaxed max-w-xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items?.map((doctor, idx) => (
            <div
              key={doctor.id || idx}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-200/80 group text-center flex flex-col"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-slate-50 flex items-end justify-center">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={300}
                  height={320}
                  unoptimized
                  className="w-auto h-full object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                {doctor.name}
              </h3>

              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-lg bg-blue-50 text-[#1868FB] text-xs font-bold">
                  {doctor.specialty}
                </span>

                <div className="flex items-center gap-1 text-xs font-bold text-slate-600">
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  <span>{doctor.rating}</span>
                  <span className="text-slate-400 font-normal">
                    ({doctor.reviews})
                  </span>
                </div>
              </div>

              <div className="mt-auto">
                <a href="#appointment">
                  <Button
                    variant="primary"
                    geometry="rounded"
                    className="w-full bg-[#1868FB] py-2.5 text-sm font-semibold shadow-md shadow-blue-500/20 hover:bg-blue-600 transition-all hover:scale-[1.02]"
                  >
                    {doctor.buttonText || "Appointment"}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
