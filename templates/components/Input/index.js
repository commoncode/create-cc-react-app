import styled from "styled-components";

const Input = styled.input`
  padding-left: ${({ theme }) => theme.space[2]}px;
  padding-right: ${({ theme }) => theme.space[2]}px;
  display: block;
  height: 3rem;
  border: 1px solid
    ${props =>
      props.isInvalid ? props.theme.colors.error : props.theme.colors.gray78};
  border-radius: ${({ theme }) => theme.radii[1]}px;
  width: 100%;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  -webkit-appearance: none;
`;

export default Input;
