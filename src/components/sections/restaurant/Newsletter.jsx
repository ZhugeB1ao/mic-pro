import { useState } from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function Newsletter({ newsletter, data }) {
  const content = newsletter || data || {};
  if (!content.badge && !content.title && !content.image) return null;

  return (
    <section id="newsletter" className="py-20 bg-white">
      <Container>
        <div
          className="relative overflow-hidden rounded-2xl text-white p-8 sm:p-12 lg:p-16 shadow-2xl"
          style={{
            background:
              "linear-gradient(243.41deg, #9A40E4 7.82%, #5C70F4 74.31%)",
          }}
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 flex justify-center lg:justify-start">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 drop-shadow-2xl">
                {content.image && (
                  <Image
                    src={content.image}
                    alt={content.title || "Newsletter promotion"}
                    fill
                    sizes="(max-width: 640px) 288px, 384px"
                    className="object-contain transform hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
            </div>

            <div className="lg:col-span-6 text-center lg:text-left">
              {content.badge && (
                <p className="text-sm sm:text-base font-medium text-white/90 tracking-wide">
                  {content.badge}
                </p>
              )}

              {content.title && (
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-8 mt-4">
                  {content.title}
                </h2>
              )}

              {content.description && (
                <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto lg:mx-0 leading-relaxed font-normal">
                  {content.description}
                </p>
              )}

              <form
                className="flex flex-col sm:flex-row items-center gap-2 bg-white p-2 rounded-lg max-w-lg mx-auto lg:mx-0 shadow-xl mt-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex items-center gap-3 px-3 py-2.5 w-full text-slate-700">
                  <Mail className="w-5 h-5 text-slate-400 shrink-0" />
                  <input
                    type="email"
                    placeholder="Your email address"
                    required
                    className="w-full text-sm bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 bg-[#1D6BF3] hover:bg-blue-700 text-white font-bold text-sm px-8 py-3.5 rounded-md transition-all duration-200 shadow-md active:scale-95"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
