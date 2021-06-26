
import { productsLoadedInit, productsLoadedSuccess } from './productActions';
import { PRODUCT_LOADED_INIT, PRODUCTS_LOADED_SUCCESS } from './types';

describe('productsLoadedInit', ()=>{
	test('should return an productsLoadedInit Actions', ()=>{
		const expectActions = { type: PRODUCT_LOADED_INIT}
		const result = productsLoadedInit();
		expect(result).toEqual(expectActions)
	})
})


describe('productsLoadedSuccess', ()=>{
	test('should return productsLoadedSuccess Actions', ()=>{
		const adverts = 'products';
		const expectActions = { 
			type: PRODUCTS_LOADED_SUCCESS,
			payload: adverts
		}
		const result = productsLoadedSuccess(adverts);
		expect(result).toEqual(expectActions)
	})
})