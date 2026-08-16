import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/common/Button";

export default function Hero({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16"
    >
      <Container className="relative z-10">
        <div className="relative max-w-6xl mx-auto text-center space-y-5 sm:space-y-6">
          {content.starPurple && (
            <div className="absolute left-2 xl:left-6 top-24 xl:top-28 hidden xl:block">
              <Image
                src={content.starPurple}
                alt="Star purple"
                width={22}
                height={22}
                unoptimized
              />
            </div>
          )}

          {content.badgeIcon && (
            <div className="absolute left-2 xl:left-8 top-44 xl:top-48 hidden xl:block h-16 w-16 xl:h-20 xl:w-20 rounded-2xl overflow-hidden shadow-lg border border-slate-100 shrink-0">
              <Image
                src={content.badgeIcon}
                alt="NFT badge"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          )}

          {content.starYellow && (
            <div className="absolute right-4 xl:right-10 top-20 xl:top-24 hidden xl:block">
              <Image
                src={content.starYellow}
                alt="Star yellow"
                width={22}
                height={22}
                unoptimized
              />
            </div>
          )}

          {content.creatorsBadge && (
            <div className="absolute right-2 xl:right-8 top-44 xl:top-48 hidden xl:block text-left">
              {content.creatorsBadge.avatar && (
                <div className="relative h-11 w-24 mb-1.5">
                  <Image
                    src={content.creatorsBadge.avatar}
                    alt="Creators avatar"
                    fill
                    unoptimized
                    className="object-contain object-left"
                  />
                </div>
              )}
              <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
                {content.creatorsBadge.count}
              </h4>
              <p className="text-[10px] text-slate-400 max-w-[150px] leading-tight mt-0.5 font-normal">
                {content.creatorsBadge.subtext}
              </p>
            </div>
          )}

          <div className="max-w-4xl mx-auto px-2 sm:px-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.2] sm:leading-[1.15] break-words">
              <span className="block mb-1.5 sm:mb-3">{content.titlePrefix}</span>
              <span>
                {content.titleMiddle}{" "}
                <span className="text-[#1868FB]">{content.titleHighlight}</span>{" "}
                <span className="bg-gradient-to-r from-[#F961D8] to-[#7B4DFF] bg-clip-text text-transparent">
                  {content.titleSuffix}
                </span>
              </span>
            </h1>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed px-4">
            {content.description}
          </p>

          <div className="pt-2">
            <a href={content.primaryButtonHref || "#marketplace"}>
              <Button
                variant="primary"
                geometry="rounded"
                className="bg-[#1868FB] px-8 sm:px-9 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-all hover:scale-105"
              >
                {content.primaryButtonText || "Let's Started"}
              </Button>
            </a>
          </div>
        </div>

        {content.heroCharacters && (
          <div className="mt-8 sm:mt-12 max-w-5xl mx-auto flex items-end justify-center -space-x-6 sm:-space-x-12 md:-space-x-16 lg:-space-x-20">
            {content.heroCharacters.left && (
              <div className="rounded-t-full w-[35%] aspect-[3/4.2] relative overflow-hidden z-30 transition-transform hover:-translate-y-1.5 duration-300">
                <Image
                  src={content.heroCharacters.left}
                  alt="Left character NFT"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
            )}

            {content.heroCharacters.center && (
              <div className="rounded-t-full w-[38%] aspect-[3/4.8] relative overflow-hidden z-20 transition-transform hover:-translate-y-1.5 duration-300">
                <Image
                  src={content.heroCharacters.center}
                  alt="Center character NFT"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
            )}

            {content.heroCharacters.right && (
              <div className="rounded-t-full w-[35%] aspect-[3/4.2] relative overflow-hidden z-10 transition-transform hover:-translate-y-1.5 duration-300">
                <Image
                  src={content.heroCharacters.right}
                  alt="Right character NFT"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
