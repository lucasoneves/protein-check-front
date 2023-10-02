"use client";
import { FormEvent, useState } from "react";
import styles from "./UpdateTargetComponent.module.scss";
import { updateProteinTarget } from "@/lib/proteinTarget";
import Loading from "../Loading";
import { useAppSelector } from "@/app/store/hooks";
import { Toast } from "../Toast";

export default function UpdateTargetComponent() {
  const [target, setTarget] = useState<Number>(0);
  const [loading, setLoading] = useState(false);
  const [messageFeedback, setMessageFeedback] = useState("");
  const id = useAppSelector((state) => state.userReducer.userInfo.proteinTarget[0].id);
  async function handleUpdateProteinTarget(e: FormEvent) {
    e.preventDefault();

    if (target) {
      try {
        setLoading(true);
        const req = await updateProteinTarget(target, id);
        const data = await req.json();
        if (req.status === 201) {
          setMessageFeedback("Meta atualizada com sucesso!")
        }
        return data;
      } catch (error) {
        console.error("Create Protein Target Failed", error);
      } finally {
        setLoading(false);
      }
    }
  }
  return (
    <>
      <h2 className="mt-5">Meta de proteína diária</h2>
        <Toast>
          <span>{messageFeedback}</span>
        </Toast>
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
              onChange={(e) => setTarget(+e.target.value)}
              placeholder="Digite a quantidade de proteína"
              id="protein"
              className="w-full outline-0 p-4 bg-transparent rounded-lg text-real-black"
              defaultValue={+target || ""}
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
