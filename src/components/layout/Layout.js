import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import styles from './style';

import { Header, Footer } from '../../components';

require('typeface-roboto');

const Layout = ({ classes, children, user }) => {

  return (
    <div className={classes.container}>
      <main className={classes.content}>
        <Header user={user} />
        {children}
        <Footer />
      </main>
    </div>
  );

};

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  user: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
