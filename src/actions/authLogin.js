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
