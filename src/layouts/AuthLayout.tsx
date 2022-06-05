import { Navigate, Outlet } from 'react-router-dom';
import { AuthLayoutProps } from '../@types/auth';
import { useAuth } from '../hooks/useAuth';
import { Splash } from '../pages/Splash';

export const AuthLayout = ({ isProtected }: AuthLayoutProps) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Splash />;
  }

  if (isProtected) {
    return user.id ? <Outlet /> : <Navigate to="/" />;
  }

  return user.id ? <Navigate to="/feed" /> : <Outlet />;
};
