"use client";
import styles from "@/app/dashboard/home/Home.module.scss";
import { useAppSelector } from "@/app/store/hooks";
import {
  ChangeEvent,
  FormEvent,
  useState,
} from "react";
import { MessageFeedBackTypes, MessageType, ProteinIten } from "@/app/lib/types";
import EditProtein from "../EditItem";
import CardDaily from "../CardDaily";
import CardEmpty from "../CardEmpty";
import { Toast } from "../Toast";
import { deleteProteinAmount, editProteinAmount } from "@/app/lib/api";
import Loading from "../Loading";
import { setProteinDeleted, setProteinEdited } from "@/app/store/userSlice";
import { useAppDispatch } from "@/app/store/hooks";
import Modal from "../ModalComponent";
import { Button } from "../Button";

export default function CardDailyList() {
  const userInfo = useAppSelector((state) => state.userReducer.userInfo);
  const initialState = {
    createdAt: String(Date.now()),
    quantity: 0,
    id: null,
  };
  const [loading, setLoading] = useState<boolean>(false);
  const [itemEditting, setItemEditting] = useState<ProteinIten>(initialState);
  const [itemToDelete, setItemToDelete] = useState<ProteinIten>(initialState);
  const [isEditing, setIsEditting] = useState(false);
  const [messageFeedback, setMessageFeedback] = useState<MessageFeedBackTypes>({
    type: MessageType.Null,
    message: "",
  });
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const dispatch = useAppDispatch();
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
    saveEditedProtein();
    setMessageFeedback({ message: "", type: MessageType.Null });
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
  function deleteCard(item: ProteinIten) {
    setModalDelete(true);
    setItemToDelete(item);
  }
  function cancelDeleteCard() {
    setModalDelete(false);
    setItemToDelete(initialState);
  }
  async function confirmDeleteCard() {
    try {
      setLoading(true);
      const data = await deleteProteinAmount(itemToDelete.id);
      dispatch(setProteinDeleted(itemToDelete));
      return data;
    } catch (error) {
      console.error("Error on deleting protein", error);
      setMessageFeedback({
        message: "Error on deleting protein",
        type: MessageType.Error,
      });
    } finally {
      setLoading(false);
      cancelDeleteCard();
      setTimeout(() => {
        setMessageFeedback({ message: "", type: MessageType.Null });
      }, 3000);
    }
  }

  async function saveEditedProtein() {
    try {
      setLoading(true);
      const req = await editProteinAmount(
        itemEditting.quantity,
        itemEditting.id
      );
      setMessageFeedback({
        message: "Updated Successfully",
        type: MessageType.Success,
      });
      handleCancelEditing();
      dispatch(setProteinEdited(req.data.updated));
      return req;
    } catch (error) {
      console.error("Error on EditProtein", error);
      setMessageFeedback({
        message: "Error trying to update",
        type: MessageType.Error,
      });
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessageFeedback({ message: "", type: MessageType.Null });
      }, 3000);
    }
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
      {modalDelete ? (
        <Modal>
          <h3 className="font-bold text-lg">
            Tem certeza que deseja excluir o item?
          </h3>
          <span>Essa ação é irreversível</span>
          <div className="flex gap-2 mt-6">
            <Button handleClick={cancelDeleteCard} isFlat>
              Cancelar
            </Button>
            <Button handleClick={confirmDeleteCard}>Confirmar</Button>
          </div>
        </Modal>
      ) : (
        ""
      )}
      {loading && <Loading />}
    </>
  );
}
