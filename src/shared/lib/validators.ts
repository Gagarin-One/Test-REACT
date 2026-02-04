export const validateName = (value: string): string | null => {
  if (value.trim().length <= 3) {
    return 'Имя должно быть длиннее 3 символов'
  }
  return null
}

export const validateEmail = (value: string): string | null => {
  if (!value.includes('@gmail.com')) {
    return 'Email должен содержать @gmail.com'
  }
  return null
}

export const validatePassword = (value: string): string | null => {
  if (value.length <= 5) {
    return 'Пароль должен быть длиннее 5 символов'
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
    return 'Пароль должен содержать хотя бы один специальный символ (!@#$%^&* и т.д.)'
  }

  return null
}
