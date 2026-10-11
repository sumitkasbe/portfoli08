import { cn } from "@/lib/utils";

export const Button = ({
  className = "",
  size = "default",
  children,
  href,
  ...props
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const classes = cn(
    "cosmic-button inline-flex items-center justify-center gap-2",
    sizeClasses[size] ?? sizeClasses.default,
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
