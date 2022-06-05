import { useAuth } from '../../hooks/useAuth';
import styles from './styles.module.css';

export const Feed = () => {
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <h1>{user.name}</h1>
    </div>
  );
};
