import Head from "next/head";
import EducationLayout from "@/components/layout/Education";
import Hero from "@/components/sections/education/Hero";
import Courses from "@/components/sections/education/Courses";
import Partners from "@/components/sections/education/Partners";
import Features from "@/components/sections/education/Features";
import About from "@/components/sections/education/About";
import Statistics from "@/components/sections/education/Statistics";
import Testimonials from "@/components/sections/education/Testimonials";
import Blog from "@/components/sections/education/Blog";
import Subscribe from "@/components/sections/education/Subscribe";
import { getEducationData } from "@/services/education";

export default function EducationPage({ data }) {
  return (
    <>
      <Head>
        <title>MicPro Education - Nền Tảng Học Trực Tuyến & Khóa Học Chất Lượng Cao</title>
        <meta
          name="description"
          content="Khám phá các khóa học trực tuyến đa dạng cùng đội ngũ giảng viên giàu kinh nghiệm, lộ trình học tập tối ưu và chứng chỉ uy tín."
        />
        <link rel="canonical" href="https://micpro.com/education" />
        <meta property="og:title" content="MicPro Education - Nền Tảng Học Trực Tuyến & Khóa Học Chất Lượng Cao" />
        <meta
          property="og:description"
          content="Khám phá các khóa học trực tuyến đa dạng cùng đội ngũ giảng viên giàu kinh nghiệm, lộ trình học tập tối ưu và chứng chỉ uy tín."
        />
        <meta property="og:image" content="https://micpro.com/education/images/education.png" />
        <meta property="og:url" content="https://micpro.com/education" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <EducationLayout data={data?.footer}>
        <div className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none overflow-hidden h-full">
            <div className="absolute -left-[10%] top-[10%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-[#51B4FA] opacity-[0.35] blur-[120px]" />
            <div className="absolute left-[20%] top-[30%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#854AEB] opacity-[0.25] blur-[120px]" />
            <div className="absolute left-[50%] top-[15%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full bg-[#F8D997] opacity-[0.35] blur-[120px]" />
            <div className="absolute left-[75%] top-[25%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-[#F8A6F0] opacity-[0.35] blur-[120px]" />
          </div>
          <div className="relative z-10">
            <Hero data={data?.hero} />
          </div>
        </div>

        <Courses data={data?.courses} />
        <Partners data={data?.partners} />
        <Features data={data?.features} />
        <About data={data?.about} />
        <Statistics data={data?.statistics} />
        <Testimonials data={data?.testimonials} />
        <Blog data={data?.blogs} />
        <Subscribe data={data?.subscribe} />
      </EducationLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: getEducationData(),
    },
  };
}
