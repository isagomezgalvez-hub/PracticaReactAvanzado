import { 
	AUTH_LOGIN_INIT,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILURE,
	AUTH_LOGOUT } from './types';

import { login, logout } from '../api/auth';

//Action Creator

export const authLoginInit = ()=>{
	return{
		type: AUTH_LOGIN_INIT,
	}
}

export const authLoginSuccess = () => {
	return{
		type:AUTH_LOGIN_SUCCESS
	}
}

export const authLoginFailure = (error) => {
	return{
		type: AUTH_LOGIN_FAILURE,
		payload:error,
		error:true,
	}
}

export const authLogout = () => {
	return {
		type: AUTH_LOGOUT
	};
}

//Async Actions
export const loginAction = (credentials, history, location) => {
	return async function (dispatch, getState) {
		dispatch(authLoginInit());
		try {
			await login(credentials);
			dispatch(authLoginSuccess());
			// Redirect
			const { from } = history.location.state || { from: { pathname: '/' } };
			history.replace(from);
		} catch (error) {
			dispatch(authLoginFailure(error));
		}
	};
};


export const logoutAction = () => {
	return async function (dispatch, _getState) {
		await logout();
		dispatch(authLogout());
	};
};
