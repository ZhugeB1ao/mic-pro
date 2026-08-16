import Head from "next/head";
import RestaurantLayout from "@/components/layout/Restaurant";
import Hero from "@/components/sections/restaurant/Hero";
import Features from "@/components/sections/restaurant/Features";
import Statistics from "@/components/sections/restaurant/Statistics";
import Menu from "@/components/sections/restaurant/Menu";
import Offers from "@/components/sections/restaurant/Offers";
import Blog from "@/components/sections/restaurant/Blog";
import Testimonials from "@/components/sections/restaurant/Testimonials";
import Newsletter from "@/components/sections/restaurant/Newsletter";
import { getRestaurantData } from "@/services/restaurant";

export default function RestaurantPage({ data }) {
  return (
    <>
      <Head>
        <title>MicPro Restaurant - Ẩm Thực Tươi Ngon & Giao Hàng Tận Nơi</title>
        <meta
          name="description"
          content="Thưởng thức các món ăn ngon hảo hạng, đặt món online nhanh chóng với thực đơn phong phú và dịch vụ giao hàng chu đáo."
        />
        <link rel="canonical" href="https://micpro.com/restaurant" />
        <meta property="og:title" content="MicPro Restaurant - Ẩm Thực Tươi Ngon & Giao Hàng Tận Nơi" />
        <meta
          property="og:description"
          content="Thưởng thức các món ăn ngon hảo hạng, đặt món online nhanh chóng với thực đơn phong phú và dịch vụ giao hàng chu đáo."
        />
        <meta property="og:image" content="https://micpro.com/restaurant/images/restaurant.png" />
        <meta property="og:url" content="https://micpro.com/restaurant" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <RestaurantLayout data={data?.footer}>
        <div className="relative overflow-hidden bg-white pt-12 pb-16 md:pt-18 md:pb-24">
          <div className="absolute inset-0 pointer-events-none overflow-hidden h-full">
            <div className="absolute -left-[10%] top-[15%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-[#51B4FA] opacity-[0.5] blur-[120px]" />
            <div className="absolute left-[20%] top-[35%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#854AEB] opacity-[0.5] blur-[120px]" />
            <div className="absolute left-[50%] top-[18%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full bg-[#F8D997] opacity-[0.5] blur-[120px]" />
            <div className="absolute left-[80%] top-[32%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-[#F8A6F0] opacity-[0.5] blur-[120px]" />
          </div>
          <div className="relative z-10">
            <Hero hero={data?.hero} data={data?.hero} />
          </div>
        </div>
        <Features features={data?.features?.items} data={data?.features} />
        <Statistics statistics={data?.statistics?.items} data={data?.statistics} />
        <Menu popularFoods={data?.menu?.items} data={data?.menu} />
        <Offers offers={data?.offers} data={data?.offers} />
        <Blog blogs={data?.blogs?.items} data={data?.blogs} />
        <Testimonials testimonials={data?.testimonials?.items} data={data?.testimonials} />
        <Newsletter newsletter={data?.newsletter} data={data?.newsletter} />
      </RestaurantLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: getRestaurantData(),
    },
  };
}
