import { Input } from "../../../components/Input/index";
import styles from "./SignIn.module.scss";

export default function SignInPage() {
  return (
    <div className={styles["signin"]}>
      <header>
        <h2>Olá!</h2>
        <p>Entre com seu email e senha para acessar a plataforma</p>
      </header>
      <form action="">
        <label htmlFor="email">
          Email
          <Input inputType="email" />
        </label>
        <label htmlFor="password">
          Senha
          <Input inputType="password" />
        </label>
        <button type="submit">entrar</button>
      </form>
    </div>
  );
}
