import { loginAction } from './authLogin';
import { AUTH_LOGIN_INIT, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE } from './types'

describe('loginAction', ()=>{
	 describe('When login api resolves',()=>{
		const credentials = 'credentials';
		const action = loginAction(credentials);
		const dispatch = jest.fn();
		const getState = ()=>{};
		const api = {
			authenticate: { login: jest.fn().mockResolvedValue()},
		};
		const history = {
			location: {},
			replace: jest.fn()
		};
		
		test('should dispatch a AUTH_LOGIN_INIT action',()=>{
			action(dispatch, getState, { api, history });
			expect(dispatch).toHaveBeenCalledWith({type: AUTH_LOGIN_INIT});
		})

		test('should call api.authenticate.login', () => {
			action(dispatch, getState, { api, history });
			expect(api.authenticate.login).toHaveBeenCalledWith(credentials);
		})

		test('should dispatch AUTH_LOGIN_SUCCESS action', async () => {
			await action(dispatch, getState, { api, history });
			expect(dispatch).toHaveBeenNthCalledWith(2, { type: AUTH_LOGIN_SUCCESS });
		})

		test('should redirect to /', async () => {
			await action(dispatch, getState, { api, history });
			expect(history.replace).toHaveBeenCalledWith({ pathname: '/' });
		})
	}) 

	describe('When login api throws', () => {
		const credentials = 'credentials';
		const action = loginAction(credentials);
		const dispatch = jest.fn();
		const getState = () => {};
		const error = 'Unauthorized';
		
		
		test('should dispatch AUTH_LOGIN_FAILURE action', async () => {
			const api = {
				authenticate: { login: jest.fn().mockRejectedValue(error) },
			};
			await action(dispatch, getState, { api });
			expect(dispatch).toHaveBeenNthCalledWith(2, { 
				type: AUTH_LOGIN_FAILURE, 
				payload:error, 
				error:true 
			});
		})

	
		
	})
	
})