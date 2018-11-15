import styled from "styled-components";
import Card from "./index";

const LargeCard = styled(Card)`
  flex-direction: row;
  padding: ${({ theme }) => theme.space[4]}px ${({ theme }) => theme.space[2]}px;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[0]}px) {
    padding-left: ${({ theme }) => theme.space[4]}px;
    padding-right: ${({ theme }) => theme.space[4]}px;
  }
  width: 100%;
`;

export default LargeCard;
