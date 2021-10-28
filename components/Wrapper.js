import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 2rem;
  position: relative;
  z-index: 0;
  width: 100%;
  margin-bottom: 200px;
  > h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  @media screen and (max-width: 768px) {
    > svg {
      display: block;
    }
  }
`;

const MobileWrapper = styled.div`
  display: none;
`;

const Wrapper = ({ content, background, title }) => {
  return (
    <>
      <Container>
        <h1>{title}</h1>
        {content}
        {background && background}
      </Container>
      {background && <MobileWrapper>{background}</MobileWrapper>}
    </>
  );
};

export default Wrapper;
