import React from 'react';
import Link from 'next/link';
import { BiArch } from 'react-icons/bi';
import styled from 'styled-components';

const Wrapper = styled.div`
  svg {
    color: white;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 1.5rem;
    font-size: 1.2rem;
  }
  background: #282a39;
  width: 100%;
  padding: 1rem 2rem;
  height: 280px;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  justify-content: center;
  align-items: center;
  place-content: center;
  place-items: center;
  position: relative;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 4rem 2rem 4rem 2rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    div {
      margin-bottom: 16px;
    }
    a {
      display: block;
      margin-bottom: 16px;
    }
  }
  span {
    color: white;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
      white-space: nowrap;
    }
  }
  a {
    color: white;
    font-weight: 300;
    &:hover {
      text-decoration: underline;
    }
    margin-bottom: 8px;
  }
  > div {
    display: flex;
    flex-direction: column;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <BiArch />
      <div>
        <Link href="/">More info</Link>
        <Link href="/">FAQ</Link>
        <Link href="/">About us</Link>
      </div>
      <div>
        <Link href="/">Buy crypto</Link>
        <Link href="/">Sell Pluto coin</Link>
        <Link href="/">About Pluto coin</Link>
      </div>
      <div>
        <Link href="/">Legal</Link>
        <Link href="/">Marketplace</Link>
        <Link href="/">More</Link>
      </div>
      <span>Copyright (c), all rights reserved</span>
    </Wrapper>
  );
};

export default Footer;
