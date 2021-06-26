import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import auth from "../reducers/authReducer";
import { adverts } from "../reducers/productsReducer";
import {tags} from '../reducers/tagsReducer'
import ui from "../reducers/uiReducers";


import * as authenticate from '../api/auth';
import * as products from '../api/adverts';

const api = {
	authenticate,
	products,
}
const logger = createLogger()


const configureStore = ({ preloadedState, history }) => {
	const middleware = [
		routerMiddleware(history),
		thunk.withExtraArgument({ api, history }), 
		logger
	];
	const store = createStore(
		combineReducers({ auth, adverts,tags, ui, router: connectRouter(history)}),
		preloadedState, 
		composeWithDevTools(applyMiddleware(...middleware)));
	return store;
}
export default configureStore;