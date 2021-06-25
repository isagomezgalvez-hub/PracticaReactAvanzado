import {
	PRODUCT_LOADED_INIT,
	PRODUCTS_LOADED_SUCCESS,
	PRODUCTS_LOADED_FAILURE,
	PRODUCT_CREATED_INIT,
	PRODUCT_CREATED_SUCCESS,
	PRODUCT_CREATED_FAILURE
} from './types';

import { getAdvertsLoaded } from '../store/selectors';

export const productsLoadedInit = () => {
	return {
		type:PRODUCT_LOADED_INIT
	}
}

export const productsLoadedSuccess = (adverts)=>{
	return{
		type:PRODUCTS_LOADED_SUCCESS,
		payload: adverts
	}
}
export const productsLoadedFailure = (error) => {
	return {
		type: PRODUCTS_LOADED_FAILURE,
		payload: error,
		error:true,
	}
}


export const ProductLoadActions = ()=> {
	return async function(dispatch, getState, {api}){
		const advertLoaded = getAdvertsLoaded(getState())
		if (advertLoaded) {
			return;
		}
		dispatch(productsLoadedInit())
		try {
			const adverts = await api.products.getAdverts();
			dispatch(productsLoadedSuccess(adverts));
			return adverts;
		} catch (error) {
			dispatch(productsLoadedFailure(error))
		}
	}
}

export const productCreatedInit = () => {
	return {
		type: PRODUCT_CREATED_INIT,
	}
}

export const productCreatedSuccess = (advert) => {
	return {
		type: PRODUCT_CREATED_SUCCESS,
		payload: advert
	}
}

export const productCreatedFailure = (error) => {
	return {
		type: PRODUCT_CREATED_FAILURE,
		payload: error,
		error:true,
	}
}

export const ProductCreateActions = advert =>{
	return async function (dispatch, getState, { api, history }){
		dispatch(productCreatedInit())
		try {
			const createAdvert = await api.products.createAdvert(advert);
			dispatch(productCreatedSuccess(createAdvert));
			history.push(`/adverts/${createAdvert.id}`);
			return createAdvert;

		} catch (error) {
			dispatch(productCreatedFailure(error))
		}
	}
}