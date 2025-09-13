import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>{children}</div>
  );
};

export default Layout;
