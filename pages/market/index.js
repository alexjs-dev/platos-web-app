import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  min-height: 100vh;
  background: linear-gradient(360deg, #b9fbff 0%, #d1c9f1 100%);
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Market = () => {
  return <Wrapper>Market</Wrapper>;
};

export default Market;
