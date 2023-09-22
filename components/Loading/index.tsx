import styles from "./Loading.module.scss";
type LoadingTypes = {
  small?: boolean;
}
export default function Loading({ small }: LoadingTypes) {
  return (
    <>
      {!small ? (
        <main
          className={`flex h-20 items-center justify-center fixed left-0 right-0 top-0 bottom-0 m-auto`}
        >
          <span className={`${styles["loader"]}`}></span>
        </main>
      ) : (
        <main className={`flex items-center justify-center`}>
          <span className={`${styles["loader-small"]}`}></span>
        </main>
      )}
    </>
  );
}
