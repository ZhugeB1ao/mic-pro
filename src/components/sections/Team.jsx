import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Team({ team = [] }) {
  if (!team.length) return null;

  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Our Creative <span className="text-blue-600">Team</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Flowgiri is a creative and modern theme for startups, freelancers
            and creatives.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-24">
          {team.map((member, index) => {
            const isFeatured = index === 4;

            return (
              <article
                key={member.id}
                className={`relative overflow-hidden rounded-full shadow-sm ${isFeatured ? "aspect-[4/5] bg-[#1663F9] text-white" : "aspect-[4/5] bg-[#EEF2FF]"}`}
              >
                {isFeatured ? (
                  <>
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 33vw, 16vw"
                    />
                    <div className="absolute inset-0 bg-[rgba(22,99,249,1)] opacity-[80%]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                      <p className="mt-3 text-2xl uppercase font-bold leading-tight text-white">
                        {member.name}
                      </p>
                      <p className="text-sm mt-3 font-semibold uppercase tracking-[0.22em] text-white/75">
                        {member.role}
                      </p>
                      <ul className="mt-6 flex items-center gap-4">
                        <li className="rounded-full border border-white/40 p-2 transition-colors duration-300 hover:bg-white/10">
                          <FaFacebookF className="text-sm text-white duration-300" />
                        </li>
                        <li className="rounded-full border border-white/40 p-2 transition-colors duration-300 hover:bg-white/10">
                          <FaTwitter className="text-sm text-white duration-300" />
                        </li>
                        <li className="rounded-full border border-white/40 p-2 transition-colors duration-300 hover:bg-white/10">
                          <FaLinkedinIn className="text-sm text-white duration-300" />
                        </li>
                        <li className="rounded-full border border-white/40 p-2 transition-colors duration-300 hover:bg-white/10">
                          <FaInstagram className="text-sm text-white duration-300" />
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover object-top w-40"
                      sizes="(max-width: 1024px) 33vw, 16vw"
                    />
                  </>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
