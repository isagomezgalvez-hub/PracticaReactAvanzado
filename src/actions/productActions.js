import {
	PRODUCT_LOADED_INIT,
	PRODUCTS_LOADED_SUCCESS,
	PRODUCTS_LOADED_FAILURE,
	PRODUCT_CREATED_INIT,
	PRODUCT_CREATED_SUCCESS,
	PRODUCT_CREATED_FAILURE,
	PRODUCT_DETAILS_INIT,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAILURE,
	PRODUCT_DELETE_INIT,
	PRODUCT_DELETE_SUCCESS,
	PRODUCT_DELETE_FAILURE,
	PRODUCT_TAGS_LOADED

} from './types';

import { getAdvertsLoaded, getAdvertDetail, getTagsLoaded } from '../store/selectors';

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

export const productDetailsInit = () => {
	return {
		type: PRODUCT_DETAILS_INIT,
	}
}

export const productDetailsSuccess = (advertID) => {
	return {
		type: PRODUCT_DETAILS_SUCCESS,
		payload:advertID
	}
}

export const productDetailsFailure = (error) => {
	return {
		type: PRODUCT_DETAILS_FAILURE,
		payload:error,
		error:true,
	}
}

export const ProductDetailsActions = advertId => {
	return async function (dispatch, getState, { api }) {
		const advertDetailLoad = getAdvertDetail(getState(), advertId);
		if (advertDetailLoad) {
			return;
		}
		dispatch(productDetailsInit())
		try {
			const advertDetail = await api.products.getAdvert(advertId);
			dispatch(productDetailsSuccess(advertDetail));
			return advertDetail;

		} catch (error) {
			dispatch(productDetailsFailure(error))
		}
	}
}

export const productDeleteInit = () => {
	return {
		type: PRODUCT_DELETE_INIT,
	}
}

export const productDeleteSuccess = (advertId) => {
	return {
		type: PRODUCT_DELETE_SUCCESS,
		payload:advertId,
	}
}

export const productDeleteFailure = (error) => {
	return {
		type: PRODUCT_DELETE_FAILURE,
		payload: error,
		error:true,
	}
}

export const ProductDeleteActions = advertId => {
	return async function (dispatch, getState, { api, history }){
		dispatch(productDeleteInit())
		try {
			const deleteAdvert = await api.products.deleteAdvert(advertId);
			dispatch(productDeleteSuccess(deleteAdvert));
			history.push('/');
		} catch (error) {
			dispatch(productDeleteFailure(error))
		}
	}
}

export const tagsLoaded = tags => {
	return {
		type: PRODUCT_TAGS_LOADED,
		payload: tags,
	}
}


export const tagsActions= () => {
	return async function (dispatch, getState, { api }) {
		if (getTagsLoaded(getState())) {
			return;
		}
		const tags = await api.products.getTags();
		dispatch(tagsLoaded(tags));
		return tags;
	}
}

