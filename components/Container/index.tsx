import { ReactNode } from 'react'
import styles from './Container.module.css'

type ContainerProps = {
  children: ReactNode,
  containerClasses: String
}


export const Container = ({children, containerClasses} : ContainerProps) => {
  return <div className={`${styles.container} ${containerClasses}`}>{children}</div>
}