import styled from "styled-components";
import Card from "./index";

const SmallCard = styled(Card)`
  padding: 0px ${({ theme }) => theme.space[2]}px;
`;

export default SmallCard;
