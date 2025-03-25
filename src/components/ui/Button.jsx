import React from "react";
import classNames from "classnames";
import Link from "next/link";

const Button = React.forwardRef(
  (
    {
      className,
      asChild = false,
      type = "button",
      asLink = false,
      href = "",
      ...props
    },
    ref
  ) => {
    const Component = asChild ? "span" : "button";

    const classes = classNames(
      "inline-flex items-center justify-center rounded-[10px] transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer border-[2px] border-solid border-white px-3 py-2 text-xl font-medium shadow-md",

      className
    );

    if (asLink) {
      return <Link href={href} passHref className={classes} {...props}></Link>;
    }

    return <Component ref={ref} type={type} className={classes} {...props} />;
  }
);

Button.displayName = "Button";

export { Button };
