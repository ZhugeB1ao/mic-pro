import Container from "@/components/ui/Container";
import Image from "next/image";

export default function Hero({ hero, data }) {
  const content = hero || data || {};
  if (!content.title && !content.dashboardImage) return null;

  return (
    <section className="relative bg-transparent pt-16 pb-12 md:pt-24 md:pb-16">
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {content.title}{" "}
            {content.highlightWord && (
              <span className="bg-gradient-to-r from-[#F961D8] to-[#1663F9] bg-clip-text text-transparent">
                {content.highlightWord}
              </span>
            )}
          </h1>

          {content.description && (
            <p className="text-xl sm:text-lg text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
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
                  className="h-14 w-auto object-contain"
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
                  className="h-14 w-auto object-contain"
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
            className="w-full h-auto object-contain mt-12"
            priority
          />
        )}
      </Container>
    </section>
  );
}
