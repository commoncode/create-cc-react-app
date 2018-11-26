import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray95};
  padding-left: ${({ theme }) => theme.space[2]}px;
  padding-right: ${({ theme }) => theme.space[2]}px;
`;

const Home = () => (
  <Container>You should not be able to access this page.</Container>
);

export default Home;
