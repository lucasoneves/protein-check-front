"use client";

import AddProtein from "@/components/AddProtein";
import { Card } from "@/components/Card";
import { ChangeEvent, FormEvent, FormEventHandler } from "react";
import styles from "./Home.module.scss";

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
        <div className="grid sm:grid-cols-3 auto-cols-fr sm:gap-5 gap-2 mt-5 mb-5">
          <Card className="sm:p-8 p-12 col-span-2 row-span-2 flex items-center justify-center">
            <h3 className="flex items-center justify-center flex-col text-sm">
              Today: <span className="sm:text-6xl text-3xl block">50g</span>
            </h3>
          </Card>
          <Card className="sm:p-8 p-12">
            <h3 className="flex items-center justify-center flex-col text-sm">
              Your daily goal: <span className="text-2xl block">100g</span>
            </h3>
          </Card>
          <Card className="sm:p-8 p-12">
            <h3 className="flex items-center justify-center flex-col text-sm">
              Progress: <span className="text-2xl block">50%</span>
            </h3>
          </Card>
        </div>
        <div className="flex justify-between flex-wrap gap-3">
          <div className="report flex-1">
            <h2 className="mt-5 mb-5 font-bold">Today</h2>
            <div
              className={`${styles["wrapper-report"]} flex flex-col gap-3 justify-evenly`}
            >
              <Card className="card-amount">
                <div
                  className={`${styles["bar"]} p-3 flex gap-6 rounded-md text-xs`}
                >
                  <span>09:20</span>
                  <span className="flex-1">10g</span>
                  <div className="actions flex gap-2 text-xs">
                    <button>Editar</button>
                    <button>Excluir</button>
                  </div>
                </div>
              </Card>
              <Card className="card-amount">
                <div
                  className={`${styles["bar"]} p-3 flex gap-6 rounded-md text-xs`}
                >
                  <span>13:28</span>
                  <span className="flex-1">10g</span>
                  <div className="actions flex gap-2 text-xs">
                    <button>Editar</button>
                    <button>Excluir</button>
                  </div>
                </div>
              </Card>
              <Card className="card-amount">
                <div
                  className={`${styles["bar"]} p-3 flex gap-6 rounded-md text-xs`}
                >
                  <span>16:30</span>
                  <span className="flex-1">10g</span>
                  <div className="actions flex gap-2 text-xs">
                    <button>Editar</button>
                    <button>Excluir</button>
                  </div>
                </div>
              </Card>
              <Card className="card-amount">
                <div
                  className={`${styles["bar"]} p-3 flex gap-6 rounded-md text-xs`}
                >
                  <span>20:45</span>
                  <span className="flex-1">10g</span>
                  <div className="actions flex gap-2 text-xs">
                    <button>Editar</button>
                    <button>Excluir</button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
        </div>
      </main>
      <AddProtein
        change={changedProteinAmount}
        handleAdd={handleAddProteinAmount}
      />
    </>
  );
}
