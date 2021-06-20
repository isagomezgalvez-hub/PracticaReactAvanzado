import initialState from './initialState';

import { 
	PRODUCTS_SUCCESS, 
	PRODUCT_CREATED
} from '../actions/types'

function productReducer(state=initialState.products, action){
	switch (action.type) {
		case PRODUCTS_SUCCESS:
			return {
				...state,
				products:action.payload
			};
	
		case PRODUCT_CREATED:
			return{
				...state,
				products: [...state.products, action.payload.product] //añadir elemento al array
			}
		default: return state
	}
}

export default productReducer;