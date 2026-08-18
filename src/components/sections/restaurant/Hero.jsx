import Container from "@/components/ui/Container";
import Image from "next/image";

export default function Hero({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section id="hero" className="relative bg-transparent pt-28 pb-12 md:pt-36 md:pb-16">
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.2] sm:leading-tight break-words px-2">
            {content.title}{" "}
            {content.highlightWord && (
              <span className="bg-gradient-to-r from-[#F961D8] to-[#1663F9] bg-clip-text text-transparent">
                {content.highlightWord}
              </span>
            )}
          </h1>

          {content.description && (
            <p className="text-xs sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed px-4">
              {content.description}
            </p>
          )}

          <div className="flex flex-col items-center justify-center sm:flex-row gap-4 pt-2">
            {content.googlePlayImage && (
              <a
                href={content.googlePlayLink || "#"}
                className="inline-block transition-transform hover:scale-105"
              >
                <Image
                  src={content.googlePlayImage}
                  alt="Get it on Google Play"
                  width={160}
                  height={48}
                  unoptimized
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </a>
            )}

            {content.appStoreImage && (
              <a
                href={content.appStoreLink || "#"}
                className="inline-block transition-transform hover:scale-105"
              >
                <Image
                  src={content.appStoreImage}
                  alt="Download on the App Store"
                  width={160}
                  height={48}
                  unoptimized
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </a>
            )}
          </div>
        </div>

        {content.dashboardImage && (
          <Image
            src={content.dashboardImage}
            alt="Restaurant Management Dashboard"
            width={1024}
            height={780}
            unoptimized
            className="w-full h-auto object-contain mt-12"
          />
        )}
      </Container>
    </section>
  );
}
