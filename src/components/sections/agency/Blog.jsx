import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Blog({ blogs = [], data }) {
  const items = data?.items || blogs || [];
  if (!items.length) return null;

  return (
    <section id="blog" className="bg-white py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {data?.title || "OUR Design"} <span className="text-blue-600">{data?.highlight || "BLOG"}</span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {items.map((post) => (
            <Link
              key={post.id}
              href={post.href || `/agency/blog/${post.id}`}
              className="group overflow-hidden rounded-md bg-white transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="px-1 pt-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-amber-300 my-3 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-900">
                    {post.category}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {post.publishedAt}
                  </span>
                </div>
                <h3 className="mt-3 w-[80%] text-[15px] font-medium leading-6 text-slate-900">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
