import React from 'react';
import PropTypes from 'prop-types';

import { Link, Typography } from '@material-ui/core';
import { FaGithub } from 'react-icons/fa';
import { withStyles } from '@material-ui/styles';
import styles from './style';

const Footer = ({ classes }) => {

  return (
    <footer className={classes.container}>
      <Typography className={classes.copyright} variant='p' color='textPrimary'>
        © 2019,&nbsp;<Link href='https://www.farsimple.com'>FarSimple Oy</Link>. All rights reserved.
      </Typography>
      <Typography className={classes.privacy} variant='p' color='textPrimary'>
        <Link href='/privacy/'>Privacy Policy</Link>
      </Typography>
      <Typography className={classes.source} variant='p' color='textPrimary'>
        <FaGithub className={classes.sourceIcon} />&nbsp;&nbsp;<Link className={classes.sourceLink} href='https://www.github.com/loudflow'>Source Code</Link>
      </Typography>
    </footer>
  );

};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
