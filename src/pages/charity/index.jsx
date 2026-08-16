import Head from "next/head";
import CharityLayout from "@/components/layout/Charity";
import Hero from "@/components/sections/charity/Hero";
import Partners from "@/components/sections/charity/Partners";
import AboutMission from "@/components/sections/charity/AboutMission";
import Donation from "@/components/sections/charity/Donation";
import Donors from "@/components/sections/charity/Donors";
import Statistics from "@/components/sections/charity/Statistics";
import Testimonials from "@/components/sections/charity/Testimonials";
import News from "@/components/sections/charity/News";
import VolunteerCta from "@/components/sections/charity/VolunteerCta";
import { getCharityData } from "@/services/charity";

export default function CharityPage({ data }) {
  return (
    <>
      <Head>
        <title>MicPro Charity - Chung Tay Gây Quỹ & Lan Tỏa Yêu Thương</title>
        <meta
          name="description"
          content="Tổ chức từ thiện kết nối cộng đồng, quyên góp minh bạch và thực hiện các chiến dịch hỗ trợ hoàn cảnh khó khăn trên toàn cầu."
        />
        <link rel="canonical" href="https://micpro.com/charity" />
        <meta property="og:title" content="MicPro Charity - Chung Tay Gây Quỹ & Lan Tỏa Yêu Thương" />
        <meta
          property="og:description"
          content="Tổ chức từ thiện kết nối cộng đồng, quyên góp minh bạch và thực hiện các chiến dịch hỗ trợ hoàn cảnh khó khăn trên toàn cầu."
        />
        <meta property="og:image" content="https://micpro.com/charity/images/charity.png" />
        <meta property="og:url" content="https://micpro.com/charity" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <CharityLayout data={data?.footer}>
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

        <Partners
          services={data?.partners?.services}
          partners={data?.partners?.partners}
          data={data?.partners}
        />
        <AboutMission support={data?.aboutMission} data={data?.aboutMission} />
        <Donation video={data?.donation} data={data?.donation} />
        <Donors donors={data?.donors?.items} data={data?.donors} />
        <Statistics impact={data?.statistics} data={data?.statistics} />
        <Testimonials testimonials={data?.testimonials?.items} data={data?.testimonials} />
        <News news={data?.news?.items} data={data?.news} />
        <VolunteerCta data={data?.volunteerCta} />
      </CharityLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: getCharityData(),
    },
  };
}
