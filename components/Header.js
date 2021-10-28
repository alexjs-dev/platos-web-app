import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import GlassButton from './GlassButton';
import { useRouter } from 'next/router';
import { BiArch } from 'react-icons/bi';
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
const MarketIcon = styled.section`
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
  return (
    <Wrapper>
      <div style={{marginTop: '10px', marginLeft: "10px"}}>
        <Link href="/">
          <BiArch color= "#352b73" size="2em"/>
        </Link>
      </div>
      <div style={{alignSelf: 'end'}}>
          <MarketIcon><RiHandCoinFill color="#352b73"/></MarketIcon>
        {profile ? (
          <>
            <Name>
              Hello &nbsp;
              {profile && profile.name} &nbsp;&nbsp;
            </Name>
            <Link href="/profile">
              <FaUserCircle
                size="2em"
                color="#352b73"
                style={{ marginTop: '10px' }}
              />
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
