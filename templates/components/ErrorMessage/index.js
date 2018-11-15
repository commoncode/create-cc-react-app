import React from "react";
import styled from "styled-components";

const Wrapper = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.alpha}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.error};
  line-height: 1.5rem;
  visibility: ${props => (props.visible ? "visible" : "hidden")};
`;

const ErrorMessage = ({ children, ...rest }) => (
  // If no error message present, still render some text
  // this is done to reserve the space in the dom for the error message
  <Wrapper {...rest}>{children || "hidden text"}</Wrapper>
);

export default ErrorMessage;
