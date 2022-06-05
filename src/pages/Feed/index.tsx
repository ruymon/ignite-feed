import { Header } from '../../components/Header';
import { ProfileCard } from '../../components/ProfileCard';
import { useAuth } from '../../hooks/useAuth';
import styles from './styles.module.css';

export const Feed = () => {
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <Header />
      <ProfileCard />
    </div>
  );
};
