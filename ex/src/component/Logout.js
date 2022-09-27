import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '84255293678-4qaa5g6iu3l9m1gj0id7p1b5bu39mlis.apps.googleusercontent.com';


function Logout() {
  const onSuccess = () => {
    alert('Logout made successfully');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
