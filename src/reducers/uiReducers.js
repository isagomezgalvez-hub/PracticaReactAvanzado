import initialState from './initialState';

import {
	AUTH_LOGIN_INIT,
	AUTH_LOGIN_SUCCESS,
	PRODUCTS_LOADED_SUCCESS,
	PRODUCT_LOADED_INIT,
	PRODUCT_CREATED_INIT,
	PRODUCT_CREATED_SUCCESS,
	RESET_ERROR,

} from '../actions/types'

function ui(state=initialState.ui, action) {
	if(action.error ){
		return {
			...state,
			loading: false,
			error: action.payload
		}
	}
	switch (action.types) {
		case AUTH_LOGIN_INIT:	
		case PRODUCT_LOADED_INIT:
		case PRODUCT_CREATED_INIT:
			return {
				...state,
				loading: true,
				error: null,
			}
		case AUTH_LOGIN_SUCCESS:
		case PRODUCTS_LOADED_SUCCESS:
		case PRODUCT_CREATED_SUCCESS:
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