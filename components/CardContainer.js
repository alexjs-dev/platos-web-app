import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  justify-content: center;
  align-items: center;
  /* center items */
  justify-items: center;
  grid-gap: 16px;
  width: 100%;
`;

const CardContainer = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default CardContainer;
