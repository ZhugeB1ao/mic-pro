import Head from "next/head";
import EcommerceLayout from "@/components/layout/Ecommerce";
import Hero from "@/components/sections/ecommerce/Hero";
import Products from "@/components/sections/ecommerce/Products";
import SimilarItems from "@/components/sections/ecommerce/SimilarItems";
import SellEverywhere from "@/components/sections/ecommerce/SellEverywhere";
import GrowFaster from "@/components/sections/ecommerce/GrowFaster";
import Statistics from "@/components/sections/ecommerce/Statistics";
import Testimonials from "@/components/sections/ecommerce/Testimonials";
import Services from "@/components/sections/ecommerce/Services";
import CallToAction from "@/components/sections/ecommerce/CallToAction";
import { getEcommerceData } from "@/services/ecommerce";

export default function EcommercePage({ data }) {
  return (
    <>
      <Head>
        <title>MicPro Fashion - Mua Sắm Thời Trang Trực Tuyến Xu Hướng Mới</title>
        <meta
          name="description"
          content="Khám phá các bộ sưu tập thời trang thời thượng, phong cách đa dạng với giá ưu đãi và trải nghiệm mua sắm tiện lợi."
        />
        <link rel="canonical" href="https://micpro.com/ecommerce" />
        <meta property="og:title" content="MicPro Fashion - Mua Sắm Thời Trang Trực Tuyến Xu Hướng Mới" />
        <meta
          property="og:description"
          content="Khám phá các bộ sưu tập thời trang thời thượng, phong cách đa dạng với giá ưu đãi và trải nghiệm mua sắm tiện lợi."
        />
        <meta property="og:image" content="https://micpro.com/ecommerce/images/ecommerce.png" />
        <meta property="og:url" content="https://micpro.com/ecommerce" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <EcommerceLayout data={data?.footer}>
        <div className="relative overflow-hidden bg-white pt-8 pb-12">
          <div className="absolute inset-0 pointer-events-none overflow-hidden h-full">
            <div className="absolute -left-[10%] top-[10%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-[#51B4FA] opacity-[0.4] blur-[120px]" />
            <div className="absolute left-[20%] top-[25%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#854AEB] opacity-[0.35] blur-[120px]" />
            <div className="absolute left-[55%] top-[15%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full bg-[#F8D997] opacity-[0.35] blur-[120px]" />
            <div className="absolute left-[75%] top-[25%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-[#F8A6F0] opacity-[0.4] blur-[120px]" />
          </div>
          <div className="relative z-10">
            <Hero hero={data?.hero} data={data?.hero} />
          </div>
        </div>

        <Products products={data?.products?.items} data={data?.products} />
        <SimilarItems
          similarItems={data?.similarItems}
          data={data?.similarItems}
        />
        <SellEverywhere
          sellEverywhere={data?.sellEverywhere}
          data={data?.sellEverywhere}
        />
        <GrowFaster growFaster={data?.growFaster} data={data?.growFaster} />
        <Statistics
          statistics={data?.statistics?.items}
          data={data?.statistics}
        />
        <Testimonials
          testimonials={data?.testimonials}
          data={data?.testimonials}
        />
        <Services services={data?.services?.items} data={data?.services} />
        <CallToAction cta={data?.cta} data={data?.cta} />
      </EcommerceLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: getEcommerceData(),
    },
  };
}
