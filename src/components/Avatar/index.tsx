import styles from './styles.module.css';

interface AvatarProps {
  avatar: string;
}

export const Avatar = ({ avatar }: AvatarProps) => (
  <div className={styles.container}>
    <img src={avatar} alt="avatar" />
  </div>
);
