import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-[100vh] grid place-content-center bg-slate-500">{children}</div>;
};

export default AuthLayout;
