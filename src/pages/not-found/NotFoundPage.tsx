import { PageLayout } from '@/shared/ui/PageLayout/PageLayout';
import styles from './NotFoundPage.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
export const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {

    navigate('/login');
  };

  return (
    <PageLayout>
      <div className={styles.notFound}>
      
        <h1>404 Page not found</h1>
        <Button onClick={handleLogout}>Login Page</Button>
      </div>
    </PageLayout>
  );
};
