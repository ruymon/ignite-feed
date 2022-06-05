import { Logo } from '../../components/Logo';
import { SocialAuthButton } from '../../components/SocialAuthButton';
import styles from './styles.module.css';

export const Login = () => (
  <div className={styles.container}>
    <aside className={styles.aside} />

    <main className={styles.main}>
      <Logo />

      <div className={styles.headerContainer}>
        <h1>Escolha uma opção para entrar</h1>
        <p>Utilize algum dos serviços abaixo para entrar na nossa plataforma.</p>
      </div>

      <div className={styles.authButtonContainer}>
        <SocialAuthButton provider="google" />
        <SocialAuthButton provider="twitter" />
        <SocialAuthButton provider="github" />
      </div>
    </main>
  </div>
);
