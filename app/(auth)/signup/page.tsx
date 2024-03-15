/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Button } from "@/app/components/Button/index";
import styles from "@/app/(auth)/Auth.module.scss";
import inputStyles from "@/app/components/Input/Input.module.scss";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { ErrorTypes, MessageFeedBackTypes, MessageType } from "@/app/lib/types";
import {
  labelEmailRequired,
  labelPasswordRequired,
  labelUsernameRequired,
  labelEmailNotValid,
} from "@/app/lib/text";
import { ErrorBox } from "@/app/components/ErrorBox";
import { validateEmail } from "@/app/lib/validateEmail";
import { register } from "@/app/lib/api";
import { useRouter } from "next/navigation";
import { Toast } from "@/app/components/Toast";

export default function SignUpPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [username, setUserName] = useState("");
  const [formMessages, setFormMessages] = useState<ErrorTypes[]>([]);
  const [messaageFeedback, setMessaageFeedback] =
    useState<MessageFeedBackTypes>({ message: "", type: MessageType.Null });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  function cleanErrorMessages() {
    setFormMessages([]);
    setTimeout(() => {
      setMessaageFeedback({ message: "", type: MessageType.Null });
    }, 3000);
  }

  async function handleSetFormError(text: string, field: string) {
    return await setFormMessages((prevState) => [
      ...prevState,
      { message: text, field, touched: true },
    ]);
  }

  function validateForm() {
    const valid =
      username && userEmail && userPassword && validateEmail(userEmail);
    if (!username) {
      handleSetFormError(labelUsernameRequired, "username");
    }
    if (!userEmail) {
      handleSetFormError(labelEmailRequired, "email");
    }

    if (userEmail && !validateEmail(userEmail)) {
      handleSetFormError(labelEmailNotValid, "email");
    }

    if (!userPassword) {
      handleSetFormError(labelPasswordRequired, "password");
    }

    if (valid) {
      makeHttpSignUpRequest();
    }
  }

  async function makeHttpSignUpRequest() {
    setLoading(true);
    try {
      const response = await register({
        username,
        email: userEmail,
        password: userPassword,
      });
      if (response && response.data.status === 204) {
        setMessaageFeedback({
          message: "Usuário ou e-mail já cadastrado",
          type: MessageType.Error,
        });
        return;
      }
      router.push("/signin");
      return response;
    } catch (error) {
      console.error(error);
      setMessaageFeedback({
        message: "Houve um erro ao tentar cadastrar. Tente novamente!",
        type: MessageType.Error,
      });
    } finally {
      setLoading(false);
    }
  }

  function handleSignUp(e: FormEvent) {
    e.preventDefault();
    cleanErrorMessages();
    validateForm();
  }

  return (
    <>
      <div className={styles["signin"]}>
        <header>
          <h2>Cadastro</h2>
          <p>Preencha os dados para se cadastrar no site</p>
        </header>
        <form action="" onSubmit={handleSignUp} className="mb-3">
          <label htmlFor="username">
            Nome
            <input
              type="text"
              className={inputStyles["input"]}
              onChange={(e) => setUserName(e.currentTarget.value)}
              defaultValue={username}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="text"
              className={inputStyles["input"]}
              onChange={(e) => setUserEmail(e.target.value)}
              defaultValue={userEmail}
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              className={inputStyles["input"]}
              onChange={(e) => setUserPassword(e.target.value)}
              defaultValue={userPassword}
            />
          </label>
          {formMessages.length ? (
            <ErrorBox>
              {formMessages.map((d) => {
                return (
                  <p
                    className="mb-2 last:mb-0 text-xs"
                    key={d.message + Math.random()}
                  >
                    {d.message}
                  </p>
                );
              })}
            </ErrorBox>
          ) : (
            ""
          )}
          <Button disabled={loading}>
            {loading ? "Loading..." : "Cadastrar"}
          </Button>
        </form>
        <div
          id="g_id_onload"
          data-client_id="256526142796-s4pl16jv8cqqont1415a39fnt9f0o114.apps.googleusercontent.com"
          data-context="signin"
          data-ux_mode="popup"
          data-login_uri="http://localhost:3000/signup"
          data-auto_prompt="false"
        ></div>

        <div
          className="g_id_signin"
          data-type="standard"
          data-shape="rectangular"
          data-theme="outline"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment="left"
        ></div>
        <p className={styles["signup-link"]}>
          Já tem uma conta? <Link href="/signin">Faça login</Link>
        </p>
      </div>
      {messaageFeedback.message && (
        <Toast messageType={messaageFeedback.type}>
          {messaageFeedback.message}
        </Toast>
      )}
    </>
  );
}
