import Button from "@/components/common/Button";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

export default function CallToAction({ cta, data }) {
  const content = cta || data;

  return (
    <section className="bg-white py-10 md:py-16">
      <Container>
        <div className="overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,#6970FF_0%,#7A58F0_48%,#C05CF2_100%)] px-6 py-12 text-center text-white md:px-16 md:py-16">
          <h2 className="mx-auto max-w-4xl text-2xl font-semibold leading-tight sm:text-3xl md:text-[2.6rem] md:leading-[1.15]">
            <>{content.titlePrefix} </>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
            {content?.description ||
              "We believe your project is only as good as the team that's working on it. When we work with you and your team, we know there are no shortcuts to success. Your research is done; now lets get down to business!"}
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              variant="light"
              geometry="square"
              href={content?.buttonHref || "#contact"}
              className=" bg-white px-3 py-3.5 text-sm font-bold text-blue-600 shadow-lg shadow-black/10 hover:bg-slate-50"
            >
              {content?.buttonText || "Join the team"}
              <div className="rounded-full bg-blue-600 p-2 ml-4 text-white">
                <ArrowRight size={18} aria-hidden="true" />
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
