import { PencilSimpleLine } from 'phosphor-react';

export const EditProfileButton = () => (
  <button type="button" className="group p-2 px-4 w-fit flex items-center justify-center gap-2 text-base font-bold border-2 border-brand-green-light rounded-md hover:bg-brand-green hover:border-brand-green hover:text-white text-brand-green-light">
    <PencilSimpleLine size={20} />
    <span className="group-hover:text-white">Editar seu perfil</span>
  </button>
);
