import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from './page/HomePage';
import { RegistrationPage } from './page/RegistrationPage';
import { LoginPage } from './page/LoginPage';
import { ContactPage } from './page/ContactPage';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';

export function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>waiting...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={isLoggedIn ? <Navigate to="/contacts" /> : <HomePage />}
        />
        <Route
          path="/contacts"
          element={isLoggedIn ? <ContactPage /> : <Navigate to="/" />}
        />
        <Route
          path="/registration"
          element={
            isLoggedIn ? <Navigate to="/contacts" /> : <RegistrationPage />
          }
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/contacts" /> : <LoginPage />}
        />
        <Route path="*" element={<Layout />} />
      </Route>
    </Routes>
  );
}
