import Container from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";

export default function Subscribe({ data }) {
  const content = data;
  if (!content) return null;

  return (
    <section id="subscribe" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {content.titlePrefix || "Subscribe to join our"}{" "}
            <br className="hidden sm:inline" />
            <span className="text-[#1868FB]">{content.titleHighlight || "community"}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-normal leading-relaxed">
            {content.description}
          </p>

          <div className="pt-4 max-w-xl mx-auto">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative flex items-center rounded-full border border-slate-200 bg-white p-1.5 sm:p-2 shadow-lg shadow-slate-100"
            >
              <input
                type="email"
                placeholder={content.placeholder || "Enter your email"}
                className="w-full rounded-full bg-transparent px-5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#1868FB] text-white shadow-md shadow-blue-500/30 hover:bg-blue-600 transition-all hover:scale-105"
              >
                <ArrowUpRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
