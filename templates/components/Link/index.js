import styled, { css } from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

const linkStyles = css`
  font-size: ${({ theme }) => theme.fontSizes.beta}px;
  line-height: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme, color }) =>
    color && theme.colors[color] ? theme.colors[color] : theme.colors.gray40};
`;

const Link = styled(ReactRouterLink)`
  ${linkStyles};
`;

const ExternalLink = styled.a`
  ${linkStyles};
`;

const UnstyledLink = styled.a`
  &,
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

export { Link, ExternalLink, UnstyledLink };
