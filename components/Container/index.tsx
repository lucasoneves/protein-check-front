import { ReactNode } from 'react'
import styles from './Container.module.scss'

type ContainerProps = {
  children: ReactNode,
  containerClasses: String
}


export const Container = ({children, containerClasses} : ContainerProps) => {
  return <div className={`${styles.container} ${containerClasses}`}>{children}</div>
}