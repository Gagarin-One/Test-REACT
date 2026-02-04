import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { useAuthStore } from '../model/auth.store';
import { useLoginForm } from './useLoginForm';

export const LoginForm = () => {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { values, errors, touched, isValid, handleChange, handleBlur, markAllTouched } =
    useLoginForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    markAllTouched();
    if (!isValid) return;

    setIsLoading(true);
    setTimeout(() => {
      login({ name: values.name, email: values.email });
      setIsLoading(false);
      navigate('/profile');
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Enter your name"
        label="Name"
        value={values.name}
        onChange={handleChange('name')}
        onBlur={handleBlur('name')}
        error={touched.name ? errors.name : null}
        disabled={isLoading}
      />

      <Input
        placeholder="Enter your Email"
        label="Email"
        value={values.email}
        onChange={handleChange('email')}
        onBlur={handleBlur('email')}
        error={touched.email ? errors.email : null}
        disabled={isLoading}
      />

      <Input
        placeholder="Enter your password"
        label="Password"
        type="password"
        value={values.password}
        onChange={handleChange('password')}
        onBlur={handleBlur('password')}
        error={touched.password ? errors.password : null}
        disabled={isLoading}
      />

      <Button type="submit" disabled={!isValid || isLoading} loading={isLoading}>
        Login
      </Button>
    </form>
  );
};
