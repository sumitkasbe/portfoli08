import { cn } from "@/lib/utils";

export const AnimatedBorderButton = ({
  children,
  href,
  download,
  className = "",
  ...props
}) => {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full",
    "border border-primary text-primary font-medium",
    "hover:bg-primary/10 transition-colors duration-300",
    className
  );

  if (href) {
    return (
      <a href={href} download={download} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
};
