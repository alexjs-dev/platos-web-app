import React from 'react';
import { useState } from 'react';
import GlassButton from './GlassButton';
import { useRouter } from 'next/router';
import { BiArch } from 'react-icons/bi';
import styled from 'styled-components';
import Logout from '../pages/login/google/Logout';

import { useGoogleLogin } from 'react-google-login';
import { CLIENT_ID } from '../pages/login/google/config';

const Wrapper = styled.div`
  svg {
    color: #352b73;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    font-size: 1.2rem;
  }
  background: #f3f3f3;
  border-bottom: 1px solid #e6e6e6;
  width: 100%;
  padding: 0.5rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
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
      <BiArch />
      <div>
        {profile ? (
          <>
            <h1>
              Hello &nbsp;
              {profile && profile.name}
            </h1>
            <Logout
              clear={() => {
                setProfile(null);
              }}
            />
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
