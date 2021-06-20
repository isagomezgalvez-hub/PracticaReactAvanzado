import initialState from './initialState';

import { 
	PRODUCTS_FAILURE, 
	PRODUCTS_SUCCESS, 
	PRODUCTS_INIT 
} from '../actions/types'

function productReducer(state=initialState, action){
	switch (action.type) {
		case PRODUCTS_SUCCESS:
			return {
				...state,
				products:action.payload
			};
		case PRODUCTS_FAILURE:
			return{
				...state,
				products:null,
			};
		default: return state
	}
}

export default productReducer;