import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const StyledWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
export const StyledNavLink = styled(NavLink)`
  font-weight: bold;
  padding: 5px;
  &.active {
    color: rgb(236, 120, 0);
    background: linear-gradient(
      180deg,
      rgba(27, 0, 49, 0.5),
      rgba(27, 0, 49, 0.2)
    );
  }

  &:hover,
  :focus {
    color: rgb(236, 120, 0);
  }
`;
