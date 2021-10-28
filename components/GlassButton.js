import React from 'react';
import styled from 'styled-components';
import { AwesomeButton } from 'react-awesome-button';

const Wrapper = styled(AwesomeButton)`
  background: rgba(255, 255, 255, 0.2) !important;
  border-radius: 40px !important;
  backdrop-filter: blur(12px) !important;
  transition: all 0.2s ease-in-out !important;
  &:hover {
    opacity: 0.6;
  }
  .aws-btn__content {
    background: rgba(255, 255, 255, 0.3) !important;
    border-radius: 40px !important;
    span {
      color: #352b73;
      font-size: 18px;
    }
  }
  &:before,
  &:after {
    border-radius: 40px !important;
    backdrop-filter: blur(12px) !important;
    background: rgba(255, 255, 255, 0.3) !important;
  }
  .aws-btn__wrapper {
    background: rgba(255, 255, 255, 0.2) !important;
    border-radius: 40px !important;
    backdrop-filter: blur(12px) !important;
    &:before {
      backdrop-filter: blur(12px) !important;
      background: rgba(255, 255, 255, 0.3) !important;
      border-radius: 40px !important;
    }
    &:after {
      backdrop-filter: blur(12px) !important;
      background: rgba(255, 255, 255, 0.3) !important;
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
