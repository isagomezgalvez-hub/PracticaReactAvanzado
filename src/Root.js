import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router} from 'connected-react-router';
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
