import { useAuth } from '@src/context/AuthContext/useAuth';
import { Outlet, Navigate } from 'react-router-dom';

const Auth = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login?message=You must be logged in" />;
  }

  return (
    <>
      AuthLayout
      <Outlet />
    </>
  );
};

export default Auth;
