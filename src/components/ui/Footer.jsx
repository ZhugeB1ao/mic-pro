import Image from "next/image";
import { FaFacebookF, FaGoogle, FaTwitter, FaDribbble } from "react-icons/fa";
import Container from "./Container";
import logo from "@/assets/logos/logo.svg";

const defaultBrand = {
  key: "brand",
  content: (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Image
          src={logo}
          alt="MicPro logo"
          width={40}
          height={40}
          className="h-10 w-10 shrink-0"
        />
        <h2 className="text-2xl font-semibold text-slate-900">MicPro</h2>
      </div>
    </div>
  ),
};

const defaultAside = {
  key: "aside",
  content: (
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
  ),
};

const defaultColumns = [
  defaultBrand,
  {
    key: "product",
    title: "Product",
    links: [
      { title: "Careers", link: "/#" },
      { title: "About Us", link: "/#" },
      { title: "Insights", link: "/#" },
      { title: "PCI Compliance", link: "/#" },
      { title: "Integration", link: "/#" },
      { title: "Pricing", link: "/#" },
    ],
  },
  {
    key: "for-developers",
    title: "For Developers",
    links: [
      { title: "Docs", link: "/#" },
      { title: "Knowledge Base", link: "/#" },
      { title: "System Status", link: "/#" },
      { title: "Tutorials", link: "/#" },
      { title: "Security", link: "/#" },
    ],
  },
  {
    key: "resources",
    title: "Resources",
    links: [
      { title: "About", link: "/#" },
      { title: "Leadership", link: "/#" },
      { title: "Press/News", link: "/#" },
      { title: "Careers/Team", link: "/#" },
      { title: "Contact Us", link: "/#" },
    ],
  },
  defaultAside,
];

const defaultBottom = {
  type: "node",
  content: (
    <div className="flex items-center justify-between gap-4 sm:flex-row">
      <ul className="flex flex-wrap gap-4">
        <li className="text-xs text-slate-500">Platform</li>
        <li className="text-xs text-slate-500">Products</li>
        <li className="text-xs text-slate-500">Resources</li>
      </ul>

      <p className="text-xs text-slate-500">
        &copy; Besnik.com I All Rights Reserved
      </p>

      <ul className="flex flex-wrap gap-4">
        <li className="rounded-full border border-slate-200 bg-white p-2 ">
            <FaFacebookF className="text-blue-600 duration-300" />
        </li>
        <li className="rounded-full border border-slate-200 bg-white p-2 ">
            <FaGoogle className="text-red-500 duration-300" />
        </li>
        <li className="rounded-full border border-slate-200 bg-white p-2 ">
            <FaTwitter className="text-blue-400 duration-300" />
        </li>
        <li className="rounded-full border border-slate-200 bg-white p-2 ">
            <FaDribbble className="text-pink-500 duration-300" />
        </li>
      </ul>
    </div>
  ),
};

function FooterLinks({ title, links }) {
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
  if (!bottom) {
    return null;
  }

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

export default function Footer({
  columns = defaultColumns,
  bottom = defaultBottom,
}) {
  return (
    <footer
      className={`border-t border-slate-200 bg-white py-12 text-slate-900`}
    >
      <Container className="footer">
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-5">
          {columns.map((column) => (
            <FooterColumn key={column.key} column={column} />
          ))}
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
