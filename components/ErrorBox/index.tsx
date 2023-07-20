import { ReactNode } from "react";

export const ErrorBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="rounded bg-red-200 text-red-950 p-3 text-sm mt-3 mb-3">{children}</div>
  );
};
