import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Donation({ video }) {
  if (!video?.thumbnail) return null;

  return (
    <section className="bg-none relative">
      <Container className="flex justify-center">
        <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] bg-slate-100 shadow-[0_26px_90px_rgba(15,23,42,0.14)]">
          <div className="relative aspect-[16/9] min-h-[280px] w-full">
            <Image
              src={video.thumbnail}
              alt="Donation video thumbnail"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
