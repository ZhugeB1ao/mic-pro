import Head from "next/head";
import DentalLayout from "@/components/layout/Dental";
import Hero from "@/components/sections/dental/Hero";
import Features from "@/components/sections/dental/Features";
import AboutDecare from "@/components/sections/dental/AboutDecare";
import TopPriority from "@/components/sections/dental/TopPriority";
import HappySmile from "@/components/sections/dental/HappySmile";
import Services from "@/components/sections/dental/Services";
import Specialists from "@/components/sections/dental/Specialists";
import Testimonials from "@/components/sections/dental/Testimonials";
import CallToAction from "@/components/sections/dental/CallToAction";
import { getDentalData } from "@/services/dental";

export default function DentalPage({ data }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "MicPro Dental Care Clinic",
    image: "https://micpro.com/dental/images/Dental.png",
    url: "https://micpro.com/dental",
    telephone: "+11234567890",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Dental Clinic St",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>MicPro Dental - Dịch Vụ Nha Khoa & Chăm Sóc Nụ Cười Chuyên Nghiệp</title>
        <meta
          name="description"
          content="Đội ngũ bác sĩ nha khoa giàu kinh nghiệm mang đến dịch vụ chăm sóc răng miệng toàn diện, tận tâm và hiện đại cho nụ cười rạng rỡ của bạn."
        />
        <link rel="canonical" href="https://micpro.com/dental" />
        <meta
          property="og:title"
          content="MicPro Dental - Dịch Vụ Nha Khoa & Chăm Sóc Nụ Cười Chuyên Nghiệp"
        />
        <meta
          property="og:description"
          content="Đội ngũ bác sĩ nha khoa giàu kinh nghiệm mang đến dịch vụ chăm sóc răng miệng toàn diện, tận tâm và hiện đại cho nụ cười rạng rỡ của bạn."
        />
        <meta
          property="og:image"
          content="https://micpro.com/dental/images/Dental.png"
        />
        <meta property="og:url" content="https://micpro.com/dental" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <DentalLayout data={data?.footer}>
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

        <Features data={data?.features} />
        <AboutDecare data={data?.aboutDecare} />
        <TopPriority data={data?.topPriority} />
        <HappySmile data={data?.happySmile} />
        <Services data={data?.services} />
        <Specialists data={data?.specialists} />
        <Testimonials data={data?.testimonials} />
        <CallToAction data={data?.cta} />
      </DentalLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: getDentalData(),
    },
  };
}
