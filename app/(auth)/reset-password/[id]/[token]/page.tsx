"use client";

import { Button } from "@/components/Button";
import Loading from "@/components/Loading";
import inputStyle from "@/components/Input/Input.module.scss";
import styles from "@/app/(auth)/Auth.module.scss";
import { FormEvent, useEffect, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { resetPassword } from "@/lib/api";
import { useRouter } from "next/navigation";
import { MessageFeedBackTypes, MessageType } from "@/lib/types";
import { Toast } from "@/components/Toast";

type ParamsType = {
  params: {
    id: string;
    token: string;
  }
}

export default function ResetPassword({params}: ParamsType) {
  const [newPassword, setNewPassword] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [loading, setLoading] =useState<boolean>(false);
  const [messageFeedback, setMessageFeedback] = useState<MessageFeedBackTypes>({message: '', type: MessageType.Null})
  const router = params

  function handleSaveNewPassword(e: FormEvent) {
    e.preventDefault();
    const password = (e.target as HTMLInputElement).value;
    setNewPassword(password);
  }

  function handlePasswordVisible() {
    setPasswordVisible(!passwordVisible);
  }

  async function handleSubmitPassword(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { id, token } = params
    try {
      const res = await resetPassword(newPassword, id, token);
      setMessageFeedback({message: "Senha atualizada com sucesso", type: MessageType.Success})
      return res.data;
    } catch (error) {
      setMessageFeedback({message: "Houve um erro ao atualizar a senha", type: MessageType.Error})
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessageFeedback({message: '', type: MessageType.Null})
      }, 3000)
    }
  }

  function iconVisualizePassword() {
    return !passwordVisible ? <VscEye size={20} /> : <VscEyeClosed size={20}/>
  }

  function ToastMessages() {
    return <Toast messageType={messageFeedback.type}>{messageFeedback.message}</Toast>
  }

  return (
    <div className={styles["signin"]}>
      <header>
        <h2>Olá!</h2>
        <p>Digite a nova senha</p>
      </header>
      <form action="" onSubmit={(e) => handleSubmitPassword(e)}>
        <label htmlFor="password" className="relative">
          Senha
          <input
            className={`${inputStyle["input"]}`}
            type={passwordVisible ? "text" : "password"}
            onChange={handleSaveNewPassword}
            value={newPassword}
          />
          <span
            onClick={handlePasswordVisible}
            className="absolute bottom-4 m-auto right-2 cursor-pointer"
          >
            {iconVisualizePassword()}
          </span>
        </label>
        <span className="text-xs mt-2">*Mínimo de 6 caracteres</span>
        <Button disabled={newPassword.length < 6}>Salvar</Button>
        {loading && <Loading />}
        {ToastMessages()}
      </form>
    </div>
  );
}
