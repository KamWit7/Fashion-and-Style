import { Outlet, Navigate } from 'react-router-dom';

const Auth = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
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
