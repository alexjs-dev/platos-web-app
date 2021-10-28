import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { useRouter } from 'next/router'
import { FaGoogle } from 'react-icons/fa';
import GlassButton from '../../../components/GlassButton'

// refresh token
import { refreshTokenSetup } from './utils/refreshToken';
import { CLIENT_ID } from './config'
function Login() {
  const onSuccess = (res) => {
    location.reload()    
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    alert(
      `Failed to login. 😢`
    );
  };

  const router = useRouter()

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
    <GlassButton onPress={() => {
      signIn();
      router.push('/')
    }} >
      <FaGoogle/>
      <span>&nbsp;Sign in with Google</span>
    </GlassButton>
  );
}

export default Login;