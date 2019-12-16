import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import React from 'react';
import PropTypes from 'prop-types';

import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { FaCircle } from 'react-icons/fa';
import { withStyles } from '@material-ui/styles';
import styles from './style';


const When = ({ classes }) => {

  const bannerImage = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/banner/production-machine.png" }) {
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
          <div className={classes.titleContainer}>
            <Typography variant='h2' color='textSecondary'>
              Setting out
            </Typography>
            <Typography variant='h2' color='textSecondary'>
              on a journey
            </Typography>
          </div>
          <div className={classes.captionContainer}>
            <Typography variant='h5' color='textPrimary'>
              Using an iterative approach <br/> for developing Loudflow.
            </Typography>
          </div>
          <div className={classes.contentContainer}>
            <Typography variant='p' color='textPrimary' paragraph>
              Starting with an initial skeleton implementation of the front-end web application and back-end services, development will continue in iterations which add on to the previous set of features to produce a new enhanced and stable release. These iterative releases will be documented as milestones here and in the project's Github repository with corresponding list of features and a rough timeline.
            </Typography>
            <Typography variant='p' color='textPrimary' paragraph>
              This approach fits well with the exploratory research and learning goals of the project.
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid container item direction="column" xs={12}>
        <div className={classes.contentContainer}>
          <Typography variant='p' color='textPrimary' paragraph>
            Currently, the initial skeleton is being built with the following technology stack and features:
          </Typography>
          <List dense disablePadding>
            <ListItem>
              <ListItemIcon className={classes.bulletContainer}>
                <FaCircle className={classes.bullet} />
              </ListItemIcon>
              <ListItemText primary='Back-end scaffolding using Lagom microservices and event sourcing framework with Scala, Akka, Cassandra and Kafka.' />
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.bulletContainer}>
                <FaCircle className={classes.bullet} />
              </ListItemIcon>
              <ListItemText primary='Minimal implementation of Model service with 2D graph representation and basic features including add/remove/move entities (i.e. agents and things), configurable cohabitation behavior (i.e. block, push, kill), etc.' />
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.bulletContainer}>
                <FaCircle className={classes.bullet} />
              </ListItemIcon>
              <ListItemText primary='Minimal implementation of Agent service with an internal clock, perception via model events, a local memory of the model, and random turn-based action.' />
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.bulletContainer}>
                <FaCircle className={classes.bullet} />
              </ListItemIcon>
              <ListItemText primary='Minimal implementation of Simulation service with support for an internal clock, initial model population, time-based population growth and decay, etc.' />
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.bulletContainer}>
                <FaCircle className={classes.bullet} />
              </ListItemIcon>
              <ListItemText primary='Deployment to and integration with AWS using Docker and Kubernetes - possibly EKS via CloudFormation ?. Also IAM integration to support deployment to user accounts.' />
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.bulletContainer}>
                <FaCircle className={classes.bullet} />
              </ListItemIcon>
              <ListItemText primary='Minimal front-end (user and admin) web applications using React, Gatsby and Netlify.' />
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.bulletContainer}>
                <FaCircle className={classes.bullet} />
              </ListItemIcon>
              <ListItemText primary='Example application based on the TileWorld testbed (Lees, 2002 - A history of the Tileworld agent testbed).' />
            </ListItem>
          </List>
        </div>
      </Grid>
    </Grid>
  );

};

When.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(When);
