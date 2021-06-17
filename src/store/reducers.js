
import { AUTH_LOGIN, AUTH_LOGOUT} from '../actions/types';


const InitialState = {
	auth: false
	/* products: [],
	ui:{} */
}



function reducer(state = InitialState, action){
	switch (action.type){
		case AUTH_LOGIN:
			return {
				...state,
				auth:true,
			}

		case AUTH_LOGOUT:
			return{
				...state,
				auth:false
			}

		default:
			return state;
	}

}

export default reducer;