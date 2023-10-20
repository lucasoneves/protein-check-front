import { MouseEventHandler, ReactNode } from "react";
type UserHeader = {
  userName: string;
  children: ReactNode;
  handleClick: MouseEventHandler
};
export default function Avatar({ userName, children, handleClick }: UserHeader) {
  return (
    <div className="avatar flex items-center py-2 gap-4 relative">
      <h2 className="text-xs sm:text-sm">{userName && `Hello, ${userName}`}</h2>
      <div onClick={handleClick} className="bg-slate-500 cursor-pointer font-bold w-8 h-8 flex items-center justify-center rounded-full text-sm">
        {userName &&
          userName.split(" ")[0][0].concat(userName.split(" ")[1][0])}
      </div>
      {children}
    </div>
  );
}
