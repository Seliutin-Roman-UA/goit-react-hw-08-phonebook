import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import {
  StyledNav,
  StyledWrapper,
  StyledP,
  StyledNavLink,
} from './NavUser.styled';

export function NavUser() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const userLogOut = () => dispatch(logOut());

  return (
    <StyledNav>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      <StyledWrapper>
        <StyledP>{`Hello, ${user.name} (${user.email})`}</StyledP>
        <StyledNavLink to="/" onClick={userLogOut}>
          LogOut
        </StyledNavLink>
      </StyledWrapper>
    </StyledNav>
  );
}
