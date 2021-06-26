import initialState from './initialState';
import {
	PRODUCT_TAGS_LOADED
} from '../actions/types';


export const tags = (state = initialState.tags, action) =>
	action.type === PRODUCT_TAGS_LOADED ? action.payload : state;