import { 
	PRODUCTS_SUCCESS,
	PRODUCT_CREATED
} from './types';


export const productsSuccess = (products)=>{
	return{
		type:'PRODUCTS_SUCCESS',
		payload: products
	}
}



export const productCreated = (product) => {
	return {
		type: 'PRODUCT_CREATED',
		payload: product
	}
}
