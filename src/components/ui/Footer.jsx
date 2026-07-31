import Image from "next/image";
import { FaFacebookF, FaGoogle, FaTwitter, FaDribbble } from "react-icons/fa";
import Container from "./Container";
import logo from "@/assets/logos/logo.svg";

function FooterLinks({ title, links }) {
  if (!links?.length) return null;

  return (
    <section className="space-y-7">
      {title && (
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-900">
          {title}
        </h2>
      )}
      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item.link ?? item.title}>
            <a
              className="text-xs text-slate-600 transition-colors hover:text-blue-600"
              href={item.link}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FooterColumn({ column }) {
  if (!column) return null;

  if (column.content) {
    return (
      <section className="space-y-5">
        {column.title && (
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-900">
            {column.title}
          </h2>
        )}
        {column.content}
      </section>
    );
  }

  if (column.links?.length) {
    return <FooterLinks title={column.title} links={column.links} />;
  }

  return null;
}

function FooterBottom({ bottom }) {
  if (!bottom) return null;

  if (bottom.type === "icons" && Array.isArray(bottom.items)) {
    return (
      <div className="flex flex-wrap items-center gap-3 text-slate-500">
        {bottom.items.map((item) => (
          <a
            key={item.key ?? item.href ?? item.label}
            href={item.href}
            aria-label={item.label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition-colors hover:border-blue-600 hover:text-blue-600"
          >
            {item.icon ?? item.label?.[0] ?? "•"}
          </a>
        ))}
      </div>
    );
  }

  if ((bottom.type === "node" || typeof bottom.content === "object") && bottom.content) {
    return <>{bottom.content}</>;
  }

  return <p className="text-xs text-slate-500">{bottom.content}</p>;
}


const DEFAULT_LEFT = (
  <div className="space-y-3">
    <div className="flex items-center gap-3">
      <Image
        src={logo}
        alt="MicPro logo"
        width={40}
        height={40}
        unoptimized
        className="h-10 w-10 shrink-0"
      />
      <h2 className="text-2xl font-semibold text-slate-900">MicPro</h2>
    </div>
  </div>
);

const DEFAULT_CENTER = (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
    <FooterColumn
      column={{
        title: "Product",
        links: [
          { title: "Careers", link: "/#" },
          { title: "About Us", link: "/#" },
          { title: "Insights", link: "/#" },
          { title: "PCI Compliance", link: "/#" },
          { title: "Integration", link: "/#" },
          { title: "Pricing", link: "/#" },
        ],
      }}
    />
    <FooterColumn
      column={{
        title: "For Developers",
        links: [
          { title: "Docs", link: "/#" },
          { title: "Knowledge Base", link: "/#" },
          { title: "System Status", link: "/#" },
          { title: "Tutorials", link: "/#" },
          { title: "Security", link: "/#" },
        ],
      }}
    />
    <FooterColumn
      column={{
        title: "Resources",
        links: [
          { title: "About", link: "/#" },
          { title: "Leadership", link: "/#" },
          { title: "Press/News", link: "/#" },
          { title: "Careers/Team", link: "/#" },
          { title: "Contact Us", link: "/#" },
        ],
      }}
    />
  </div>
);

const DEFAULT_RIGHT = (
  <div className="space-y-10">
    <div className="space-y-8">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-900">
        Subscribe
      </h2>

      <form className="flex max-w-xl items-stretch overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="min-w-0 flex-1 px-4 py-2 text-lg text-slate-900 placeholder:text-slate-400 outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="flex w-12 items-center justify-center bg-violet-500 text-white transition-colors hover:bg-violet-600"
        >
          <span className="text-3xl leading-none">→</span>
        </button>
      </form>
    </div>

    <div className="space-y-1">
      <p className="font-semibold text-sm tracking-tight text-slate-900">
        8/10
      </p>
      <p className="font-semibold text-sm tracking-tight text-slate-900">
        Overall rating
      </p>
      <div className="flex items-center gap-1 text-xl leading-none">
        <span className="text-amber-400">★</span>
        <span className="text-amber-400">★</span>
        <span className="text-amber-400">★</span>
        <span className="text-amber-400">★</span>
        <span className="text-slate-200">★</span>
      </div>
    </div>
  </div>
);

const DEFAULT_BOTTOM = {
  type: "node",
  content: (
    <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-center md:justify-between md:gap-4">
      <ul className="flex flex-wrap gap-4">
        <li className="text-xs text-slate-500">Platform</li>
        <li className="text-xs text-slate-500">Products</li>
        <li className="text-xs text-slate-500">Resources</li>
      </ul>

      <p className="text-xs text-slate-500">
        &copy; Besnik.com I All Rights Reserved
      </p>

      <ul className="flex flex-wrap gap-4">
        <li className="rounded-full border border-slate-200 bg-white p-2">
          <FaFacebookF className="text-blue-600 duration-300" />
        </li>
        <li className="rounded-full border border-slate-200 bg-white p-2">
          <FaGoogle className="text-red-500 duration-300" />
        </li>
        <li className="rounded-full border border-slate-200 bg-white p-2">
          <FaTwitter className="text-blue-400 duration-300" />
        </li>
        <li className="rounded-full border border-slate-200 bg-white p-2">
          <FaDribbble className="text-pink-500 duration-300" />
        </li>
      </ul>
    </div>
  ),
};


export default function Footer({
  left = DEFAULT_LEFT,
  center = DEFAULT_CENTER,
  right = DEFAULT_RIGHT,
  bottom = DEFAULT_BOTTOM,
}) {
  return (
    <footer className="bg-white py-12 text-slate-900">
      <Container className="footer">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between w-full">
          {left && <div className="flex-1 md:max-w-[280px]">{left}</div>}
          {center && <div className="flex-[2] flex md:justify-center">{center}</div>}
          {right && <div className="flex-1 md:max-w-sm flex md:justify-end">{right}</div>}
        </div>

        {bottom && (
          <div className="mt-12 border-t border-slate-200 pt-6">
            <FooterBottom bottom={bottom} />
          </div>
        )}
      </Container>
    </footer>
  );
}
