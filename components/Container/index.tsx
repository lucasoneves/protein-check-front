import { ReactNode } from 'react'
import styles from './Container.module.css'

type ContainerProps = {
  children: ReactNode
}


export const Container = ({children} : ContainerProps) => {
  return <div className={styles.container}>{children}</div>
}