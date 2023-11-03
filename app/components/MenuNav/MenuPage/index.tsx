import Link from "next/link";
import { Component, ReactNode } from "react";

export default function MenuItem({
  icon,
  path,
  title,
}: {
  icon: ReactNode;
  path: string;
  title: string;
}) {
  return (
    <Link href={path} className="flex items-center gap-1 flex-col text-2xl">
      {icon}
      <span className="text-xs">{title}</span>
    </Link>
  );
}
