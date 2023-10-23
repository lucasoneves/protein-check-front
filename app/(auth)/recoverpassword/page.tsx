"use client";
import { Button } from "@/components/Button/index";
import styles from "@/app/(auth)/Auth.module.scss";
import inputStyles from "@/components/Input/Input.module.scss";
import Link from "next/link";
import { validateEmail } from "@/lib/validateEmail";
import { useEffect, useState } from "react";
import { ErrorTypes, MessageFeedBackTypes, MessageType } from "@/lib/types";
import { labelEmailNotValid, labelEmailRequired } from "@/lib/text";
import { ErrorBox } from "@/components/ErrorBox";
import { recoverPassword } from "@/lib/api";
import Cookies from "js-cookie";
import Loading from "@/components/Loading";
import { Toast } from "@/components/Toast";

export default function RecoverPassword() {
  const [email, setEmail] = useState<string>("");
  const [messageFeedback, setMessageFeedback] = useState<MessageFeedBackTypes>({
    type: MessageType.Null,
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  function handleSetFormError(text: string, field: string) {
    setMessageFeedback({
      type: MessageType.Error,
      message: "Email not valid or empty",
    });
  }
  function clearErrorMessages() {
    setMessageFeedback({ type: MessageType.Null, message: "" });
  }
  function emailHandler(e: any) {
    clearErrorMessages();
    setEmail(e.target.value);
  }
  async function handleSubmit(e: any) {
    e.preventDefault();
    clearErrorMessages();
    if (!validateEmail(email)) {
      handleSetFormError(labelEmailNotValid, "email");
    } else {
      try {
        setLoading(true);
        const req = await recoverPassword(email, Cookies.get("authToken")!);
        clearErrorMessages();
        return req;
      } catch (error) {
        setMessageFeedback({ type: MessageType.Error, message: 'Email not found' });
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    setTimeout(() => {
      clearErrorMessages();
    }, 3000)
  }

  return (
    <div className={styles["signin"]}>
      <header>
        <h2>Redefinir senha</h2>
        <p>Digite seu email para recuperar sua senha</p>
      </header>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            className={inputStyles["input"]}
            type="text"
            onChange={emailHandler}
          />
        </label>
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
        <Button disabled={loading}>{loading ? "Enviando..." : "Enviar"}</Button>
      </form>
      <Link className="mt-10 inline-flex" href={"/signin"}>
        Voltar
      </Link>
      {loading && <Loading />}
    </div>
  );
}
