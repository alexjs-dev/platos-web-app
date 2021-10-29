import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  margin: 16px 0;
  z-index: 1;
  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    z-index: 2;
    transform: translateY(-50%);
  }
  input {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(7.5px);
    -webkit-backdrop-filter: blur(7.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    outline: none;
    border: none;
    font-size: 18px;
    padding: 0 16px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const AutoComplete = styled.div`
  width: 100%;
  height: 300px;
  overflow: auto;
  position: absolute;
  bottom: -8px;
  padding: 16px;
  transform: translate(0, 100%);
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  outline: none;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.2s linear;
  transition: visibility 0.2s linear;
  div {
    padding: 8px;
    border-radius: 8px;
    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }
`;

const Search = (props) => {
  const [value, setValue] = useState('');
  return (
    <Container>
      <BsSearch />
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value && value.length > 0 && (
        <AutoComplete>
          <div>Pen (0.5)</div>
          <div>Lunch with Maarja (500)</div>
          <div>Respect from Roman (900)</div>
          <div>Freddo 10 EUR coupon (90)</div>
          <div>Dodo pizza 10 EUR coupon (90)</div>
          <div>Day off (900)</div>
          <div>Winning a trip to Croatia (900)</div>
          <div>Crypto advise from Tim (1000)</div>
          <div>Betting suggestions from Joe (priceless)</div>
        </AutoComplete>
      )}
    </Container>
  );
};

export default Search;
