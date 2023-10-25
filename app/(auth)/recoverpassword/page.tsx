"use client";
import { Button } from "@/components/Button/index";
import styles from "@/app/(auth)/Auth.module.scss";
import inputStyles from "@/components/Input/Input.module.scss";
import Link from "next/link";
import { validateEmail } from "@/lib/validateEmail";
import { useState } from "react";
import { MessageFeedBackTypes, MessageType } from "@/lib/types";
import { labelEmailNotValid } from "@/lib/text";
import { recoverPassword } from "@/lib/api";
import Cookies from "js-cookie";
import Loading from "@/components/Loading";
import { Toast } from "@/components/Toast";
import { VscVerified } from "react-icons/vsc";

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
  function clearFeedbackMessages() {
    setMessageFeedback({ type: MessageType.Null, message: "" });
  }
  function emailHandler(e: any) {
    clearFeedbackMessages();
    setEmail(e.target.value);
  }
  async function handleSubmit(e: any) {
    e.preventDefault();
    clearFeedbackMessages();
    if (!validateEmail(email)) {
      handleSetFormError(labelEmailNotValid, "email");
    } else {
      try {
        setLoading(true);
        const res = await recoverPassword(email, Cookies.get("authToken")!);
        if (res.data.status === 204) {
          setMessageFeedback({
            type: MessageType.Error,
            message: "Email not found",
          });
          return;
        }
        setMessageFeedback({
          type: MessageType.Success,
          message: res.data.message,
        });
        return res;
      } catch (error) {
        setMessageFeedback({
          type: MessageType.Error,
          message: `Error: ${error}`,
        });
        console.error(error);
      } finally {
        setLoading(false);
        if (messageFeedback.type === MessageType.Error) {
          setTimeout(() => {
            clearFeedbackMessages();
          }, 3000);
        }
      }
    }
  }

  function messageFeedbackBox() {
    return messageFeedback.type === MessageType.Error ? (
      <Toast messageType={MessageType.Error}>
        <p>{messageFeedback.message}</p>
      </Toast>
    ) : (
      ""
    );
  }

  return (
    <div className={`${styles["signin"]} mt-10`}>
      {messageFeedback.type !== MessageType.Success ? (
        <>
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

            <Button disabled={loading}>
              {loading ? "Enviando..." : "Enviar"}
            </Button>
          </form>
          <Link className="mt-10 inline-flex" href={"/signin"}>
            Voltar
          </Link>
        </>
      ) : (
        <p className="flex items-center justify-center text-lg gap-2">
          Enviamos um link para o email cadastrado{" "}
          <VscVerified size={30} className={styles.success} />
        </p>
      )}
      {loading && <Loading />}
      {messageFeedbackBox()}
    </div>
  );
}
