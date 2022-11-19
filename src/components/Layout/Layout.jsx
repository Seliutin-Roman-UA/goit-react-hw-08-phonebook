import { Nav } from 'components/Nav/Nav';
import { NavUser } from 'components/NavUser/NavUser';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { StyledConteiner } from './Layout.styled';

export function Layout() {
  const isLogin = useSelector(state => state.auth.isLoggedIn);
  return (
    <StyledConteiner>
      {isLogin ? <NavUser /> : <Nav />}
      <Outlet />
    </StyledConteiner>
  );
}
