import initialState from './initialState';
import { 
	AUTH_LOGOUT,
	AUTH_LOGIN_SUCCESS
} from '../actions/types'

function auth(state=initialState.auth, action){
	switch (action.type) {
		case AUTH_LOGIN_SUCCESS:
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

export default auth;