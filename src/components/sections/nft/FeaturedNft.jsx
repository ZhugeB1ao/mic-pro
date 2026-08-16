import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/common/Button";

export default function FeaturedNft({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section id="featured-drop" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mx-auto">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative aspect-square w-full max-w-[380px] sm:max-w-[420px]">
              {content.image && (
                <Image
                  src={content.image}
                  alt={content.name}
                  fill
                  unoptimized
                  className="object-contain"
                />
              )}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left pl-0 lg:pl-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {content.name}
            </h2>

            <div className="flex items-center gap-2">
              <div className="relative h-6 w-6 shrink-0">
                <Image
                  src={content.creatorIcon || "/nft/icons/eth.svg"}
                  alt="ETH"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
              <p className="text-sm">
                <span className="text-slate-400 font-medium">Created by </span>
                <span className="text-[#1868FB] font-bold">
                  {content.creator}
                </span>
              </p>
            </div>

            {content.auctionEndsIn && (
              <div className="flex items-center gap-3 sm:gap-4 pt-1">
                <div className="rounded-xl bg-[#EBF3FF] px-4 py-3 min-w-[62px] text-center">
                  <span className="text-base sm:text-lg font-bold text-[#1868FB] block leading-none">
                    {content.auctionEndsIn.days}
                  </span>
                  <span className="text-[10px] font-bold text-[#7C94BA] uppercase tracking-wider mt-1.5 block">
                    DAYS
                  </span>
                </div>

                <div className="rounded-xl bg-[#EBF3FF] px-4 py-3 min-w-[62px] text-center">
                  <span className="text-base sm:text-lg font-bold text-[#1868FB] block leading-none">
                    {content.auctionEndsIn.hours}
                  </span>
                  <span className="text-[10px] font-bold text-[#7C94BA] uppercase tracking-wider mt-1.5 block">
                    HRS
                  </span>
                </div>

                <div className="rounded-xl bg-[#EBF3FF] px-4 py-3 min-w-[62px] text-center">
                  <span className="text-base sm:text-lg font-bold text-[#1868FB] block leading-none">
                    {content.auctionEndsIn.minutes}
                  </span>
                  <span className="text-[10px] font-bold text-[#7C94BA] uppercase tracking-wider mt-1.5 block">
                    MINS
                  </span>
                </div>

                <div className="rounded-xl bg-[#EBF3FF] px-4 py-3 min-w-[62px] text-center">
                  <span className="text-base sm:text-lg font-bold text-[#1868FB] block leading-none">
                    {content.auctionEndsIn.seconds}
                  </span>
                  <span className="text-[10px] font-bold text-[#7C94BA] uppercase tracking-wider mt-1.5 block">
                    SECS
                  </span>
                </div>
              </div>
            )}

            <div className="pt-1">
              <span className="text-xs text-slate-400 font-medium block">
                Current Bid
              </span>
              <span className="text-2xl sm:text-lg font-semibold text-slate-900 mt-1 block opacity-50">
                {content.currentBid}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                geometry="rounded"
                className="bg-[#1868FB] px-8 py-3.5 text-sm font-semibold shadow-md shadow-blue-500/20 hover:bg-blue-600 transition-all hover:scale-105"
              >
                {content.buttons?.primary || "Place a Bid"}
              </Button>

              <a
                href="#artwork"
                className="inline-flex items-center justify-center rounded-full bg-[#1C1C1C] px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-black transition-all hover:scale-105"
              >
                {content.buttons?.secondary || "View Artwork"}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
