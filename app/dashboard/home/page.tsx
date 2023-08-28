"use client";
import { Card } from "@/components/Card";
import {
  ChangeEventHandler,
  DOMElement,
  ReactElement,
  ReactEventHandler,
  useState,
} from "react";
import styles from "./Home.module.scss";
import CardDaily from "@/components/CardDaily";
import EditProtein from "@/components/EditItem";
import { Input } from "@mui/material";

export default function Home() {
  const [dailyInfo, setDailyInfo] = useState([
    { createdAt: new Date(), amount: 10, id: 1 },
    { createdAt: new Date("2023-08-21, 12:05"), amount: 22, id: 2 },
    { createdAt: new Date(), amount: 65, id: 3 },
  ]);

  type ProteinIten = {
    createdAt: Date;
    amount: number;
    id: number;
  };

  const [itemEditting, setItemEditting] = useState<ProteinIten>({
    createdAt: new Date(),
    amount: 0,
    id: 0,
  });
  const [isEditing, setIsEditting] = useState(false);

  function editCard(e: ProteinIten) {
    setIsEditting(true);
    setItemEditting(e);
  }
  function deleteCard(e: object) {
    console.log(e);
  }
  function handleEdit(event: { target: HTMLInputElement; event: Event }) {
    const target = (event.target as HTMLInputElement).value;
    setItemEditting((prevState) => {
      return {...prevState, target: target}
    })
  }
  return (
    <>
      <main>
        <h3 className="mt-5 font-bold">Overview</h3>
        <div className="grid sm:grid-cols-3 auto-cols-fr sm:gap-5 gap-2 mt-5 mb-5">
          <Card className="col-span-2 row-span-2 flex items-center justify-center">
            <h3 className="flex items-center justify-center flex-col text-sm">
              Today:{" "}
              <span className="sm:text-6xl text-3xl block font-bold">50g</span>
            </h3>
          </Card>
          <Card className="sm:p-8 p-12">
            <h3 className="flex items-center justify-center flex-col text-sm">
              Your daily goal:{" "}
              <span className="text-2xl block font-bold">100g</span>
            </h3>
          </Card>
          <Card className="sm:p-8 p-12">
            <h3 className="flex items-center justify-center flex-col text-sm">
              Progress: <span className="text-2xl block font-bold">50%</span>
            </h3>
          </Card>
        </div>
        <div className="flex justify-between flex-wrap gap-3">
          <div className="report flex-1">
            <h2 className="mt-5 mb-5 font-bold">Today</h2>
            <div
              className={`${styles["wrapper-report"]} flex flex-col gap-3 justify-evenly`}
            >
              {dailyInfo.map((item) =>
                item.id === itemEditting.id ? (
                  <EditProtein key={"item-" + item.id}>
                    <input
                      type="text"
                      onChange={() => handleEdit}
                      className="p-2 bg-transparent border border-gray-400 rounded-lg text-sm"
                      autoFocus
                      defaultValue={itemEditting.amount}
                    />
                  </EditProtein>
                ) : (
                  <CardDaily
                    key={item.id}
                    id={item.id}
                    createdAt={`${item.createdAt.getHours()}:${
                      item.createdAt.getMinutes() <= 9
                        ? "0" + item.createdAt.getMinutes()
                        : item.createdAt.getMinutes()
                    }`}
                    amount={item.amount}
                    handleEdit={() => editCard(item)}
                    handleDelete={() => deleteCard(item)}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
