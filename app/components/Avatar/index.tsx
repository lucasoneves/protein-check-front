import { MouseEventHandler, ReactEventHandler, ReactNode } from "react";
type UserHeader = {
  userName: string;
  children: ReactNode;
  handleClick: MouseEventHandler;
  handlePress: ReactEventHandler
};
export default function Avatar({
  userName,
  children,
  handleClick,
  handlePress
}: UserHeader) {
  const CONTAINS_BLANK_SPACE = !/\s/g.test(userName);
  return (
    <div className="avatar flex items-center py-2 gap-4 relative">
      <h2 className="text-xs sm:text-sm">{userName && `Hello, ${userName}`}</h2>
      <div
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handlePress}
        className="uppercase bg-slate-600 cursor-pointer font-bold w-8 h-8 flex items-center justify-center rounded-full text-sm"
      >
        {CONTAINS_BLANK_SPACE
          ? userName.substring(0, 1).toUpperCase()
          : userName.split(" ")[0][0].concat(userName.split(" ")[1][0])}
      </div>
      {children}
    </div>
  );
}
