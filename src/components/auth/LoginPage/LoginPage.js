import React from 'react';
import T from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import usePromise from '../../../hooks/usePromise';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { authLogin } from '../../../actions/actions'

function LoginPage() {

  const { isPending: isLoading, error, execute, resetError } = usePromise();
  const dispatch = useDispatch();

  const handleSubmit = credentials => {
    dispatch(authLogin(credentials));
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
      
      {error && (
        <div onClick={resetError} style={{ color: 'red' }}>
          {error.message}
        </div>
      )}
    </div>
  );
}



export default LoginPage;
