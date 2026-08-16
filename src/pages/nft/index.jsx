import { useState, useEffect } from "react";
import Head from "next/head";
import NftLayout from "@/components/layout/Nft";
import Hero from "@/components/sections/nft/Hero";
import Partners from "@/components/sections/nft/Partners";
import FeaturedCollections from "@/components/sections/nft/FeaturedCollections";
import FeaturedNft from "@/components/sections/nft/FeaturedNft";
import Marketplace from "@/components/sections/nft/Marketplace";
import TopSellers from "@/components/sections/nft/TopSellers";
import TrendingCreators from "@/components/sections/nft/TrendingCreators";
import Faq from "@/components/sections/nft/Faq";
import Subscribe from "@/components/sections/nft/Subscribe";

export default function NftPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/nft")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch NFT data");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-white">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#1868FB] border-t-transparent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white text-center px-4">
        <p className="text-lg font-semibold text-rose-500">{error}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-4 rounded-xl bg-[#1868FB] px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>MicPro NFT - Discover, Buy and Sell Extraordinary Digital Art & Collectibles</title>
        <meta
          name="description"
          content="The world's leading marketplace for digital art, crypto collectibles and non-fungible tokens. Buy, sell, and discover exclusive digital items on MicPro."
        />
      </Head>

      <NftLayout data={data?.footer}>
        <div className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#51B4FA] opacity-20 blur-[130px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-32 right-1/4 h-96 w-96 rounded-full bg-[#854AEB] opacity-20 blur-[130px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-96 left-1/3 h-80 w-80 rounded-full bg-[#F8A6F0] opacity-20 blur-[120px]"
          />

          <Hero data={data?.hero} />
        </div>

        <Partners data={data?.partners} />
        <FeaturedCollections data={data?.featuredCollections} />
        <FeaturedNft data={data?.featuredNft} />
        <Marketplace data={data?.marketplace} />
        <TopSellers data={data?.topSellers} />
        <TrendingCreators data={data?.trendingCreators} />
        <Faq data={data?.faq} />
        <Subscribe data={data?.subscribe} />
      </NftLayout>
    </>
  );
}
