import { useState, useEffect } from "react";
import EcommerceLayout from "@/components/layout/Ecommerce";
import Hero from "@/components/sections/ecommerce/Hero";
import Products from "@/components/sections/ecommerce/Products";
import SimilarItems from "@/components/sections/ecommerce/SimilarItems";
import SellEverywhere from "@/components/sections/ecommerce/SellEverywhere";
import GrowFaster from "@/components/sections/ecommerce/GrowFaster";
import Statistics from "@/components/sections/ecommerce/Statistics";
import Testimonials from "@/components/sections/ecommerce/Testimonials";
import Services from "@/components/sections/ecommerce/Services";
import CallToAction from "@/components/sections/ecommerce/CallToAction";

export default function EcommercePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/ecommerce")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch ecommerce data");
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
    <EcommerceLayout>
      {loading ? (
        <div className="flex min-h-[60vh] items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
            <p className="text-sm font-semibold text-slate-500">
              Loading Ecommerce content...
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
          <div className="relative overflow-hidden bg-white pt-8 pb-12">
            <div className="absolute inset-0 pointer-events-none overflow-hidden h-full">
              <div className="absolute -left-[10%] top-[10%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-[#51B4FA] opacity-[0.4] blur-[120px]" />
              <div className="absolute left-[20%] top-[25%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#854AEB] opacity-[0.35] blur-[120px]" />
              <div className="absolute left-[55%] top-[15%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full bg-[#F8D997] opacity-[0.35] blur-[120px]" />
              <div className="absolute left-[75%] top-[25%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-[#F8A6F0] opacity-[0.4] blur-[120px]" />
            </div>
            <div className="relative z-10">
              <Hero hero={data?.hero} data={data?.hero} />
            </div>
          </div>

          <Products products={data?.products?.items} data={data?.products} />
          <SimilarItems
            similarItems={data?.similarItems}
            data={data?.similarItems}
          />
          <SellEverywhere
            sellEverywhere={data?.sellEverywhere}
            data={data?.sellEverywhere}
          />
          <GrowFaster growFaster={data?.growFaster} data={data?.growFaster} />
          <Statistics
            statistics={data?.statistics?.items}
            data={data?.statistics}
          />
          <Testimonials
            testimonials={data?.testimonials}
            data={data?.testimonials}
          />
          <Services services={data?.services?.items} data={data?.services} />
          <CallToAction cta={data?.cta} data={data?.cta} />
        </>
      )}
    </EcommerceLayout>
  );
}
