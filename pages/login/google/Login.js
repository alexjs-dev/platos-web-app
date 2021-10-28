import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { AwesomeButton } from 'react-awesome-button';
import { useRouter } from 'next/router'

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
    <AwesomeButton onPress={() => {
      signIn();
      router.push('/')
    }} >
      {/* <img src="icons/google.svg" alt="google login" className="icon"></img> */}
      <span>Sign in with Google</span>
    </AwesomeButton>
  );
}

export default Login;