import React from 'react';


import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

import { authLogin } from '../../../actions/authLogin';

function LoginPage() {
  const dispatch = useDispatch();
  
  const handleSubmit = ()=> {
    dispatch(authLogin());
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
     {/*  {isLoading && <p>...login in nodepop</p>}
      {error && (
        <div onClick={resetError} style={{ color: 'red' }}>
          {error.message}
        </div>
      )} */}
    </div>
  );
}

export default LoginPage;
