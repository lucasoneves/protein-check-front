"use client";
import { ReactNode } from "react";
import { Card } from "../Card";

export default function EditProtein({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Card className="flex items-center justify-between gap-2">
      <div className="flex-1">
      {children}
      </div>
      <button className="text-sm">Cancelar</button>
      <button className="text-sm">Salvar</button>
    </Card>
  );
}
