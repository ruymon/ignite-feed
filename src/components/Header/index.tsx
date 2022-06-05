import { Logo } from '../Logo';
import styles from './styles.module.css';

export const Header = () => (
  <header className={styles.container}>
    <Logo />
  </header>
);
