import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => (
  <div className="auth-layout">
    {children}
  </div>
);

export default AuthLayout;
