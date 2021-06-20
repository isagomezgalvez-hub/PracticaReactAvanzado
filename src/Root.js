import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app'

function Root({store}) {
	
	return (
		<div>
			<Provider store={store}>
				<Router>
					<App/>
				</Router>
			</Provider>
		</div>
	)
}

export default Root;
