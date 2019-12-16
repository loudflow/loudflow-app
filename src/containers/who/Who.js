import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Link, Typography } from '@material-ui/core';
import { FaLinkedin} from 'react-icons/fa';
import { withStyles } from '@material-ui/styles';
import styles from './style';

const Who = ({ classes }) => {

  const bannerImage = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/banner/heart-machine.png" }) {
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
      <Grid container item direction="column" xs={12} md={6}>
        <BackgroundImage Tag="div" className={classes.banner} fluid={bannerImage.file.childImageSharp.fluid} />
      </Grid>
      <Grid container item direction="column" xs={12} md={6}>
        <div className={classes.container}>
          <div className={classes.captionContainer}>
            <Typography variant='h2' color='textSecondary'>
              Hi there!
            </Typography>
          </div>
          <div className={classes.contentContainer}>
            <Typography variant='p' color='textPrimary' paragraph>
              Loudflow is an open-source project under construction by FarSimple, a one-person company based in Finland, which I started for software development and consulting.
            </Typography>
            <Typography variant='p' color='textPrimary' paragraph>
              The main driver behind this project is my strong interest in the development and architecture of both distributed software and artificial intelligence. While serving as a playground for learning and trying out ideas in the field of distributed AI, my larger objective is to continue building Loudflow into a comprehensive cloud-based platform for developing practical applications in this area.
            </Typography>
            <Typography variant='p' color='textSecondary' paragraph>
              Get in touch
            </Typography>
            <Typography variant='p' color='textPrimary' paragraph>
              Feel free to get in touch with me. I'm always open to discussing new ideas and opportunities.
            </Typography>
            <Typography className={classes.icon} variant='p' color='textPrimary' paragraph>
              <FaLinkedin className={classes.iconIcon} />&nbsp;&nbsp;<Link className={classes.iconLink} href='https://www.linkedin.com/in/sinaninel/'>Sinan Inel</Link>
            </Typography>
            <Typography variant='p' color='textSecondary' paragraph>
              Questions? Need help?
            </Typography>
            <Typography variant='p' color='textPrimary' paragraph>
              info@loudflow.com
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );

};

Who.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Who);
