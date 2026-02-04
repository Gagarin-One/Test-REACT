import { create } from 'zustand'
import { User } from '@/entities/user/model/user.types'


interface AuthState {
  user: User | null
  isAuth: boolean
  login: (user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuth: false,

  login: (user) =>
    set({
      user,
      isAuth: true,
    }),

  logout: () =>
    set({
      user: null,
      isAuth: false,
    }),
}))