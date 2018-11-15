import styled from "styled-components";
import Card from "./index";

const RowCard = styled(Card)`
  padding: ${({ theme }) => theme.space[1]}px;
  flex-direction: row;
  align-items: center;
`;

export default RowCard;
