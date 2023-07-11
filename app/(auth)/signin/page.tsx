import styles from './SignIn.module.css'

export default function SignInPage() {
  return (
    <div className={styles['signin']}>
      <h2>Olá!</h2>
      <p>Entre com seu email e senha para acessar a plataforma</p>
      <form action="">
        <label htmlFor="email">
          Email
          <input type="email" />
        </label>
        <label htmlFor="password">
          Senha
          <input type="password" />
        </label>
        <button type="submit">entrar</button>
      </form>
    </div>
  );
}
