import { createBrowserRouter, Navigate } from 'react-router-dom'
import { LoginPage } from '@/pages/login/LoginPage'
import { ProfilePage } from '@/pages/profile/ProfilePage'
import { NotFoundPage } from '@/pages/not-found/NotFoundPage'
import { useAuthStore } from '@/features/auth/model/auth.store'

const ProtectedRoute = ({ children }: { children: React.JSX.Element}) => {
  const isAuth = useAuthStore((state) => state.isAuth)

  if (!isAuth) {
    return <Navigate to="/login" replace />
  }

  return children
}

const PublicRoute = ({ children }: { children: React.JSX.Element}) => {
  const isAuth = useAuthStore((state) => state.isAuth)

  if (isAuth) {
    return <Navigate to="/profile" replace />
  }

  return children
}

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
