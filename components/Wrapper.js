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
    > svg {
      display: none;
    }
  }
`;

const MobileWrapper = styled.div`
  display: none;
  width: 50vw;
  height: 50vw;
  position: absolute;
  svg {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Wrapper = ({ content, background }) => {
  return (
    <>
      <Container className="wrapper">
        {content}
        {background && background}
      </Container>
      {background && <MobileWrapper>{background}</MobileWrapper>}
    </>
  );
};

export default Wrapper;
