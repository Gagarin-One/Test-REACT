import { LoginForm } from '@/features/auth/ui/LoginForm';
import { Card } from '@/shared/ui/Card/Card';
import { PageLayout } from '@/shared/ui/PageLayout/PageLayout';
import styles from './LoginPage.module.scss'
export const LoginPage = () => {
  return (
    <PageLayout>
      <Card>
        <h1 className={styles.title}>Login to Your Account</h1>
        <LoginForm />
      </Card>
    </PageLayout>
  );
};
