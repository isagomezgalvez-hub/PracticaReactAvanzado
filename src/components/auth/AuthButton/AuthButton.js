import { Link } from 'react-router-dom';
import T from 'prop-types';

import { ConfirmationButton } from '../../shared';


//conectar el componente con Redux
import { connect } from 'react-redux';
import { getIsLogged } from '../../../store/selectors';
import { logoutAction } from '../../../actions/authLogin';

const AuthButton = ({ onLogout, isLogged }) => {
  const handleLogoutConfirm = async () => {
    onLogout()
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
  onLogout: T.func.isRequired,
  isLogged: T.bool,
};

AuthButton.defaultProps = {
  isLogged: false,
};

const mapStateToProps = (state)=>({
  isLogged:getIsLogged(state)
})

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logoutAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
