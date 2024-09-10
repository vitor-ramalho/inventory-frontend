import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';

import Loader from './common/Loader';
import DefaultLayout from './layout/DefaultLayout';
import PublicLayout from './layout/PublicLayout';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import useAuthStore from './store/useAuthStore';

const AppRouter = () => {
  const [loading, setLoading] = useState<boolean>(true);
  //const {isAuthenticated} = useAuthStore();
  const isAuthenticated = true
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        path="/auth/signin"
        element={
          <PublicLayout>
            <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <SignIn />
          </PublicLayout>
        }
      />
      <Route
        path="/auth/signup"
        element={
          <PublicLayout>
            <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <SignUp />
          </PublicLayout>
        }
      />
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <DefaultLayout>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            </DefaultLayout>
          ) : (
            <Navigate to="/auth/signin" />
          )
        }
      />
    </Routes>
  );
};

export default AppRouter;