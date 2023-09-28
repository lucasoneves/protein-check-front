"use client";
import { EventHandler, FormEvent, ReactEventHandler } from "react";
import styles from "./AddProtein.module.scss";
import { VscAdd } from "react-icons/vsc";
import { useState } from "react";
import { addProteinRequest } from "@/lib/addProtein";
import Loading from "../Loading";
import { useAppDispatch } from "@/app/store/hooks";
import { setProteinAdded } from "@/app/store/userSlice";

export default function AddProtein() {
  const [amount, setAmount] = useState<Number>(0);
  const [loading, setLoading] = useState<Boolean>(false);

  const dispatch = useAppDispatch();

  async function submitProteinQuantity(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await addProteinRequest(amount);
      dispatch(setProteinAdded(data.proteinAmount))
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setAmount(0);
    }
  }
  function changedProteinAmount(e: FormEvent) {
    const amount = +(e.target as HTMLInputElement).value;
    setAmount(amount);
  }
  return (
    <div
      className={`${styles["add-protein"]} bottom-8 p-4 left-4 right-4 m-auto`}
    >
      <form
        action=""
        onSubmit={(e) => submitProteinQuantity(e)}
        className="flex gap-2"
      >
        <input
          maxLength={3}
          className={`w-full bg-transparent border-0 outline-0 p-4 rounded-lg flex-1 ${styles["input"]}`}
          placeholder="Add protein"
          onChange={changedProteinAmount}
          value={+amount || ''}
        ></input>
        <button
          className={`${styles["button"]} p-4 rounded-full flex items-center justify-center text-lg`}
        >
          {loading ? <Loading small/> : <VscAdd />}
        </button>
      </form>
    </div>
  );
}
