import { ReactNode } from 'react';

export type AuthProviders = 'google' | 'facebook' | 'github';

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface AuthContextProps {
  signIn: (provider: AuthProviders) => Promise<void>;
  user: User;
  isLoading: boolean;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthLayoutProps {
  isProtected?: boolean;
}
