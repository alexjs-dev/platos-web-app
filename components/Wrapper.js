import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 2rem;
  position: relative;
  z-index: 0;
  width: 100%;
  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  @media screen and (max-width: 768px) {
  }
`;

const Wrapper = ({ content, background }) => {
  return (
    <Container className="wrapper">
      {content}
      {background && background}
    </Container>
  );
};

export default Wrapper;
