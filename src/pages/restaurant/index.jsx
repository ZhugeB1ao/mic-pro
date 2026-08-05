import { useState, useEffect } from "react";
import RestaurantLayout from "@/components/layout/Restaurant";
import Hero from "@/components/sections/restaurant/Hero";
import Features from "@/components/sections/restaurant/Features";
import Statistics from "@/components/sections/restaurant/Statistics";
import Menu from "@/components/sections/restaurant/Menu";
import Offers from "@/components/sections/restaurant/Offers";
import Blog from "@/components/sections/restaurant/Blog";
import Testimonials from "@/components/sections/restaurant/Testimonials";
import Newsletter from "@/components/sections/restaurant/Newsletter";

export default function RestaurantPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/restaurant")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch restaurant data");
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
    <RestaurantLayout>
      {loading ? (
        <div className="flex min-h-[60vh] items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
            <p className="text-sm font-semibold text-slate-500">
              Loading restaurant content...
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
          <Hero hero={data?.hero} />
          <Features features={data?.features} />
          <Statistics statistics={data?.statistics} />
          <Menu popularFoods={data?.popularFoods} />
          <Offers offers={data?.offers} />
          <Blog blogs={data?.blogs} />
          <Testimonials testimonials={data?.testimonials} />
          <Newsletter newsletter={data?.newsletter} />
        </>
      )}
    </RestaurantLayout>
  );
}
