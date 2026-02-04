import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/features/auth/model/auth.store';
import { Button } from '@/shared/ui/Button/Button';
import { PageLayout } from '@/shared/ui/PageLayout/PageLayout';
import { Card } from '@/shared/ui/Card/Card';
import styles from './ProfilePage.module.scss';
export const ProfilePage = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <PageLayout>
      <Card>
        <h1 className={styles.title}>Your Profile</h1>

        <div className={styles.infoWrapper}>
          <div className={styles.infoBlock}>
            <h3>Name:</h3>
            <p>{user.name}</p>
          </div>
          <div className={styles.infoBlock}>
            <h3>Email:</h3>
            <p>{user.email}</p>
          </div>
        </div>

        <Button onClick={handleLogout}>Logout</Button>
      </Card>
    </PageLayout>
  );
};
