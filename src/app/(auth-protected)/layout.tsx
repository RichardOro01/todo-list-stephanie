import AuthGuard from "@/components/auth/guard/auth-guard";
import React from "react";

const LayoutProtected = ({ children }: { children: React.ReactNode }) => {
  return <AuthGuard>{children}</AuthGuard>;
};

export default LayoutProtected;
