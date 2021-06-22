import React from 'react';


import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import { authLoginSuccess, authLoginInit, authLoginFailure } from '../../../actions/authLogin';
import { useHistory, useLocation } from 'react-router-dom';
import { getUI } from '../../../store/selectors';

function LoginPage() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const {error, loading} = useSelector(getUI);
  
  const handleSubmit = async credentials=> {
    dispatch(authLoginInit())
    try {
      const { from } = location.state || { from: { pathname:'/'} };
      await LoginPage(credentials)
      dispatch(authLoginSuccess())
      history.replace(from)
      
    } catch (error) {
      dispatch(authLoginFailure(error));
    }
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
