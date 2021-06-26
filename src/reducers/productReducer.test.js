import { adverts} from './productsReducer';
import initialState from './initialState';
import { PRODUCTS_LOADED_SUCCESS, PRODUCT_DETAILS_SUCCESS} from '../actions/types';

describe('adverts', ()=>{
	test('should manage ANY actions',()=>{
		const state = initialState.adverts;
		const action = {type: 'ANY'};
		const nextState = adverts (state, action)
		expect(nextState).toBe(state)
	})

	test('should manage PRODUCTS_LOADED_SUCCESS', () => {
		
		const state = initialState.adverts;
		const action = { type: PRODUCTS_LOADED_SUCCESS, payload:[]};
		const expectedState = {
			...initialState.adverts,
			loaded:true, 
			data: action.payload
		}
		const nextState = adverts(state, action)
		expect(nextState).toEqual(expectedState)
	})

	test('should manage PRODUCT_DETAILS_SUCCESS action ', () => {

		const state = initialState.adverts;
		const advert = {}
		const action = { type: PRODUCT_DETAILS_SUCCESS, payload: advert };
		const expectedState = {
			...initialState.adverts,
			loaded: false,
			data: [advert]
		}
		const nextState = adverts(state, action)
		expect(nextState).toEqual(expectedState)
	})
})

