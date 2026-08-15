import { useState, useEffect } from "react";
import Head from "next/head";
import AiLayout from "@/components/layout/Ai";
import Hero from "@/components/sections/ai/Hero";
import Partners from "@/components/sections/ai/Partners";
import Features from "@/components/sections/ai/Features";
import HowItWorks from "@/components/sections/ai/HowItWorks";
import Testimonials from "@/components/sections/ai/Testimonials";
import Faq from "@/components/sections/ai/Faq";

export default function AiPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/ai")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch AI Writer data");
        }
        return res.json();
      })
      .then((resData) => {
        setData(resData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>{"MicPro - World's Best AI Writer for Easy Content Creation"}</title>
        <meta
          name="description"
          content="Create high-quality, well-organized and SEO-optimized content 10X faster with MicPro AI Writer."
        />
      </Head>

      <AiLayout data={data?.footer}>
        {loading ? (
          <div className="flex min-h-[60vh] items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
              <p className="text-sm font-semibold text-slate-500">
                Loading AI Writer content...
              </p>
            </div>
          </div>
        ) : error ? (
          <div className="flex min-h-[60vh] items-center justify-center bg-white">
            <div className="text-center">
              <h3 className="text-lg font-bold text-red-600">
                Error Loading Content
              </h3>
              <p className="mt-2 text-sm text-slate-500">{error}</p>
            </div>
          </div>
        ) : (
          <>
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
          </>
        )}
      </AiLayout>
    </>
  );
}
