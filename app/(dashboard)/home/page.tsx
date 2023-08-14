"use client";

import AddProtein from "@/components/AddProtein";
import { Card } from "@/components/Card";
import { ChangeEvent, FormEvent, FormEventHandler } from "react";
import styles from './Home.module.scss';

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
          <div className={`${styles['wrapper-report'] } flex flex-col`}>
            <div className={styles['bar']}>
              <span>09:20</span>
              <span>10g</span>
            </div>
            <div className={styles['bar']}>
              <span>13:20</span>
              <span>10g</span>
            </div>
            <div className={styles['bar']}>
              <span>18:50</span>
              <span>20g</span>
            </div>
          </div>
        </div>
        <div className="report">
          <h2 className="mt-5 font-bold">This week</h2>
        </div>
      </main>
      <AddProtein
        change={changedProteinAmount}
        handleAdd={handleAddProteinAmount}
      />
    </>
  );
}
