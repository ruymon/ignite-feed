import { createElement } from 'react';
import { FaGithub, FaTwitter, FaGoogle } from 'react-icons/fa';
import { AuthProviders } from '../../@types/auth';
import { useAuth } from '../../hooks/useAuth';

import styles from './styles.module.css';

interface SocialAuthButtonProps {
  provider: AuthProviders;
}

const SocialAuthButtonIconVariants = {
  google: FaGoogle,
  twitter: FaTwitter,
  github: FaGithub,
};

const SocialAuthButtonStyleVariants = {
  google: '#EA4335',
  twitter: '#00ACEE',
  github: '#171515',
};

export const SocialAuthButton = ({ provider }: SocialAuthButtonProps) => {
  const { signIn } = useAuth();

  const handleSubmit = () => {
    signIn(provider);
  };

  return (
    <button type="button" className={styles.container} onClick={handleSubmit} style={{ backgroundColor: SocialAuthButtonStyleVariants[provider] }}>
      { createElement(SocialAuthButtonIconVariants[provider]) }
      <span>
        Entrar com
        {' '}
        <span className="capitalize">
          { provider }
        </span>
      </span>
    </button>
  );
};
