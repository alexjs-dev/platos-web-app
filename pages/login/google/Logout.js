import React from 'react';
import { useGoogleLogout,  } from 'react-google-login';
import { CLIENT_ID } from './config';
import { AwesomeButton } from 'react-awesome-button';

const clientId = CLIENT_ID;

function Logout() {
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
    <AwesomeButton  onPress={()=> {
     signOut()
    }} >
      Sign out
    </AwesomeButton>
  );
}

export default Logout;