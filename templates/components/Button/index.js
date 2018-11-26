import styled from "styled-components";

const Button = styled.button`
  opacity: ${({ disabled }) => (disabled ? 0.25 : 1)};
  ${({ disabled }) => disabled && "cursor: not-allowed"};
  background: ${({ theme, color }) =>
    color && theme.colors[color] ? theme.colors[color] : theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  min-height: 3rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii[1]}px;
  text-decoration: none;
  border: 0;
  appearance: none;
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 0.5;
  }
`;

export default Button;
