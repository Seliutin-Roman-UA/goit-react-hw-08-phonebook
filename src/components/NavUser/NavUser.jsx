import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import {
  StyledNav,
  StyledWrapper,
  StyledP,
  StyledNavLink,
} from './NavUser.styled';
import { MdContactPhone, MdOutlineLogout } from 'react-icons/md';

export function NavUser() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const userLogOut = () => dispatch(logOut());

  return (
    <StyledNav>
      <StyledNavLink to="/contacts">
        <MdContactPhone style={{ width: '24px', height: '24px' }} /> Contacts
      </StyledNavLink>
      <StyledWrapper>
        <StyledP>{`Hello, ${user.name} (${user.email})`}</StyledP>
        <StyledNavLink to="/" onClick={userLogOut}>
          <MdOutlineLogout style={{ width: '24px', height: '24px' }} /> LogOut
        </StyledNavLink>
      </StyledWrapper>
    </StyledNav>
  );
}
