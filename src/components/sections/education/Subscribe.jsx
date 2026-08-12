import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/common/Button";

export default function Subscribe({ data }) {
  const content = data;

  if (!content) return null;

  return (
    <section id="subscribe" className="py-12 md:py-20 bg-white">
      <Container>
        <div className="bg-[linear-gradient(135deg,#5B63F6_0%,#864DE7_100%)] rounded-3xl px-6 py-12 sm:px-12 sm:py-16 md:py-20 text-center text-white shadow-xl shadow-indigo-500/15">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {content.title || "Enter your email to get the latest news"}
            </h2>

            <p className="text-lg sm:text-lg text-white/80 font-normal leading-relaxed max-w-lg mx-auto">
              {content.description ||
                "Stay informed about the latest school news with notifications."}
            </p>
          </div>

          <div className="mt-8 max-w-xs mx-auto">
            <form
              className="flex items-center justify-between bg-white rounded-full p-1.5 sm:p-2 shadow-lg shadow-black/5"
            >
              <input
                type="email"
                placeholder={content.placeholder || "Enter Email Address"}
                required
                className="min-w-0 px-4 sm:px-6 py-2 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 bg-transparent outline-none"
              />
              <Button
                type="submit"
                variant="primary"
                geometry="rounded"
                className="bg-[#1868FB] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all hover:bg-blue-600 hover:scale-105 shadow-md shadow-blue-500/25"
              >
                {content.buttonText || "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
