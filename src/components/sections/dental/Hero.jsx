import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/common/Button";
import { Star } from "lucide-react";

export default function Hero({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left">
            {content.badge && (
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orange-100 border border-orange-100/80 shadow-xs">
                {content.badgeIcon ? (
                  <Image
                    src={content.badgeIcon}
                    alt="Tooth icon"
                    width={18}
                    height={18}
                    unoptimized
                    className="w-4 h-4 object-contain"
                  />
                ) : (
                  <span className="text-amber-500 font-bold text-sm">🦷</span>
                )}
                <span className="text-xs sm:text-sm font-bold text-[#FF9035]">
                  {content.badge}
                </span>
              </div>
            )}

            <div className="space-y-2">
              <h1 className="text-center sm:text-start text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                <span className="">
                  {content.titlePrefix || "Smile Brighter with Our"}
                </span>{" "}
                <span className="bg-gradient-to-r from-[#F961D8] to-[#1663F9] bg-clip-text text-transparent">
                  {content.titleHighlight}
                </span>{" "}
                <span className="">
                  {content.titleSuffix || "Dental Services"}
                </span>
              </h1>

              {content.starIcon && (
                <div className="flex justify-start pl-28 sm:pl-36 pt-1">
                  <img
                    src={content.starIcon}
                    alt="Star icon"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain animate-pulse"
                  />
                </div>
              )}
            </div>

            <p className="text-center sm:text-start text-lg sm:text-base text-slate-500 max-w-lg font-normal leading-relaxed">
              {content.description}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 pt-2">
              <a href={content.buttonHref || "#appointment"}>
                <Button
                  variant="primary"
                  geometry="rounded"
                  className="w-full sm:w-auto bg-[#1868FB] px-8 py-3.5 text-sm sm:text-base font-semibold shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-all hover:scale-105"
                >
                  {content.buttonText || "Book An Appointment"}
                </Button>
              </a>

              {content.stats && content.stats.length > 0 && (
                <div className="flex items-center justify-center gap-8 sm:gap-10">
                  {content.stats.map((stat, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              <div className="relative w-full flex items-end justify-center">
                <Image
                  src={content.image || "/dental/images/hero/dentist.png"}
                  alt={content.titlePrefix || "Dentist Doctor"}
                  width={520}
                  height={620}
                  unoptimized
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {content.clinicBadge && (
                <div className="absolute top-4 left-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100/80 text-center min-w-[140px] animate-in fade-in zoom-in duration-300">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#FFF5EB] flex items-center justify-center p-2 mb-2">
                    <Image
                      src={
                        content.clinicBadge.icon ||
                        "/dental/images/hero/teeth.png"
                      }
                      alt="Clinic icon"
                      width={24}
                      height={24}
                      unoptimized
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    {content.clinicBadge.title}
                  </div>
                  <div className="text-xs text-slate-500 font-normal">
                    {content.clinicBadge.subtitle}
                  </div>
                </div>
              )}

              {content.smilePatientBadge && (
                <div className="absolute top-1/2 -translate-y-1/2 -right-10 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-100/80 space-y-1.5 animate-in fade-in zoom-in duration-500">
                  <div className="text-xs font-bold text-slate-900">
                    {content.smilePatientBadge.title}
                  </div>
                  <div className="flex items-center gap-2.5">
                    {content.smilePatientBadge.avatarImage ? (
                      <Image
                        src={content.smilePatientBadge.avatarImage}
                        alt="Smile Patients"
                        width={60}
                        height={24}
                        unoptimized
                        className="h-6 w-auto object-contain"
                      />
                    ) : null}
                    <div className="flex items-center text-amber-400 text-xs">
                      {Array.from({
                        length: content.smilePatientBadge.rating || 5,
                      }).map((_, i) => (
                        <Star key={i} size={11} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {content.floatingToothIcon && (
                <div className="absolute bottom-12 -right-4  w-20 h-20 rounded-full bg-white shadow-2xl border border-slate-100/80 flex items-center justify-center p-4">
                  <Image
                    src={content.floatingToothIcon}
                    alt="Tooth icon"
                    width={28}
                    height={28}
                    unoptimized
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
