import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'

import authReducer from './authReducer';
import productReducer from "./productsReducer";


const rootReducer = combineReducers({
	routing: routerReducer,
	authReducer,
	productReducer,
})

export default rootReducer;