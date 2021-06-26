import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../layout';
import FiltersForm from './FiltersForm';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';
import storage from '../../../utils/storage';

import { ProductLoadActions } from '../../../actions/productActions';
import { getAdverts, getUi } from '../../../store/selectors';
import { defaultFilters, filterAdverts } from './filters';


const getFilters = () => storage.get('filters') || defaultFilters;
const saveFilters = filters => storage.set('filters', filters);

function AdvertsPage() {
  
  const { error } = useSelector(getUi);
  const adverts = useSelector(getAdverts)
 

  const dispatch = useDispatch();
  const [filters, setFilters] = React.useState(getFilters);

  React.useEffect(() => {
   dispatch(ProductLoadActions(adverts));
  },[dispatch, adverts]);

  React.useEffect(() => {
    saveFilters(filters);
  }, [filters]);

   if (error?.statusCode === 401) {
    return <Redirect to="/login" />;
  } 
  
  const filteredAdverts = filterAdverts(adverts, filters);

  return (
    
    <Layout>
     {adverts.length > 0 && (
        <FiltersForm
          initialFilters={filters}
          defaultFilters={defaultFilters}
          prices={adverts.map(({ price }) => price)}
          onFilter={setFilters}
        />
      )}
      {filteredAdverts.length ? (
        <AdvertsList adverts={filteredAdverts} />
      ) : (
          <EmptyList advertsCount={adverts.length} />
      )} 
    </Layout> 
  );
}

export default AdvertsPage;
