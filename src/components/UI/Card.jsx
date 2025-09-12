import React from "react";

const Card = ({
  children,
  className = "",
  hover = true,
  padding = "md",
  ...props
}) => {
  const baseClasses =
    "bg-white rounded-xl shadow-lg border border-blue-100 transition-all";

  const hoverClasses = hover ? "hover:shadow-xl hover:-translate-y-1" : "";

  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
