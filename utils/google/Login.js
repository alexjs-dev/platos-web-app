import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { useRouter } from 'next/router';
import { FaGoogle } from 'react-icons/fa';
import GlassButton from '../../components/GlassButton';
import styled from 'styled-components';

// refresh token
import { refreshTokenSetup } from './utils/refreshToken';
import { CLIENT_ID } from './config';
const Round = styled.span`
  background: #352b73;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  width: 30px;
  height: 30px;
`;
function Login() {
  const onSuccess = (res) => {
    location.reload();
    localStorage.setItem('coins', Math.floor(Math.random() * (10 - 1 + 1)) + 1);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    alert(`Failed to login. 😢`);
  };

  const router = useRouter();

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: CLIENT_ID,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <GlassButton
      onPress={() => {
        signIn();
        router.push('/');
      }}
    >
      <Round><FaGoogle color="black"/></Round>
      <span>&nbsp;Sign in with Google</span>
    </GlassButton>
  );
}

export default Login;
