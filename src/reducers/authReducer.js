import initialState from './initialState';
import { AUTH_LOGOUT, AUTH_LOGIN } from '../actions/types'

function authReducer(state=initialState.auth, action){
	switch (action.type) {
		case AUTH_LOGIN:
			return {
				...state,
				auth:true
			};
		case AUTH_LOGOUT:
			return {
				...state,
				auth: false
			};
		default:return state
	}
}

export default authReducer;