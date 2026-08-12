import Button from "@/components/common/Button";
import Container from "@/components/ui/Container";
import { Check } from "lucide-react";

export default function Pricing({ pricing = [], data }) {
  const items = data?.items || pricing || [];
  if (!items || items.length === 0) return null;

  return (
    <section id="pricing" className="bg-[#F2F3F8] py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
            {data?.title || "Find the plan that fits your"}{" "}
            <span className="text-blue-600">{data?.highlight || "budget"}</span>
          </h2>
          <div className="mt-12 flex justify-center gap-4">
            <Button>Monthly</Button>
            <Button variant="light">Yearly</Button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-10">
          {items.map((plan) => {
            const isPro = plan.price !== 0;
            return (
              <div
                key={plan.id}
                className={`flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm ${
                  isPro ? "md:col-span-6" : "md:col-span-4"
                }`}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-800">
                      {plan.name}
                    </h3>
                    {plan.badge ? (
                      <span className="rounded-full bg-blue-50 px-6 py-3 text-xs font-semibold text-blue-600">
                        {plan.badge}
                      </span>
                    ) : (
                      <span className="rounded-full bg-[#F2F3F8] px-6 py-3 text-xs font-semibold">
                        Free
                      </span>
                    )}
                  </div>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-slate-900">
                      ${plan.price}
                    </span>
                    <span className="text-sm text-slate-600">{plan.period}</span>
                  </div>
                </div>

                <div className="bg-[#EAEDF9] flex flex-1 flex-col px-8 py-8">
                  <ul
                    className={`min-h-[168px] space-y-3 text-sm text-slate-600 ${
                      isPro ? "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3" : ""
                    }`}
                  >
                    {plan.features?.map((f, idx) => (
                      <li key={idx} className={`flex items-start gap-3 ${isPro ? "mt-3" : ""}`}>
                        <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-400 to-purple-500 text-white shadow-md shadow-purple-200">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8 w-1/3 md:w-1/4">
                    {isPro ? (
                      <Button
                        variant="primary"
                        className="w-full text-white hover:opacity-90 bg-[linear-gradient(90deg,#5F45D9_-11.43%,#F961D8_47.91%,#FE9E66_92.14%)]"
                      >
                        {plan.buttonText}
                      </Button>
                    ) : (
                      <Button
                        variant="gradientOutline"
                        className="w-full"
                      >
                        {plan.buttonText}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
