import { Header } from '../../components/Header';
import { ProfileCard } from '../../components/ProfileCard';
import { PostCard } from '../../components/PostCard';
import styles from './styles.module.css';

export const Feed = () => (
  <div className={styles.container}>
    <Header />

    <div className={styles.wrapper}>
      <ProfileCard />

      <div className={styles.postContainer}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  </div>
);
