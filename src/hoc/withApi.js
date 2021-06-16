import React from 'react';
import react from 'react';
import usePromise from '../hooks/usePromise';


function withApi(WrapperComponent, { initialData, apiCall }) {
	
	//crea un nuevo componente para añadir a git
	const WithApi = props => {
		const [error, setError] = useState(null)
		const [Loading, setIsLoading] = useState(false)
		const [data, setData] = React.useState([initialData])

		React.useEffect(()=>{
			setError(null)
			setIsLoading(true)
			apiCall()
			.then(data => setData(data))
			.then(() => setIsLoading(false))
			.catch(error => {
				setIsLoading(false);
				setError(error);
				});
			}, []);

		return <WrapperComponent 
		error={error}
		Loading={Loading}
		{...props} />;
	}
	return withApi
} 

export default withApi;