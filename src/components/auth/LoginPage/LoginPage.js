import React from 'react';


import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { loginAction } from '../../../actions/authLogin';
import { ResetError } from '../../../actions/uiActions';
import { getUi } from '../../../store/selectors';
import LoginForm from './LoginForm';


function LoginPage() {

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  
  const {loading, error } = useSelector(getUi);
  
  const handleSubmit = credentials=> {
    dispatch(loginAction(credentials, history, location))
  };

  const handleResetError = () => {
    dispatch(ResetError());
  };


  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
      {loading && <p>...login in nodepop</p>}
      {error && (
        <div onClick={handleResetError} style={{ color: 'red' }}>
          {error.message}
        </div>
      )}  
    </div>
  );
}

export default LoginPage;
