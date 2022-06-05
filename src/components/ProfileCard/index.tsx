import { useAuth } from '../../hooks/useAuth';
import { Avatar } from '../Avatar';
import { EditProfileButton } from '../EditProfileButton';

import styles from './styles.module.css';

export const ProfileCard = () => {
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Avatar avatar={user.avatar} />
      </div>

      <div className={styles.profile}>
        <span>{user.name}</span>
        <p>UI Designer</p>
      </div>

      <div className={styles.footer}>
        <hr className={styles.divider} />
        <EditProfileButton />
      </div>
    </div>
  );
};
