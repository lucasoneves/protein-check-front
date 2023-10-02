"use client";
import { FormEvent, useEffect, useState } from "react";
import styles from "./UpdateTargetComponent.module.scss";
import { updateProteinTarget } from "@/lib/proteinTarget";
import Loading from "../Loading";
import { useAppSelector, useAppDispatch } from "@/app/store/hooks";
import { Toast } from "../Toast";
import { useRouter } from "next/navigation";
import { setNewTargetDaily } from "@/app/store/userSlice";

enum MessageType {
  Null = "",
  Error = "error",
  Success = "success",
}

type MessageFeedBackTypes = {
  type: MessageType;
  message: string;
};

export default function UpdateTargetComponent() {
  const [newTarget, setNewTarget] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [messageFeedback, setMessageFeedback] = useState<MessageFeedBackTypes>({
    type: MessageType.Null,
    message: "",
  });
  const { id, target } = useAppSelector(
    (state) => state.userReducer.userInfo.proteinTarget[0]
  );

  function cleanErrorMessage() {
    setMessageFeedback({ type: MessageType.Null, message: "" });
  }

  const dispatch = useAppDispatch();
  const router = useRouter();
  async function handleUpdateProteinTarget(e: FormEvent) {
    e.preventDefault();

    if (newTarget) {
      try {
        setLoading(true);
        const data = await updateProteinTarget(newTarget, id);
        setMessageFeedback({
          type: MessageType.Success,
          message: "Updated successfully",
        });
        dispatch(setNewTargetDaily(newTarget));
        return data;
      } catch (error) {
        setMessageFeedback({
          type: MessageType.Error,
          message: "Error updating protein target",
        });
        console.error("Create Protein Target Failed", error);
      } finally {
        setLoading(false);
        setTimeout(() => {
          cleanErrorMessage();
        }, 3000)

      }
    } else {
      setMessageFeedback({ type: MessageType.Error, message: "Mininal target is 1" })
    }

  }
  return (
    <>
      <h2 className="mt-5">Meta de proteína diária</h2>
      {messageFeedback.message && (
        <Toast messageType={messageFeedback.type}>
          <span>{messageFeedback.message}</span>
        </Toast>
      )}
      {loading ? (
        <Loading />
      ) : (
        <form
          action=""
          onSubmit={(e) => handleUpdateProteinTarget(e)}
          className={`${styles["form"]} p-6 mt-5 text-sm rounded-lg bg-slate-900`}
        >
          <label htmlFor="protein">
            <input
              maxLength={99}
              type="number"
              onChange={(e) => setNewTarget(+e.target.value)}
              placeholder="Digite a quantidade de proteína"
              id="protein"
              className="w-full outline-0 p-4 bg-transparent rounded-lg text-real-black"
              defaultValue={target}
            />
          </label>
          <button className="block mt-5 p-3 bg-blue-600 rounded-lg max-sm:w-full w-36">
            Salvar
          </button>
        </form>
      )}
    </>
  );
}
