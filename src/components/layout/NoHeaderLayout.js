import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import styles from './style';

import { Footer } from '../../components';

require('typeface-roboto');

const NoHeaderLayout = ({ classes, children }) => {

  return (
    <div className={classes.container}>
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  );

};

NoHeaderLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element,
  hideSubscription: PropTypes.bool
};

NoHeaderLayout.defaultProps = {
  hideSubscription: false
};

export default withStyles(styles)(NoHeaderLayout);
