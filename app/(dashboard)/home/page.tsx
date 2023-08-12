"use client";

import AddProtein from "@/components/AddProtein";
import { Card } from "@/components/Card";
import { ChangeEvent, FormEvent, FormEventHandler } from "react";

export default function Home() {
  function handleAddProteinAmount(e: FormEvent) {
    e.preventDefault();
    console.log("heeey");
  }
  function changedProteinAmount(e: ChangeEvent) {
    e.preventDefault();
    console.log(e.target);
  }
  return (
    <>
      <main>
        <h3 className="mt-5 font-bold">Overview</h3>
        <div className="grid sm:grid-cols-3 auto-cols-fr gap-5 mt-5 mb-5">
          <Card className="sm:p-8 p-12">
            <h3 className="flex items-center justify-center flex-col">
              Today: <span className="text-4xl block">50g</span>
            </h3>
          </Card>
          <Card className="sm:p-8 p-12">
            <h3 className="flex items-center justify-center flex-col">
              Your daily goal: <span className="text-4xl block">100g</span>
            </h3>
          </Card>
          <Card className="sm:p-8 p-12">
            <h3 className="flex items-center justify-center flex-col">
              Progress: <span className="text-4xl block">50%</span>
            </h3>
          </Card>
        </div>
        <div className="report">
          <h2 className="mt-5 font-bold">Today</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th>Horário</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>09:30</td>
                <td>10g</td>
                <td>
                  <button>Editar</button>
                  <button>Excluir</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <AddProtein
        change={changedProteinAmount}
        handleAdd={handleAddProteinAmount}
      />
    </>
  );
}
