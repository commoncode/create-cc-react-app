import styled from "styled-components";

const WideButton = styled.div`
  padding: ${({ theme }) => theme.space[3]}px ${({ theme }) => theme.space[4]}px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  height: 100%;
  display: flex;
  align-items: center;
`;

export default WideButton;
