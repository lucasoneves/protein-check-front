import { ReactNode } from "react";

type UserOptionsType = {
  children: ReactNode
};

export default function UserOptions({ children }: UserOptionsType) {
  return (
    <div className="shadow-sm bg-[#222] text-sm p-3 top-full absolute right-0 rounded-md w-full" tabIndex={0}>
      {children}
    </div>
  );
}
