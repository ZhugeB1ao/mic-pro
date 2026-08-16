import Head from "next/head";
import AgencyLayout from "@/components/layout/Agency";
import { getAgencyBlogs, getAgencyBlogPostById, getAgencyData } from "@/services/agency";

export default function AgencyBlogPost({ post, footer }) {
  if (!post) {
    return (
      <AgencyLayout data={footer}>
        <main className="bg-white pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <p className="text-slate-500 text-lg font-semibold">Post not found</p>
          </div>
        </main>
      </AgencyLayout>
    );
  }

  return (
    <>
      <Head>
        <title>{`${post.title} - MicPro Agency Blog`}</title>
        <meta name="description" content={post.description || post.title} />
        <link rel="canonical" href={`https://micpro.com/agency/blog/${post.id}`} />
        <meta property="og:title" content={`${post.title} - MicPro Agency`} />
        <meta property="og:description" content={post.description || post.title} />
        <meta property="og:type" content="article" />
      </Head>

      <AgencyLayout data={footer}>
        <main className="bg-white pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="mx-auto max-w-3xl px-4">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-amber-300 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-900">
                {post.category}
              </span>
              <span className="text-[11px] font-medium text-slate-400">
                {post.publishedAt}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              {post.title}
            </h1>

            {post.description && (
              <p className="mt-4 text-base leading-8 text-slate-600">
                {post.description}
              </p>
            )}
          </div>
        </main>
      </AgencyLayout>
    </>
  );
}

export async function getStaticPaths() {
  const blogs = getAgencyBlogs();
  const paths = blogs.map((item) => ({
    params: { id: String(item.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getAgencyBlogPostById(params.id);
  const agencyData = getAgencyData();

  return {
    props: {
      post,
      footer: agencyData?.footer || null,
    },
  };
}
