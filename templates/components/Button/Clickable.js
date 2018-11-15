import styled from "styled-components";

const Clickable = styled.button`
  border: 0;
  padding: 0;
  margin: 0;
  border-radius: 0;
  background: inherit;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  white-space: nowrap;
  text-decoration: none;
  -webkit-appearance: initial;
  outline: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  touch-action: manipulation;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
`;

export default Clickable;
