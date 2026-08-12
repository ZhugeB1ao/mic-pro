import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/common/Button";
import { ArrowRight } from "lucide-react";

export default function News({ news = [], data }) {
  const items = data?.items || news || [];
  if (!items.length) return null;

  return (
    <section id="news" className="bg-white py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-left md:text-center mb-12 self-center text-3xl font-bold tracking-tight text-slate-800 md:text-5xl leading-tight">
            {data?.title || "Latest News &"}{" "}
            <span className="text-blue-600 font-extrabold">{data?.highlight || "Campaigns"}</span>{" "}
          </h2>
        </div>

        <div className="mt-12 grid gap-24 md:grid-cols-3">
          {items.map((post) => (
            <Link key={post.id} href={post.href || "#"} className="overflow-hidden">
              <div className="pb-6">
                <span
                  className={`inline-flex rounded-md ${post.bgColor || "bg-blue-100"} ${post.color || "text-blue-600"} px-4 py-2 text-base font-normal tracking-[0.16em]`}
                >
                  {post.category}
                </span>
                <h3 className="mt-4 text-2xl font-semibold leading-7 text-slate-900">
                  {post.title}
                </h3>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="primary"
            geometry="square"
            className="mt-12 flex items-center py-6 px-8 !rounded-xl "
          >
            VIEW ALL ARTICLES
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
