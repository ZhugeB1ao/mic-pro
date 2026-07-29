import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AgencyLayout from "@/components/layout/Agency";

export default function AgencyBlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/agency")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!router.isReady || !data) {
    return (
      <AgencyLayout>
        <div className="flex min-h-[50vh] items-center justify-center bg-white">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        </div>
      </AgencyLayout>
    );
  }

  const post = (data.blogs ?? []).find((p) => String(p.id) === String(id));

  return (
    <AgencyLayout>
      <main className="bg-white pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-3xl px-4">
          {!post ? (
            <p className="text-center text-slate-500">Post not found</p>
          ) : (
            <>
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
            </>
          )}
        </div>
      </main>
    </AgencyLayout>
  );
}
