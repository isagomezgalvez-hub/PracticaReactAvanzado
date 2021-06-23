import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import auth from "../reducers/authReducer";
import products from "../reducers/authReducer";
import ui from "../reducers/authReducer";


const middleware = [thunk];

const configureStore = ({ preloadedState }) => {
	const store = createStore(
		combineReducers({ auth, products, ui}),
		preloadedState, 
		composeWithDevTools(applyMiddleware(...middleware)));
	return store;
}
export default configureStore;