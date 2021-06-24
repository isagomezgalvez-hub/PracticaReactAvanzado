import { 
	AUTH_LOGIN_INIT,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILURE,
	AUTH_LOGOUT } from './types';



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
export const loginAction = credentials => {
	return async function (dispatch, getState, {api, history}) {
		dispatch(authLoginInit());
		try {
			await api.authenticate.login(credentials);
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
	return async function (dispatch, _getState, { api }) {
		await api.authenticate.logout();
		dispatch(authLogout());
	};
};
