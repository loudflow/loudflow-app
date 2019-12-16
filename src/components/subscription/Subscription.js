import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './style';

const Subscription = ({ classes }) => {

  return (
    <div className={classes.container}>
      <Typography variant='h5' color='textSecondary'>
        Please sign up so we can keep you updated on our progress.
      </Typography>
      <br/>
      <form name="subscription" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="subscription" />
        <div hidden aria-hidden="true">
          <label>
            Don’t fill this out if you're human:
            <input name="bot-field"/>
          </label>
        </div>
        <Grid container spacing={1}>
          <Grid container item xs={9}>
            <TextField fullWidth required type="email" name="email" placeholder="Your email address..." variant="outlined"/>
          </Grid>
          <Grid container item xs={3}>
            <Button fullWidth type="submit" color="secondary" variant="outlined">
              Stay tuned
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );

};

Subscription.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Subscription);
