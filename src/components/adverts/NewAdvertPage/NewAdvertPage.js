import React from 'react';
import { Redirect } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';


import { getUi } from '../../../store/selectors';

import Layout from '../../layout';
import NewAdvertForm from './NewAdvertForm';
import { ProductCreateActions } from '../../../actions/productActions';
function NewAdvertPage() {

  const dispatch = useDispatch();
  const {error} = useSelector(getUi);

const handleSubmit = async newAdvert => {
    await dispatch(ProductCreateActions(newAdvert))

};

  if (error?.statusCode === 401) {
    return <Redirect to="/login" />;
  }

  
  return (
    <Layout>
      <NewAdvertForm onSubmit={handleSubmit} />
    </Layout>
  );
}



export default NewAdvertPage;
