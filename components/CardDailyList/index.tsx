"use client";
import styles from '@/app/dashboard/home/Home.module.scss';
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useState } from 'react';
import { ProteinIten } from '@/lib/types';
import EditProtein from '../EditItem';
import CardDaily from '../CardDaily';

export default function CardDailyList() {
  const userInfo = useAppSelector((state) => state.userReducer.userInfo);
  const initialState = {
    createdAt: String(Date.now()),
    quantity: 0,
    id: null,
  };
  const [itemEditting, setItemEditting] = useState<ProteinIten>(initialState);
  const [isEditing, setIsEditting] = useState(false);
  function editCard(e: ProteinIten) {
    setIsEditting(true);
    setItemEditting(e);
  }
  function handleSaveItem(item: object) {
    console.log(item);
  }
  function handleCancelEditing() {
    setItemEditting(initialState);
  }
  function handleEdit(event: { target: HTMLInputElement; event: Event }) {
    const target = (event.target as HTMLInputElement).value;
    setItemEditting((prevState) => {
      return { ...prevState, target: target };
    });
  }
  function formatDate(time: Date) {
    const hours = time.getHours();
    const minutes =
      time.getMinutes() <= 9 ? `0${time.getMinutes()}` : time.getMinutes();
    console.log("Minutes ->", minutes);
    return `${hours}:${minutes}`;
  }
  function deleteCard(e: object) {
    console.log(e);
  }
  return (
    <div
      className={`${styles["wrapper-report"]} flex flex-col gap-3 justify-evenly`}
    >
      {userInfo.proteinAmount.map((item) =>
        item.id === itemEditting.id ? (
          <EditProtein
            saveAction={() => handleSaveItem(item)}
            key={"item-" + item.quantity}
            cancelAction={handleCancelEditing}
          >
            <input
              type="text"
              onChange={() => handleEdit}
              className="p-2 bg-transparent border border-gray-400 rounded-lg text-sm"
              autoFocus
              defaultValue={itemEditting.quantity}
            />
          </EditProtein>
        ) : (
          <CardDaily
            key={item.id}
            id={item.id}
            createdAt={formatDate(new Date(item.createdAt))}
            amount={item.quantity}
            handleEdit={() => editCard(item)}
            handleDelete={() => deleteCard(item)}
          />
        )
      )}
    </div>
  );
}
