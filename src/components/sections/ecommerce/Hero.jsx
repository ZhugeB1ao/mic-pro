import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Hero({ hero, data }) {
  const content = hero || data || {};
  if (!content.title) return null;

  return (
    <section id="hero" className="relative overflow-hidden bg-transparent pt-10 pb-16 md:pt-24 md:pb-24">
      <Container className="relative z-10">
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="hidden sm:block absolute -left-4 md:-left-12 lg:-left-16 top-0">
            <div className="relative">
              {content.leftDoodle && (
                <div className="absolute top-20 left-16 w-8 h-8 md:w-10 md:h-10">
                  <Image
                    src={content.leftDoodle}
                    alt="Sparks doodle"
                    width={40}
                    height={40}
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
                    className="object-contain drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="hidden sm:block absolute -right-4 md:-right-12 lg:-right-16 top-2">
            <div className="relative">
              {content.rightDoodle && (
                <div className="absolute top-2 -left-32 w-36 h-36 ">
                  <Image
                    src={content.rightDoodle}
                    alt="Arrow doodle"
                    width={144}
                    height={144}
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
                    className="object-contain drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>
              )}
            </div>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] px-4">
            {content.title}{" "}
            <span className="bg-gradient-to-r from-[#F961D8] to-[#1663F9] bg-clip-text text-transparent">
                {content.highlight}
              </span>
            {" "}in <br />
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
                className="object-contain drop-shadow-xl hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
