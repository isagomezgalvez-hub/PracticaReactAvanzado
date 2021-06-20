import { combineReducers } from "redux";

import authReducer from './authReducer';
import productReducer from "./productsReducer";
import uiReducer from "./uiReducers";


const rootReducer = ({
	auth: authReducer,
	products: productReducer,
	ui: uiReducer
});

export default rootReducer;