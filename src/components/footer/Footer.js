import React from 'react';
import PropTypes from 'prop-types';

import { Link, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './style';

const Footer = ({ classes }) => {

  return (
    <footer className={classes.container}>
      <Typography className={classes.privacy} variant='p' color='textPrimary'>
        <Link href='/privacy/'>Privacy Policy</Link>
      </Typography>
      <Typography className={classes.copyright} variant='p' color='textPrimary'>
        © 2019,&nbsp;<Link href='https://www.farsimple.com'>FarSimple Oy</Link>. All rights reserved.
      </Typography>
    </footer>
  );

};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
