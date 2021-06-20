import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from "../reducers/authReducer";

const configureStore = ({preloadedState}) => {
	const store = createStore(authReducer, preloadedState, composeWithDevTools());
	return store;
}

export default configureStore;