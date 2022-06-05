import { PencilSimpleLine } from 'phosphor-react';

import styles from './styles.module.css';

export const EditProfileButton = () => (
  <button type="button" className={styles.container}>
    <PencilSimpleLine size={20} />
    <span>Editar seu perfil</span>
  </button>
);
