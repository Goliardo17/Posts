import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const LinkStyle = css`
  font-size: 16px;
  text-decoration: none;
  color: black;
  align-items: center;

  &.active {
    color: darkred;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const SimpleLink = styled(Link)`
  ${LinkStyle}
`;

export const NavigationLink = styled(NavLink)`
  ${LinkStyle}
`;