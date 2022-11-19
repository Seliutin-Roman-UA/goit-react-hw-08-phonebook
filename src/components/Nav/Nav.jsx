import { NavLink } from 'react-router-dom';
import { StyledNav, StyledWrapper, StyledNavLink } from './Nav.styled';

export function Nav() {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledWrapper>
        <StyledNavLink to="/registration">Register</StyledNavLink>
        <StyledNavLink to="/login">LogIn</StyledNavLink>
      </StyledWrapper>
    </StyledNav>
  );
}
