import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/common/Button";

export default function TrendingCreators({ data }) {
  const content = data;
  if (!content || !content.items || content.items.length === 0) return null;

  return (
    <section id="creators" className="py-16 md:py-24 bg-white">
      <Container>
        <div
          style={{
            background:
              "linear-gradient(243.41deg, #9A40E4 7.82%, #5C70F4 74.31%)",
          }}
          className="rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-14 shadow-2xl text-white"
        >
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {content.title || "Trending creators"}
            </h2>
          </div>

          <div className="space-y-2.5 max-w-5xl mx-auto overflow-x-auto">
            {content.items.map((creator) => (
              <div
                key={creator.rank}
                className="flex min-w-[640px] items-center justify-between rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md px-5 py-3.5 transition-colors border border-white/10 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-3 w-48 shrink-0">
                  <span className="font-bold text-white/70 w-6">
                    #{creator.rank}
                  </span>

                  <div className="relative h-8 w-8 rounded-full overflow-hidden shrink-0 shadow-xs">
                    {creator.avatar && (
                      <Image
                        src={creator.avatar}
                        alt={creator.username}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    )}
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-bold text-white truncate">
                      {creator.username}
                    </h4>
                    <p className="text-[10px] text-white/60 truncate">
                      {creator.handle}
                    </p>
                  </div>
                </div>

                <span className="w-12 text-center text-white/80 font-medium">
                  {creator.stat1}
                </span>

                <span className="w-12 text-center text-white/80 font-medium">
                  {creator.stat2}
                </span>

                <span className="w-24 text-center text-white/90 font-semibold">
                  {creator.stat3}
                </span>

                <span className="w-24 text-center text-white/80 font-medium">
                  {creator.stat4}
                </span>

                <span className="w-28 text-right font-bold text-white">
                  {creator.stat5}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <a href={content.buttonHref || "#"}>
              <Button
                variant="primary"
                geometry="rounded"
                className="bg-white !text-slate-900 px-9 py-3.5 text-sm font-bold shadow-lg hover:bg-slate-100 transition-all hover:scale-105"
              >
                {content.buttonText || "More Creators"}
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
