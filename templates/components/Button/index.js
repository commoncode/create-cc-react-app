import styled from "styled-components";
import Clickable from "./Clickable";
import OutlineButton from "./OutlineButton";
import WideButton from "./WideButton";
import HideShowButton from "./HideShowButton";
import IconTextButton from "./IconTextButton";

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

export { Clickable, OutlineButton, WideButton, HideShowButton, IconTextButton };

export default Button;
