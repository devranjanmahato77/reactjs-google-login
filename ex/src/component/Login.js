import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '84255293678-4qaa5g6iu3l9m1gj0id7p1b5bu39mlis.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log(res.profileObj);
  
};

  const onFailure = (res) => {
    console.log(res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
