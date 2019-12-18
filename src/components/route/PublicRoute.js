import React from "react"
import PropTypes from 'prop-types';

const PublicRoute = ({ children }) => {

  return (
    <div>
      {children}
    </div>
  );

};

PublicRoute.propTypes = {
  children: PropTypes.element,
};

export default PublicRoute
