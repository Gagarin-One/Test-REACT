import styles from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

export const Button = ({ loading, children, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      {loading ? 'Loading…' : children}
    </button>
  )
}
