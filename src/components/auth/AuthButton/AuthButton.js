import { Link } from 'react-router-dom';
import T from 'prop-types';
import { connect } from 'react-redux';
import getIsLogged from '../../../store/selectors';

import { ConfirmationButton } from '../../shared';
import { logout } from '../../../api/auth';
import { authLogout } from '../../../actions/actions';

const AuthButton = ({ onLogout, isLogged }) => {
  const handleLogoutConfirm = () => {
   onLogout();
  };

  return isLogged ? (
    <ConfirmationButton
      confirmation="Are you sure?"
      onConfirm={handleLogoutConfirm}
    >
      Logout
    </ConfirmationButton>
  ) : (
    <Link to="/login">Login</Link>
  );
};

AuthButton.propTypes = {
  handleLogout: T.func.isRequired,
  isLogged: T.bool,
};

AuthButton.defaultProps = {
  isLogged: false,
};


const mapStateToProps = state =>({isLogged: getIsLogged(state)})
const mapDispatchToProps = {
  onLogout: authLogout,
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
