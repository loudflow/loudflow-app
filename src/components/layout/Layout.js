import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import styles from './style';

import { Header, Footer, Subscription } from '../../components';

require('typeface-roboto');

const Layout = ({ classes, children, hideSubscription }) => {

  return (
    <div className={classes.container}>
      <main className={classes.content}>
        <Header />
        {children}
        {!hideSubscription && (<Subscription />)}
        <Footer />
      </main>
    </div>
  );

};

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element,
  hideSubscription: PropTypes.bool
};

Layout.defaultProps = {
  hideSubscription: false
};

export default withStyles(styles)(Layout);
