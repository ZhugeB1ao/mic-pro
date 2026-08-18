import Head from "next/head";
import Link from "next/link";
import Container from "@/components/ui/Container";

const pages = [
  { name: "Event Conference", href: "/event", desc: "The simplest way to host all your in-person and virtual events", badge: "Event" },
  { name: "Dental Clinic", href: "/dental", desc: "Comprehensive and personalized dental care services", badge: "Healthcare" },
  { name: "NFT Marketplace", href: "/nft", desc: "Discover, buy and sell extraordinary digital items", badge: "Trending" },
  { name: "Digital Agency", href: "/agency", desc: "Build your dream web with skilled development team", badge: "Popular" },
  { name: "AI Writer", href: "/ai", desc: "World's best AI writer for easy content creation", badge: "AI" },
  { name: "Education", href: "/education", desc: "Welcome to the world of interactive online knowledge", badge: "Learning" },
  { name: "E-commerce", href: "/ecommerce", desc: "Shop the best styles and trends in one curated place", badge: "Shop" },
  { name: "Basketball Academy", href: "/basketball", desc: "Professional basketball player training and programs", badge: "Sports" },
  { name: "Restaurant & Delivery", href: "/restaurant", desc: "The best way to grow your business & order food", badge: "Food" },
  { name: "Charity & Non-Profit", href: "/charity", desc: "Fundraising and community support through social networks", badge: "Non-profit" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>MicPro - Modern Next.js Multi-Page Landing Pages</title>
        <meta
          name="description"
          content="Collection of high-performance, pixel-perfect, SEO-optimized landing pages built with Next.js and Tailwind CSS."
        />
        <link rel="canonical" href="https://micpro.com/" />
        <meta property="og:title" content="MicPro - Multi-Page Landing Pages" />
        <meta
          property="og:description"
          content="Collection of high-performance, pixel-perfect, SEO-optimized landing pages built with Next.js."
        />
        <meta property="og:url" content="https://micpro.com/" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen bg-slate-50 py-16 sm:py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1868FB]">
              MicPro Landing Pages
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Khám Phá Toàn Bộ <span className="text-[#1868FB]">Landing Pages</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600">
              Tổng hợp 10 trang ngành hàng được tối ưu hóa SEO, tốc độ tải tức thì với Static Site Generation (SSG).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      {item.badge}
                    </span>
                    <span className="text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Khám phá →
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-[#1868FB] transition-colors">
                    {item.name}
                  </h2>
                  <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400">
                  {item.href}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </main>
    </>
  );
}