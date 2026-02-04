import { ReactNode } from 'react'
import styles from './PageLayout.module.scss'

interface PageLayoutProps {
  children: ReactNode
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className={styles.page}>
      <div className={styles.circle1} />
      <div className={styles.circle2} />

      <div className={styles.content}>{children}</div>
    </div>
  )
}