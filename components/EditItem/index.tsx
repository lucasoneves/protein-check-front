"use client";
import { MouseEventHandler, ReactNode } from "react";
import { Card } from "../Card";
import { MdOutlineCancel, MdCheckCircle } from "react-icons/md";



export default function EditProtein({
  children,
  cancelAction,
  saveAction
}: {
  children: ReactNode;
  cancelAction: MouseEventHandler;
  saveAction: MouseEventHandler;
}) {
  return (
    <Card className="flex items-center justify-between gap-2 h-16">
      <div className="flex-1">{children}</div>
      <button className="text-2xl text-red-500 flex items-center gap-2" onClick={cancelAction}>
        <MdOutlineCancel />
      </button>
      <button className="text-2xl text-green-500 flex items-center gap-2" onClick={saveAction}>
        <MdCheckCircle />
      </button>
    </Card>
  );
}
