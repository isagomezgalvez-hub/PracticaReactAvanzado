import initialState from './initialState';

import {
	AUTH_LOGIN_INIT,
	AUTH_LOGIN_SUCCESS,
	RESET_ERROR,
} from '../actions/types'

function ui(state = initialState.ui, action) {
	if(action.error ){
		return {
			...state,
			loading: false,
			error: action.payload
		}
	}
	switch (action.types) {
		case AUTH_LOGIN_INIT:
			return {
				...state,
				loading:true,
				error: null,
			}
		case AUTH_LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
			}
		case RESET_ERROR:
			return{
				...state,
				error:null,
			}
		default: return state
		}
}

export default ui;