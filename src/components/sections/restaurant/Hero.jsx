import Container from "@/components/ui/Container";
import Image from "next/image";

export default function Hero({ hero = {} }) {
  if (!hero.title && !hero.dashboardImage) return null;

  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 pointer-events-none overflow-hidden h-full">
        <div className="absolute -left-[10%] top-[15%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-[#51B4FA] opacity-[0.5] blur-[120px]" />
        <div className="absolute left-[20%] top-[35%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#854AEB] opacity-[0.5] blur-[120px]" />
        <div className="absolute left-[50%] top-[18%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full bg-[#F8D997] opacity-[0.5] blur-[120px]" />
        <div className="absolute left-[80%] top-[32%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-[#F8A6F0] opacity-[0.5] blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {hero.title}{" "}
            {hero.highlightWord && (
              <span className="bg-gradient-to-r from-[#F961D8] to-[#1663F9] bg-clip-text text-transparent">
                {hero.highlightWord}
              </span>
            )}
          </h1>

          {hero.description && (
            <p className="text-xl sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              {hero.description}
            </p>
          )}

          <div className="flex flex-col items-center justify-center sm:flex-row gap-4 pt-2">
            {hero.googlePlayImage && (
              <a
                href={hero.googlePlayLink || "#"}
                className="inline-block transition-transform hover:scale-105"
              >
                <Image
                  src={hero.googlePlayImage}
                  alt="Get it on Google Play"
                  width={160}
                  height={48}
                  className="h-14 w-auto object-contain"
                />
              </a>
            )}

            {hero.appStoreImage && (
              <a
                href={hero.appStoreLink || "#"}
                className="inline-block transition-transform hover:scale-105"
              >
                <Image
                  src={hero.appStoreImage}
                  alt="Download on the App Store"
                  width={160}
                  height={48}
                  className="h-14 w-auto object-contain"
                />
              </a>
            )}
          </div>
        </div>

        {hero.dashboardImage && (
          <Image
            src={hero.dashboardImage}
            alt="Restaurant Management Dashboard"
            width={1024}
            height={780}
            className="w-full h-auto object-contain mt-12"
            priority
          />
        )}
      </Container>
    </section>
  );
}
