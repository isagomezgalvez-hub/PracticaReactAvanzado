import React from 'react';
import T from 'prop-types';

export default function ApiCall({initialData, ApiCall, children }) {

	const [error, setError] = React.useState(null);
	const [isLoading, setisLoading] = React.useState(false);
	const [data, setData] = React.useState(initialData);

	React.useEffect(()=>{
		setError(null);
		setisLoading(true)
		ApiCall()
		.then((data) =>setData(data))
		.then(()=>setisLoading(false))
		.catch(error =>{ 
			setisLoading(false)
			setError(error)
		})
	}, [])

	return children({error, isLoading, data})
}


ApiCall.prototype = {
	children: T.func.required,
}