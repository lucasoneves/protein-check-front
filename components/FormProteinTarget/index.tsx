import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { FormEvent, useEffect, useState } from "react";
import { createProteinTarget, updateProteinTarget } from "@/lib/proteinTarget";
import { MessageFeedBackTypes, MessageType } from "@/lib/types";
import { setNewTargetDaily } from "@/app/store/userSlice";
import styles from "./FormProteinTarget.module.scss";
import Loading from "../Loading";
import { Toast } from "../Toast";

export default function FormProteinTarget() {
  const [newTarget, setNewTarget] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [endpoint, setEndpoint] = useState(null);
  const [messageFeedback, setMessageFeedback] = useState<MessageFeedBackTypes>({
    type: MessageType.Null,
    message: "",
  });
  const currentTarget = useAppSelector(
    (state) => state.userReducer.userInfo.proteinTarget
  );

  useEffect(() => {
    if (currentTarget.length) {
      setNewTarget(currentTarget[0].target)
    }
    console.log(currentTarget)
  }, [currentTarget])

  const dispatch = useAppDispatch();
  async function handleUpdateProteinTarget(e: FormEvent) {
    e.preventDefault();

    if (newTarget > 0) {
      try {
        setLoading(true);
        const response = !currentTarget.length
          ? await createProteinTarget(newTarget)
          : await updateProteinTarget(newTarget, currentTarget[0].id);
        setMessageFeedback({
          type: MessageType.Success,
          message: "Updated successfully",
        });
        dispatch(setNewTargetDaily({ ...response.data }))
        return response;
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
        }, 3000);
      }
    } else {
      setMessageFeedback({
        type: MessageType.Error,
        message: "Mininal target is 1",
      });
    }
  }

  function cleanErrorMessage() {
    setMessageFeedback({ type: MessageType.Null, message: "" });
  }
  return loading ? (
    <Loading />
  ) : (
    <>
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
            defaultValue={
              currentTarget.length ? currentTarget[0].target : newTarget
            }
          />
        </label>
        <button className="block mt-5 p-3 bg-blue-600 rounded-lg max-sm:w-full w-36">
          Salvar
        </button>
      </form>
      {messageFeedback.type === MessageType.Error ? (
        <Toast messageType={MessageType.Error}>
          <p>{messageFeedback.message}</p>
        </Toast>
      ) : messageFeedback.type === MessageType.Success ? (
        <Toast messageType={MessageType.Success}>
          <p>{messageFeedback.message}</p>
        </Toast>
      ) : (
        ""
      )}
    </>
  );
}
