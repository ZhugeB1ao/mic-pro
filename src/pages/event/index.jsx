import Head from "next/head";
import EventLayout from "@/components/layout/Event";
import Hero from "@/components/sections/event/Hero";
import Partners from "@/components/sections/event/Partners";
import Statistics from "@/components/sections/event/Statistics";
import EventTypes from "@/components/sections/event/EventTypes";
import Features from "@/components/sections/event/Features";
import Testimonial from "@/components/sections/event/Testimonial";
import Faq from "@/components/sections/event/Faq";
import CallToAction from "@/components/sections/event/CallToAction";
import { getEventData } from "@/services/event";

export default function EventPage({ data }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "MicPro Design Event Conference 2023",
    description:
      "Nền tảng quản lý sự kiện thông minh, bán vé 0% hoa hồng, kết nối livestream trực tuyến và tương tác người tham gia chuyên nghiệp.",
    image: "https://micpro.com/event/images/event.png",
    url: "https://micpro.com/event",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    organizer: {
      "@type": "Organization",
      name: "MicPro",
      url: "https://micpro.com",
    },
  };

  return (
    <>
      <Head>
        <title>MicPro Event - Giải Pháp Tổ Chức & Quản Lý Sự Kiện Toàn Diện</title>
        <meta
          name="description"
          content="Nền tảng quản lý sự kiện thông minh, bán vé 0% hoa hồng, kết nối livestream trực tuyến và tương tác người tham gia chuyên nghiệp."
        />
        <link rel="canonical" href="https://micpro.com/event" />
        <meta
          property="og:title"
          content="MicPro Event - Giải Pháp Tổ Chức & Quản Lý Sự Kiện Toàn Diện"
        />
        <meta
          property="og:description"
          content="Nền tảng quản lý sự kiện thông minh, bán vé 0% hoa hồng, kết nối livestream trực tuyến và tương tác người tham gia chuyên nghiệp."
        />
        <meta
          property="og:image"
          content="https://micpro.com/event/images/event.png"
        />
        <meta property="og:url" content="https://micpro.com/event" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <EventLayout data={data?.footer}>
        <div className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none overflow-hidden h-full">
            <div className="absolute -left-[10%] top-[10%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-[#51B4FA] opacity-[0.65] blur-[120px]" />
            <div className="absolute left-[20%] top-[30%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#854AEB] opacity-[0.55] blur-[120px]" />
            <div className="absolute left-[50%] top-[15%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full bg-[#F8D997] opacity-[0.65] blur-[120px]" />
            <div className="absolute left-[75%] top-[25%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-[#F8A6F0] opacity-[0.65] blur-[120px]" />
          </div>
          <div className="relative z-10">
            <Hero data={data?.hero} />
          </div>
        </div>

        <Partners data={data?.partners} />
        <Statistics data={data?.statistics} />
        <EventTypes data={data?.eventTypes} />
        <Features data={data?.features} />
        <Testimonial data={data?.testimonial} />
        <Faq data={data?.faq} />
        <CallToAction data={data?.cta} />
      </EventLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: getEventData(),
    },
  };
}
