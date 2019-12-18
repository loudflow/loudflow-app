import { Link, graphql, useStaticQuery, navigate } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

import React from 'react';
import PropTypes from 'prop-types';

import { Button, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './style';

import { login, logout, isAuthenticated, getProfile } from "../../utils/auth"

const Welcome = ({ classes }) => {

  const images = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "images/logo/logo-color-name-row.png" }) {
        childImageSharp {
          fluid(maxWidth: 480, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      banner: file(relativePath: { eq: "images/banner/brain-machine.png" }) {
        childImageSharp {
          fluid(maxHeight: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Grid container spacing={1} className={classes.content}>
      <Grid container item direction="column" xs={12} md={5}>
        <BackgroundImage Tag="div" className={classes.banner} fluid={images.banner.childImageSharp.fluid} />
      </Grid>
      <Grid container item direction="column" xs={12} md={7}>
        <div className={classes.container}>
          <div className={classes.brandContainer}>
            <Link to='/' className={classes.brand}>
              <Img alt='logo' fluid={images.logo.childImageSharp.fluid} objectFit="contain" />
            </Link>
          </div>
          <div className={classes.captionContainer}>
            <Typography variant='h5' color='textPrimary'>
              An open-source cloud platform for exploring cognitive architectures in distributed AI.
            </Typography>
          </div>
          <div className={classes.contentContainer}>
            <Typography variant='p' color='textPrimary'>
              If you already have registered for our preview, please go ahead and login to the app.
              <br/><br/>
              If you are not registered, you may contact us at info@loudflow.com to request to join the preview.
            </Typography>
          </div>
          <div className={classes.loginContainer}>
            <Grid container spacing={1}>
              <Grid container item xs={3}>
                <Button fullWidth color="secondary" variant="contained" onClick={() => login()} >
                  Login
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
    </Grid>
  );

};

Welcome.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Welcome);
