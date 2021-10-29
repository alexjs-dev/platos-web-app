import React from 'react';
import { useGoogleLogout,  } from 'react-google-login';
import { CLIENT_ID } from './config';
import GlassButton from '../../components/GlassButton'

const clientId = CLIENT_ID;

function Logout({clear, style={}}) {
  const onLogoutSuccess = () => {
   location.reload()    
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <GlassButton  onPress={()=> {
      clear();
      signOut()
    }} style={{...style}} >
      Sign out
    </GlassButton>
  );
}

export default Logout;