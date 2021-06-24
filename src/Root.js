import React from 'react';
import { Provider } from 'react-redux';
import { Router  } from 'react-router-dom';

import App from './components/app'

function Root({store, history}) {
	
	return (
		<div>
			<Provider store={store}>
				<Router history={history}>
					<App />
				</Router>
			</Provider>
		</div>
	)
}

export default Root;
