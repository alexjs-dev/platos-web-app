import React from 'react';
import styled from 'styled-components';
import { AwesomeButton } from 'react-awesome-button';

const Wrapper = styled(AwesomeButton)`
  background: rgba(255, 255, 255, 0.2) !important;
  border-radius: 40px !important;
  backdrop-filter: blur(12px) !important;
  .aws-btn__content {
    background: rgba(255, 255, 255, 0.3) !important;
    backdrop-filter: blur(12px) !important;
    border-radius: 40px !important;
    span {
      color: #352b73;
      font-size: 18px;
    }
  }
  &:before {
    border-radius: 40px !important;
  }
  .aws-btn__wrapper {
    background: rgba(255, 255, 255, 0.2) !important;
    backdrop-filter: blur(12px) !important;
    border-radius: 40px !important;
    &:before {
      background: rgba(255, 255, 255, 0.3) !important;
      backdrop-filter: blur(12px) !important;
      border-radius: 40px !important;
    }
    &:after {
      background: rgba(255, 255, 255, 0.3) !important;
      backdrop-filter: blur(12px) !important;
      border-radius: 40px !important;
    }
  }
`;

const GlassButton = (props) => {
  return (
    <Wrapper type="primary" {...props}>
      {props.children}
    </Wrapper>
  );
};

export default GlassButton;
