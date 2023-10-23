"use client";

import { Button } from "@/components/Button";
import Loading from "@/components/Loading";
import inputStyle from "@/components/Input/Input.module.scss";
import styles from "@/app/(auth)/Auth.module.scss";
import { FormEvent, useEffect, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  function handleSaveNewPassword(e: FormEvent) {
    e.preventDefault();
    const password = (e.target as HTMLInputElement).value;
    setNewPassword(password);
  }

  function handlePasswordVisible() {
    setPasswordVisible(!passwordVisible);
  }

  function handleSubmitPassword(e: FormEvent) {
    e.preventDefault();
    console.log(newPassword);
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
            {!passwordVisible ? <VscEye size={20} /> : <VscEyeClosed size={20}/>}
          </span>
        </label>
        <span className="text-xs mt-2">*Mínimo de 6 caracteres</span>
        {newPassword.length >= 6 && (
          <Button>{false ? <Loading /> : "Salvar"}</Button>
        )}
      </form>
    </div>
  );
}
