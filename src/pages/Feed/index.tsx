import { Header } from '../../components/Header';
import { useAuth } from '../../hooks/useAuth';
import styles from './styles.module.css';

export const Feed = () => {
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <Header />
      <h1>{user.name}</h1>
    </div>
  );
};
