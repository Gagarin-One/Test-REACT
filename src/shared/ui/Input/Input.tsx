import styles from './Input.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string | null
}

export const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} {...props} />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}
