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
  align-items: center;
`;
export const StyledP = styled.p`
margin: 0;
`;
export const StyledNavLink = styled(NavLink)`
  font-size: 12px;
  font-weight: 400;
  padding: 5px;
  color: rgb(156, 39, 176);
  fill: rgb(156, 39, 176);
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  border-radius: 4px;
  &.active {
    background-color: rgba(156, 39, 176, 0.2);
  }

  &:hover,
  :focus {
    background-color: rgba(156, 39, 176, 0.2);
  }
`;

