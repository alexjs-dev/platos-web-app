import React from 'react';
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GlassButton from './GlassButton';
import { useRouter } from 'next/router';
import { ContextApi } from '../state/ContextApi';
import { FaUserCircle } from 'react-icons/fa';
import { RiHandCoinFill } from 'react-icons/ri';
import styled from 'styled-components';
import { useGoogleLogin } from 'react-google-login';
import { CLIENT_ID } from '../utils/google/config';
// svg {
//   color: #352b73;
//   position: absolute;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   top: 50%;
//   font-size: 2rem;
// }
const Wrapper = styled.div`
  background: #f3f3f3;
  border-bottom: 1px solid #e6e6e6;
  width: 100%;
  padding: 0.5rem;
  height: 80px;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 10;
  justify-content: space-between;
  a {
    color: white;
    font-weight: 300;
    &:hover {
      text-decoration: underline;
    }
  }
  > div {
    display: flex;
  }
`;
const Name = styled.h2`
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Tokens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  overflow: visible !important;
  span {
    overflow: visible !important;
  }
  img {
    transition: all 0.3s ease;
    transform: ${(props) => (props.animated && 'scale(1.5)') || 'scale(1)'};
  }
`;
const MarketIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  width: 52px;
  cursor: pointer;
  border-radius: 50%;
  margin: 0 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(7.5px);
    -webkit-backdrop-filter: blur(7.5px);
  }
  svg {
    position: unset;
    font-size: 22px !important;
    transform: unset;
  }
`;

const Header = () => {
  useGoogleLogin({
    clientId: CLIENT_ID,
    isSignedIn: true,
    fetchBasicProfile: true,
    onSuccess: (res) => {
      setProfile(res.profileObj);
    },
  });
  const [profile, setProfile] = useState();
  const router = useRouter();
  const [coins, setCoins] = useState();
  const context = useContext(ContextApi);
  console.log('context', context);
  const $event = context.data.event;
  // play animations state
  const [animated, setAnimated] = useState(false);
  $event.useSubscription((event) => {
    if (event.type === 'purchase') {
      const coinVal = localStorage.getItem('coins');
      setCoins(coinVal);
      setAnimated(true);
      setTimeout(() => {
        setAnimated(false);
      }, 500);
    }
  });
  useEffect(() => {
    const coinVal = localStorage.getItem('coins');
    setCoins(coinVal);
  }, [coins]);
  return (
    <Wrapper>
      <div style={{ marginTop: '5px', marginLeft: '10px' }}>
        <Link href="/">
          <a>
            <img width="100px" src="Logo.png" alt="logo"></img>
          </a>
        </Link>
      </div>
      <div style={{ alignSelf: 'end', overflow: 'visible' }}>
        <Link href="/market">
          <MarketIcon>
            <RiHandCoinFill color="#352b73" />
          </MarketIcon>
        </Link>

        {profile ? (
          <>
            <Tokens animated={animated}>
              {coins} x&nbsp;
              <Image src="/coin.png" width={20} alt="Coin" height={20} />
            </Tokens>
            <Link href="/profile">
              <a>
                <FaUserCircle
                  size="2em"
                  color="#352b73"
                  style={{ marginTop: '10px' }}
                />
              </a>
            </Link>
          </>
        ) : (
          <GlassButton
            onPress={() => router.push('/login')}
            style={{ marginBottom: 8 }}
          >
            Login
          </GlassButton>
        )}
      </div>
    </Wrapper>
  );
};

export default Header;
