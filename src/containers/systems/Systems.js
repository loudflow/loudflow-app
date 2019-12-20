import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import styles from './style';

function Systems({ classes, user }) {

  return (
    <>
      <h1>Systems</h1>
      <p>Hi, {user.nickname ? user.nickname : "friend"}!</p>
    </>
  )
}

Systems.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default withStyles(styles)(Systems);
