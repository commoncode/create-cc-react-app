import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.gray40};
  border: 1px solid ${({ theme }) => theme.colors.gray78};
  border-radius: ${({ theme }) => theme.radii[2]}px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  padding: ${({ theme }) => theme.space[3]}px ${({ theme }) => theme.space[2]}px;
  margin: ${({ theme }) => theme.space[1]}px;
  ${props => (props.width ? `width: ${props.width}` : "")};
`;

export default Card;
