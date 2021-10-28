import React from 'react';
import { useState } from 'react';
import GlassButton from './GlassButton';
import { useRouter } from 'next/router';
import { BiArch } from 'react-icons/bi';
import styled from 'styled-components';
import Logout from '../pages/login/google/Logout';
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link'

import { useGoogleLogin } from 'react-google-login';
import { CLIENT_ID } from '../pages/login/google/config';
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
const Name = 

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
      <div style={{marginTop: '10px'}}><BiArch color= "#352b73" size="2em"/></div>
      <div style={{alignSelf: 'end'}}>
        {profile ? (
          <>
            <Name>
              Hello &nbsp;
              {profile && profile.name} &nbsp;&nbsp;
            </Name>
            <Link href="/profile">
              <FaUserCircle  size="2em" color="#352b73" /> 
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
