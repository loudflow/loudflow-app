import { navigate } from "gatsby"

import React from "react"
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, location, ...rest }) => {

  const isLoggedIn = false;

  React.useEffect(
    () => {
      // If the user is not logged in, redirect to the login page.
      if (!isLoggedIn && location.pathname !== `/app/login`) {
        navigate(`/app/login`);
      }
    },
    [isLoggedIn, location]
  );

  return isLoggedIn ? <Component {...rest} /> : null

};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default PrivateRoute