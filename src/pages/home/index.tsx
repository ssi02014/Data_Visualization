import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../../styles/common';
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 20px;
  }
`;

const Home = () => {
  return (
    <Container>
      <h1>알고리즘 데이터 시각화</h1>
      <Link to="/sort">
        <StyledButton>정렬(Sort)</StyledButton>
      </Link>
    </Container>
  );
};

export default Home;