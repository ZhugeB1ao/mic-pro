import Head from "next/head";
import Container from "@/components/ui/Container";

export default function BlogPost({ slug }) {
  return (
    <>
      <Head>
        <title>{`Blog: ${slug || "Article"} - MicPro`}</title>
        <meta name="description" content={`Read our latest article on ${slug}`} />
      </Head>
      <main className="min-h-screen bg-white py-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-black text-slate-900 capitalize">
              Blog Post: {slug}
            </h1>
            <p className="mt-4 text-slate-500">
              Chi tiết bài viết đang được cập nhật.
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "welcome" } },
      { params: { slug: "nextjs-ssg-guide" } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug || "",
    },
  };
}
