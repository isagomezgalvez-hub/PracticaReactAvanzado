import initialState from './initialState';

import { 
	PRODUCTS_LOADED_SUCCESS,
	PRODUCT_CREATED_SUCCESS,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DELETE_SUCCESS,
} from '../actions/types'

export const adverts = (state = initialState.adverts, action) => {

	switch (action.type) {
		case PRODUCTS_LOADED_SUCCESS:
			return { 
				...state, 
				loaded: true, 
				data: action.payload 
			};
		case PRODUCT_CREATED_SUCCESS:
		case PRODUCT_DETAILS_SUCCESS:
			return{
				...state,
				loaded:false,
				data: [...state.data, action.payload],
			}
		case PRODUCT_DELETE_SUCCESS:
			return {
				...state,
				data: state.data.filter((advert) => advert.id !== action.payload),
			};

		default:
			return state;
	}
};