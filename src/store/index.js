import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import auth from "../reducers/authReducer";
import products from "../reducers/authReducer";
import ui from "../reducers/authReducer";

import * as authenticate from '../api/auth';
import * as adverts from '../api/adverts';

const api = {
	authenticate,
	adverts,
}
const logger = createLogger()


const configureStore = ({ preloadedState, history }) => {
	const middleware = [thunk.withExtraArgument({ api, history }), logger];
	const store = createStore(
		combineReducers({ auth, products, ui}),
		preloadedState, 
		composeWithDevTools(applyMiddleware(...middleware)));
	return store;
}
export default configureStore;