import { createElement } from 'react';
import { FaGithub, FaFacebook, FaGoogle } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

import styles from './styles.module.css';

interface SocialAuthButtonProps {
  provider: 'facebook' | 'google' | 'github';
}

const SocialAuthButtonIconVariants = {
  google: FaGoogle,
  facebook: FaFacebook,
  github: FaGithub,
};

const SocialAuthButtonStyleVariants = {
  google: '#EA4335',
  facebook: '#4267B2',
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
