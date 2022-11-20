import { StyledNav, StyledWrapper, StyledNavLink } from './Nav.styled';
import { MdHome, MdOutlineLogin, MdAppRegistration } from 'react-icons/md';

export function Nav() {
  return (
    <StyledNav>
      <StyledNavLink to="/">
        <MdHome style={{ width: '24px', height: '24px' }} /> Home
      </StyledNavLink>
      <StyledWrapper>
        <StyledNavLink to="/registration">
          <MdAppRegistration style={{ width: '24px', height: '24px' }} />
          Register
        </StyledNavLink>
        <StyledNavLink to="/login">
          <MdOutlineLogin style={{ width: '24px', height: '24px' }} /> LogIn
        </StyledNavLink>
      </StyledWrapper>
    </StyledNav>
  );
}
