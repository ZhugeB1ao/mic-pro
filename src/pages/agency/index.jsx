import { useState, useEffect } from "react";
import AgencyLayout from "@/components/layout/Agency";
import Hero from "@/components/sections/agency/Hero";
import Services from "@/components/sections/agency/Services";
import Portfolio from "@/components/sections/agency/Portfolio";
import Expertise from "@/components/sections/agency/Expertise";
import Pricing from "@/components/sections/agency/Pricing";
import Testimonials from "@/components/sections/agency/Testimonials";
import Team from "@/components/sections/agency/Team";
import Blog from "@/components/sections/agency/Blog";
import CallToAction from "@/components/sections/agency/CallToAction";

export default function Agency() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/agency")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch agency data");
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
    <AgencyLayout>
      {loading ? (
        <div className="flex min-h-[50vh] items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
            <p className="text-sm font-semibold text-slate-500">
              Loading agency content...
            </p>
          </div>
        </div>
      ) : error ? (
        <div className="flex min-h-[50vh] items-center justify-center bg-white">
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
            <Services
              services={data?.services?.items}
              partners={data?.services?.partners}
              data={data?.services}
            />
          </div>

          <Portfolio portfolio={data?.portfolio?.items} data={data?.portfolio} />
          <Expertise expertise={data?.expertise?.items} data={data?.expertise} />
          <Pricing pricing={data?.pricing?.items} data={data?.pricing} />
          <Testimonials testimonials={data?.testimonials?.items} data={data?.testimonials} />
          <Team team={data?.team?.items} data={data?.team} />
          <Blog blogs={data?.blogs?.items} data={data?.blogs} />
          <CallToAction cta={data?.cta} data={data?.cta} />
        </>
      )}
    </AgencyLayout>
  );
}
