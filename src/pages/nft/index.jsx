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
import { getNftData } from "@/services/nft";

export default function NftPage({ data }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (data?.faq?.items || []).map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <title>MicPro NFT - Khám Phá & Giao Dịch Digital Art Độc Quyền</title>
        <meta
          name="description"
          content="Sàn giao dịch NFT hàng đầu thế giới. Mua bán, đúc NFT và sở hữu các tác phẩm nghệ thuật kỹ thuật số có bản quyền bảo mật tuyệt đối."
        />
        <link rel="canonical" href="https://micpro.com/nft" />
        <meta property="og:title" content="MicPro NFT - Khám Phá & Giao Dịch Digital Art Độc Quyền" />
        <meta
          property="og:description"
          content="Sàn giao dịch NFT hàng đầu thế giới. Mua bán, đúc NFT và sở hữu các tác phẩm nghệ thuật kỹ thuật số có bản quyền bảo mật tuyệt đối."
        />
        <meta property="og:image" content="https://micpro.com/nft/images/hero/monkey-2.png" />
        <meta property="og:url" content="https://micpro.com/nft" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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

export async function getStaticProps() {
  return {
    props: {
      data: getNftData(),
    },
  };
}
