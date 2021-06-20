import { 
	PRODUCTS_INIT,
	PRODUCTS_SUCCESS,
	PRODUCTS_FAILURE
} from './types';


export const productsSuccess = (products)=>{
	return{
		type:'PRODUCTS_SUCCESS',
		payload: products
	}
}

export const productsFailure = (error) => {
	return {
		type: 'PRODUCTS_FAILURE',
		payload: error
	}
}
