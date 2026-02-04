import { useState, useMemo } from 'react'
import { validateName, validateEmail, validatePassword } from '@/shared/lib/validators'

interface FormValues {
  name: string
  email: string
  password: string
}

interface FormErrors {
  name: string | null
  email: string | null
  password: string | null
}

export const useLoginForm = (initialValues?: Partial<FormValues>) => {
  const [values, setValues] = useState<FormValues>({
    name: initialValues?.name || '',
    email: initialValues?.email || '',
    password: initialValues?.password || '',
  })

  const [touched, setTouched] = useState<Record<keyof FormValues, boolean>>({
    name: false,
    email: false,
    password: false,
  })

  const errors: FormErrors = useMemo(() => ({
    name: validateName(values.name),
    email: validateEmail(values.email),
    password: validatePassword(values.password),
  }), [values])

  const isValid = useMemo(
    () => !errors.name && !errors.email && !errors.password,
    [errors]
  )

  const handleChange = (field: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValues((prev) => ({ ...prev, [field]: value }))

    if (!touched[field]) {
      setTouched((prev) => ({ ...prev, [field]: true }))
    }
  }

  const handleBlur = (field: keyof FormValues) => () => {
    if (!touched[field]) {
      setTouched((prev) => ({ ...prev, [field]: true }))
    }
  }

  const markAllTouched = () => {
    setTouched({ name: true, email: true, password: true })
  }

  return {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    markAllTouched,
  }
}
