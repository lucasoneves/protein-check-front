import styles from '../Loading/Loading.module.scss';
export default function LoadingSmall(){
  return (
    <main className={`flex h-20 items-center justify-center fixed left-0 right-0 top-0 bottom-0 m-auto`}>
      <span className={`${styles['loader-small']}`}></span>
    </main>
  );
}
