import React from 'react';


import { useDispatch, useSelector } from 'react-redux';
import { CheckboxGroup } from '../../shared';

import { tagsActions } from '../../../actions/productActions';

import { getTags } from '../../../store/selectors';

function SelectTags(props) {
  const tags = useSelector(getTags)
  const dispatch = useDispatch(tags);


  React.useEffect(() => {
    dispatch(tagsActions(tags))
  }, [dispatch, tags]);

  return <CheckboxGroup options={tags} {...props} />;
}

export default SelectTags;





/* import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';


import { tagsActions } from '../../../actions/productActions';
import { getTags } from '../../../store/selectors';
import { CheckboxGroup } from '../../shared';


  function SelectTags({ onMount, ...props }) {
    
    React.useEffect(() => {
      onMount()
    }, [onMount]);

    return <CheckboxGroup {...props} />;

  }

  
SelectTags.propTypes = {
  onMount: T.func.isRequired,
};

const mapStateToProps = state => ({
  options: getTags(state),
});

const mapDispatchToProps = {
  onMount: tagsActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectTags); */