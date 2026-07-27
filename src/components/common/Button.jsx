const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-500",
  outline: "border border-[#1F2326] text-[#1F2326] hover:bg-[#1F2326]-50",
  light: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  dark: "bg-slate-900 text-white hover:bg-slate-800",
};

const geometries = {
  rounded: "rounded-full",
  square: "rounded-sm",
};

export default function Button({
  variant = "primary",
  geometry = "rounded",
  className = "",
  children,
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center py-3 px-7 gap-2",
    "whitespace-nowrap font-semibold transition-colors duration-200",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    geometries[geometry],
    className,
  ].join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
