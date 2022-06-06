import { useAuth } from '../../hooks/useAuth';
import { Avatar } from '../Avatar';
import { Divider } from '../Divider';
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
        <h1>{user.name}</h1>
        <p>UI Designer</p>
      </div>

      <div className={styles.footer}>
        <Divider />
        <EditProfileButton />
      </div>
    </div>
  );
};
