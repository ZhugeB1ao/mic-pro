import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Donors({ donors = [], data }) {
  const items = data?.items || donors || [];
  if (!items.length) return null;

  return (
    <section id="donors" className="bg-[#F5F8FC] -mt-80 pb-20 pt-96">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-center mb-12 self-center text-3xl font-bold tracking-tight text-slate-800 md:text-5xl leading-tight">
            {data?.title || "Top"}{" "}
            <span className="text-blue-600 font-extrabold">{data?.highlight || "Donors"}</span>{" "}
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((donor) => (
            <div
              key={donor.id}
              className={`flex items-center justify-between rounded-md border border-slate-200 px-4 py-4 shadow-sm transition-shadow duration-200 hover:shadow-md ${
                donor.id === 2 ? "bg-white" : "bg-none"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    src={donor.avatar}
                    alt={donor.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {donor.name}
                  </p>
                  <p className="text-xs mt-1 font-medium text-slate-500">
                    {donor.amount}
                  </p>
                </div>
              </div>

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                {donor.id}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
