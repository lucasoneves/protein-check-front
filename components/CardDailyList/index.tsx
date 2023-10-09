"use client";
import styles from "@/app/dashboard/home/Home.module.scss";
import { useAppSelector } from "@/app/store/hooks";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { MessageFeedBackTypes, MessageType, ProteinIten } from "@/lib/types";
import EditProtein from "../EditItem";
import CardDaily from "../CardDaily";
import CardEmpty from "../CardEmpty";
import { Toast } from "../Toast";

export default function CardDailyList() {
  const userInfo = useAppSelector((state) => state.userReducer.userInfo);
  const initialState = {
    createdAt: String(Date.now()),
    quantity: 0,
    id: null,
  };
  const [itemEditting, setItemEditting] = useState<ProteinIten>(initialState);
  const [isEditing, setIsEditting] = useState(false);
  const [messageFeedback, setMessageFeedback] = useState<MessageFeedBackTypes>({
    type: MessageType.Null,
    message: "",
  });
  function editCard(e: ProteinIten) {
    setIsEditting(true);
    setItemEditting(e);
  }
  function handleSaveItem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { quantity } = itemEditting;
    if (!+quantity) {
      setMessageFeedback({
        type: MessageType.Error,
        message: "Please, set a value greater than 0",
      });
      return;
    }

    console.log("SALVAR NOVO VALOR", quantity);
    setMessageFeedback({message: '', type: MessageType.Null})
  }
  function handleCancelEditing() {
    setItemEditting(initialState);
  }
  function handleEdit(event: ChangeEvent<HTMLInputElement>) {
    const target = event.target.value;
    setItemEditting((prevState) => {
      return { ...prevState, quantity: +target };
    });
  }

  function formatDate(time: Date) {
    const hours = time.getHours();
    const minutes =
      time.getMinutes() <= 9 ? `0${time.getMinutes()}` : time.getMinutes();
    return `${hours}:${minutes}`;
  }
  function deleteCard(e: object) {
    console.log(e);
  }
  return (
    <>
      <div
        className={`${styles["wrapper-report"]} flex flex-col gap-3 justify-evenly`}
      >
        {userInfo.proteinAmount.length > 0 ? (
          userInfo.proteinAmount.map((item) =>
            item.id === itemEditting.id ? (
              <EditProtein
                saveAction={(event: FormEvent<HTMLFormElement>) =>
                  handleSaveItem(event)
                }
                key={"item-" + item.quantity}
                cancelAction={handleCancelEditing}
              >
                <form action="" onSubmit={(event) => handleSaveItem(event)}>
                  <input
                    type="number"
                    onChange={handleEdit}
                    className="p-2 bg-transparent border border-gray-400 rounded-lg text-sm"
                    autoFocus
                    defaultValue={itemEditting.quantity}
                  />
                </form>
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
          )
        ) : (
          <CardEmpty />
        )}
      </div>
      {messageFeedback.type === MessageType.Error && (
        <Toast messageType={MessageType.Error}>
          <p>{messageFeedback.message}</p>
        </Toast>
      )}
      {messageFeedback.type === MessageType.Success && (
        <Toast messageType={MessageType.Success}>
          <p>{messageFeedback.message}</p>
        </Toast>
      )}
    </>
  );
}
