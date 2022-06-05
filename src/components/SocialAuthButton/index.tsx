import { createElement } from 'react';
import { FaGithub, FaFacebook, FaGoogle } from 'react-icons/fa';
import { classNames } from '../../utils/format';

import styles from './styles.module.css';

interface SocialAuthButtonProps {
  provider: 'facebook' | 'google' | 'github';
}

const SocialAuthButtonIconVariants = {
  google: FaGoogle,
  facebook: FaFacebook,
  github: FaGithub,
};

export const SocialAuthButton = ({ provider }: SocialAuthButtonProps) => {
  const className = classNames([styles.container, `bg-brand-${provider}`]);

  return (
    <button type="button" className={className}>
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
