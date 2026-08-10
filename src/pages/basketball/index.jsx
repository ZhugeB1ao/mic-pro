import { useState, useEffect } from "react";
import BasketballLayout from "@/components/layout/Basketball";
import Hero from "@/components/sections/basketball/Hero";
import Services from "@/components/sections/basketball/Services";
import Benefits from "@/components/sections/basketball/Benefits";
import Positions from "@/components/sections/basketball/Positions";
import Programs from "@/components/sections/basketball/Programs";
import Statistics from "@/components/sections/basketball/Statistics";
import Testimonials from "@/components/sections/basketball/Testimonials";
import Blog from "@/components/sections/basketball/Blog";

export default function BasketballPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/basketball")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch basketball data");
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
    <BasketballLayout>
      {loading ? (
        <div className="flex min-h-[60vh] items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
            <p className="text-sm font-semibold text-slate-500">
              Loading Basketball Academy content...
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
        </>
      )}
    </BasketballLayout>
  );
}
