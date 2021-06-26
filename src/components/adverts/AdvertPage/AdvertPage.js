import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../layout';
import AdvertDetail from './AdvertDetail';


import { ProductDetailsActions, ProductDeleteActions } from '../../../actions/productActions';
import { getAdvertDetail, getUi } from '../../../store/selectors';

function AdvertPage() {
  const dispatch = useDispatch();
  const { advertId } = useParams();
 
  const {error} = useSelector(getUi);
  const advert = useSelector(state => getAdvertDetail(state, advertId))

  

  React.useEffect(() => {
    dispatch(ProductDetailsActions(advertId))
  }, [dispatch,advertId]);

  const handleDelete = () => {
    dispatch(ProductDeleteActions(advertId))
  };

  if (error?.statusCode === 401) {
    return <Redirect to="/login" />;
  }

  if (error?.statusCode === 404) {
    return <Redirect to="/404" />;
  }

  return (
    <Layout>
      {advert && <AdvertDetail {...advert} onDelete={handleDelete} />}
    </Layout>
  );
}

export default AdvertPage;
