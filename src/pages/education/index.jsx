import { useState, useEffect } from "react";
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

export default function EducationPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/education")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch education data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <EducationLayout>
      {loading ? (
        <div className="flex min-h-[60vh] items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
            <p className="text-sm font-semibold text-slate-500">
              Loading Education content...
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
        </>
      )}
    </EducationLayout>
  );
}
