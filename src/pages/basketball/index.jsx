import Head from "next/head";
import BasketballLayout from "@/components/layout/Basketball";
import Hero from "@/components/sections/basketball/Hero";
import Services from "@/components/sections/basketball/Services";
import Benefits from "@/components/sections/basketball/Benefits";
import Positions from "@/components/sections/basketball/Positions";
import Programs from "@/components/sections/basketball/Programs";
import Statistics from "@/components/sections/basketball/Statistics";
import Testimonials from "@/components/sections/basketball/Testimonials";
import Blog from "@/components/sections/basketball/Blog";
import { getBasketballData } from "@/services/basketball";

export default function BasketballPage({ data }) {
  return (
    <>
      <Head>
        <title>MicPro Basketball - Học Viện Đào Tạo Bóng Rổ Chuyên Nghiệp</title>
        <meta
          name="description"
          content="Chương trình huấn luyện bóng rổ bài bản, phát triển kỹ năng toàn diện cùng đội ngũ huấn luyện viên đạt chuẩn quốc tế."
        />
        <link rel="canonical" href="https://micpro.com/basketball" />
        <meta property="og:title" content="MicPro Basketball - Học Viện Đào Tạo Bóng Rổ Chuyên Nghiệp" />
        <meta
          property="og:description"
          content="Chương trình huấn luyện bóng rổ bài bản, phát triển kỹ năng toàn diện cùng đội ngũ huấn luyện viên đạt chuẩn quốc tế."
        />
        <meta property="og:image" content="https://micpro.com/basketball/images/basketball.png" />
        <meta property="og:url" content="https://micpro.com/basketball" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <BasketballLayout data={data?.footer}>
        <div className="relative overflow-hidden bg-white pt-12 pb-24 md:pt-18 md:pb-96">
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

        <div className="bg-transparent absolute z-20 top-3/4 left-0 w-full">
          <Services services={data?.services?.items} data={data?.services} />
        </div>

        <Benefits benefits={data?.benefits} data={data?.benefits} />
        <Positions
          positions={data?.positions?.items}
          data={data?.positions}
        />
        <Programs programs={data?.programs?.items} data={data?.programs} />
        <Statistics
          statistics={data?.statistics?.items}
          data={data?.statistics}
        />
        <Testimonials
          testimonials={data?.testimonials}
          data={data?.testimonials}
        />
        <Blog blogs={data?.blogs?.items} data={data?.blogs} />
      </BasketballLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: getBasketballData(),
    },
  };
}
