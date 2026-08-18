import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Hero({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section id="hero" className="relative overflow-hidden bg-transparent pt-28 pb-16 md:pt-36 md:pb-24">
      <Container className="relative z-10">
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="hidden xl:block absolute -left-4 md:-left-12 lg:-left-16 top-0">
            <div className="relative">
              {content.leftDoodle && (
                <div className="absolute top-20 left-16 w-8 h-8 md:w-10 md:h-10">
                  <Image
                    src={content.leftDoodle}
                    alt="Sparks doodle"
                    width={40}
                    height={40}
                    unoptimized
                    className="object-contain"
                  />
                </div>
              )}
              {content.leftAvatar && (
                <div className="absolute top-28 -left-10 w-30 h-30 sm:w-36 sm:h-36 ">
                  <Image
                    src={content.leftAvatar}
                    alt="Fashion model avatar"
                    width={130}
                    height={130}
                    unoptimized
                    className="object-contain drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="hidden xl:block absolute -right-4 md:-right-12 lg:-right-16 top-2">
            <div className="relative">
              {content.rightDoodle && (
                <div className="absolute top-2 -left-32 w-36 h-36 ">
                  <Image
                    src={content.rightDoodle}
                    alt="Arrow doodle"
                    width={144}
                    height={144}
                    unoptimized
                    className="object-contain"
                  />
                </div>
              )}
              {content.rightAvatar && (
                <div className="absolute top-32 -right-24 w-30 h-30 sm:w-36 sm:h-36">
                  <Image
                    src={content.rightAvatar}
                    alt="Fashion model avatar"
                    width={110}
                    height={110}
                    unoptimized
                    className="object-contain drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>
              )}
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.2] sm:leading-[1.15] break-words px-2 sm:px-4">
            {content.title}{" "}
            <span className="bg-gradient-to-r from-[#F961D8] to-[#1663F9] bg-clip-text text-transparent">
              {content.highlight}
            </span>{" "}
            in <br className="hidden sm:inline" />
            {content.suffix}
          </h1>
        </div>

        {content.groupImage && (
          <div className="mt-10 md:mt-16 max-w-6xl mx-auto flex justify-center">
            <div className="relative w-full aspect-[1238/490]">
              <Image
                src={content.groupImage}
                alt="Shop the best styles in one place"
                fill
                unoptimized
                className="object-contain drop-shadow-xl hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
