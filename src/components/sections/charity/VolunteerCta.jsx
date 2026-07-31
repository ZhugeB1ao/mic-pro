import Image from "next/image";
import Button from "@/components/common/Button";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

export default function VolunteerCta() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] bg-[linear-gradient(243.41deg,#9A40E4_7.82%,#5C70F4_74.31%)] px-6 pt-10 pb-0 text-white shadow-[0_30px_100px_rgba(15,23,42,0.15)] md:grid-cols-2 md:p-10 lg:p-14">
          <div className="order-2 relative min-h-[260px] w-full sm:min-h-[320px] md:order-1 md:min-h-[380px]">
            <Image
              src="/charity/images/cta/volunteer.png"
              alt="Volunteers working together"
              fill
              className="object-contain object-bottom md:object-left-bottom"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="order-1 flex flex-col items-center text-center md:order-2 md:items-start md:text-left">
            <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.15]">
              Become a Volunteer of our charity
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-[17px]">
              We believe your project is only as good as the team that&apos;s
              working on it. When we work with you and your team, we know there
              are no shortcuts to success. Your research is done; now lets get
              down to business!
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              <Button
                variant="light"
                className="group flex items-center gap-4 rounded-xl bg-white pl-6 pr-2 py-2 text-base font-bold text-slate-900 transition-all hover:bg-slate-50"
              >
                Join the team
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A56DB] text-white transition-transform group-hover:translate-x-1">
                  <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
