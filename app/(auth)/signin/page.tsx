"use client";
import styles from "@/app/(auth)/Auth.module.scss";
import inputStyle from "@/app/components/Input/Input.module.scss";
import Link from "next/link";
import Cookies from 'js-cookie'
import { Button } from "@/app/components/Button/index";
import { useState } from "react";
import { ErrorTypes, MessageType } from "@/app/lib/types";
import { validateEmail } from "@/app/lib/validateEmail";
import { signin } from '@/app/lib/api';
import { useRouter } from 'next/navigation'
import { labelEmailNotValid, labelEmailRequired, labelFormErrorLogin, labelPasswordRequired } from "@/app/lib/text";
import { Toast } from "@/app/components/Toast";
import Loading from "@/app/components/Loading";


export default function SignInPage() {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [formError, setFormError] = useState<ErrorTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
  const router = useRouter()

  function saveUserEmail(e: { target: { value: string; }; }) {
    setUserEmail(e.target.value);
    clearErrorMessages();
  }

  function saveUserPassword(e: { target: { value: string; }; }) {
    setUserPassword(e.target.value);
    clearErrorMessages();
  }

  function handleValidateEmail() {
    if (!userEmail) {
      setFormError((prevState) => [
        ...prevState,
        { message: labelEmailRequired, field: "email" },
      ]);
      return false;
    }

    if (!validateEmail(userEmail)) {
      setFormError((prevState) => [
        ...prevState,
        { message: labelEmailNotValid, field: "email"}
      ])
      return false;
    }
    return true;
  }

  function handleValidatePassword() {
    
    if (!userPassword) {
      setFormError((prevState) => [
        ...prevState,
        { message: labelPasswordRequired, field: "password" },
      ]);
      return false;
    }
    return true;
  }

  async function handleLoginUser() {
    if (handleValidateEmail() && handleValidatePassword()) {
      setLoading(true)
      try { 
        const req = await signin({
          email: userEmail,
          password: userPassword
        })

        const data = await req.token;
        router.push('/dashboard/home');
        Cookies.set('authToken', data)
        
      } catch (error) {
        console.error(error)
        setFormError((prevState) =>[
          ...prevState,
          { message: labelFormErrorLogin, field: "auth"}
        ])
      } finally {
        setLoading(false)
      }
    }
    return false;
  }

  function clearErrorMessages() {
    setFormError([]);
  }

  function checkValidityForm(e: { preventDefault: () => void; }) {
    e.preventDefault();
    clearErrorMessages();
    handleLoginUser()
  }

  return (
    <div className={styles["signin"]}>
      <header>
        <h2>Olá!</h2>
        <p>Entre com seu email e senha para acessar a plataforma</p>
      </header>
      <form action="" onSubmit={checkValidityForm}>
        <label htmlFor="email">
          Email
          <input
            className={inputStyle["input"]}
            type="text"
            defaultValue={userEmail}
            onChange={saveUserEmail}
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            className={inputStyle["input"]}
            type="password"
            value={userPassword}
            onChange={saveUserPassword}
          />
        </label>
        {formError.length ? (
          <>
            {formError.map((d) => {
              return <Toast messageType={MessageType.Error} key={d.message}>{d.message}</Toast>;
            })}
          </>
        ) : (
          ""
        )}
        <Link className={styles["link"]} href="/recoverpassword">
          Esqueci minha senha
        </Link>
        <Button disabled={loading}>{loading ? <Loading small /> : "Entrar"}</Button>
      </form>
      <p className={styles["signup-link"]}>
        Não tem uma conta? <Link href="/signup">Cadastre-se</Link>
      </p>
    </div>
  );
}
