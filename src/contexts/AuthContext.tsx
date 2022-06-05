import {
  FacebookAuthProvider,
  GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup,
  User as FirebaseUser,
} from 'firebase/auth';
import {
  createContext, useEffect, useState,
} from 'react';
import {
  AuthContextProps, AuthProviderProps, AuthProviders, User,
} from '../@types/auth';
import { auth } from '../services/firebase';

const AuthProviderVariants = {
  google: GoogleAuthProvider,
  facebook: FacebookAuthProvider,
  github: GithubAuthProvider,
};

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = (firebaseUser: FirebaseUser) => {
    if (!firebaseUser) return;
    const { uid, displayName, photoURL } = firebaseUser;

    if (!displayName || !photoURL) throw new Error('Missing user information');

    setUser({
      id: uid,
      name: displayName,
      avatar: photoURL,
    });
  };

  const signIn = async (provider: AuthProviders): Promise<void> => {
    const providerService = new AuthProviderVariants[provider]();

    try {
      const result = await signInWithPopup(auth, providerService);
      handleUser(result.user);
    } catch (error) {
      throw new Error('User not authenticated.');
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) handleUser(firebaseUser);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ user, signIn, isLoading }}>
      { children }
    </AuthContext.Provider>
  );
};
