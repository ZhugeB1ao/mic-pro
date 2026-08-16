import Head from "next/head";
import AiLayout from "@/components/layout/Ai";
import Hero from "@/components/sections/ai/Hero";
import Partners from "@/components/sections/ai/Partners";
import Features from "@/components/sections/ai/Features";
import HowItWorks from "@/components/sections/ai/HowItWorks";
import Testimonials from "@/components/sections/ai/Testimonials";
import Faq from "@/components/sections/ai/Faq";
import { getAiData } from "@/services/ai";

export default function AiPage({ data }) {
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
        <title>MicPro AI - Tạo Nội Dung & Viết Bài Chuẩn SEO Bằng Trí Tuệ Nhân Tạo</title>
        <meta
          name="description"
          content="Sáng tạo nội dung chất lượng cao, chuẩn SEO và tự động hóa bài viết nhanh hơn gấp 10 lần với trợ lý AI MicPro Writer."
        />
        <link rel="canonical" href="https://micpro.com/ai" />
        <meta property="og:title" content="MicPro AI - Trợ Lý Viết Bài & Sáng Tạo Nội Dung AI Thông Minh" />
        <meta
          property="og:description"
          content="Sáng tạo nội dung chất lượng cao, chuẩn SEO và tự động hóa bài viết nhanh hơn gấp 10 lần với trợ lý AI MicPro Writer."
        />
        <meta property="og:image" content="https://micpro.com/ai/images/ai.png" />
        <meta property="og:url" content="https://micpro.com/ai" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <AiLayout data={data?.footer}>
        <div className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none overflow-hidden h-full">
            <div className="absolute -left-[10%] top-[8%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-[#51B4FA] opacity-[0.25] blur-[130px]" />
            <div className="absolute left-[20%] top-[25%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#854AEB] opacity-[0.2] blur-[130px]" />
            <div className="absolute left-[55%] top-[12%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full bg-[#F8D997] opacity-[0.25] blur-[130px]" />
            <div className="absolute left-[80%] top-[20%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-[#F8A6F0] opacity-[0.25] blur-[130px]" />
          </div>
          <div className="relative z-10">
            <Hero data={data?.hero} />
          </div>
        </div>

        <Partners data={data?.partners} />
        <Features data={data?.features} />
        <HowItWorks data={data?.howItWorks} />
        <Testimonials data={data?.testimonials} />
        <Faq data={data?.faq} />
      </AiLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: getAiData(),
    },
  };
}
