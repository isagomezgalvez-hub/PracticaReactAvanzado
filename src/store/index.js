import { createStore, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../reducers";

const configureStore = ({ preloadedState }) => {
	const store = createStore(
		combineReducers(rootReducer),
		preloadedState, 
		composeWithDevTools());
	return store;
}
export default configureStore;