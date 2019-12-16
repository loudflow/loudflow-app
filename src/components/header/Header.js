import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, useMediaQuery } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/styles';
import styles from './style';

const options = [
  { to: '/', text: 'WHAT' },
  { to: '/why/', text: 'WHY' },
  { to: '/how/', text: 'HOW' },
  { to: '/when/', text: 'WHEN' },
  { to: '/who/', text: 'WHO' },
];

const Header = ({ classes }) => {

  const matches = useMediaQuery('(min-width:680px)');

  const logoImage = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/logo/logo-black-name.png" }) {
        childImageSharp {
          fixed(height: 120, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {matches ? (
        <header className={classes.header}>
          <AppBar classes={{root: classes.appbar}} position="relative" >
            <Toolbar classes={{root: classes.toolbar}}>
              <ul className={classes.navContainer}>
                {options.map((link, i) => (
                  <li className={classes.navLinkContainer} key={i}>
                    <Link className={classes.navLink} activeClassName={classes.navLinkActive} to={link.to} exact={'true'} >
                      {link.text}
                    </Link>
                  </li>
                ))}
                <li className={classes.navLinkContainer}>
                  <Button className={classes.preview} variant="outlined" color="secondary" href="https://www.loudflow.app">
                    PREVIEW
                  </Button>
                </li>
              </ul>
              <Link to='/' className={classes.brand}>
                <Img alt='logo' fixed={logoImage.file.childImageSharp.fixed} objectFit="contain" />
              </Link>
            </Toolbar>
          </AppBar>
        </header>
      ) : (
        <header className={classes.header}>
          <AppBar classes={{root: classes.appbar}} position="relative" >
            <Toolbar classes={{root: classes.toolbar}}>
              <ul className={classes.navContainer}>
                <li className={classes.navLinkContainer}>
                  <IconButton className={classes.menuButton} onClick={handleDrawerToggle}>
                    <MenuIcon />
                  </IconButton>
                </li>
                <li className={classes.navLinkContainer}>
                  <Button className={classes.preview} variant="outlined" color="secondary" href="https://www.loudflow.app">
                    PREVIEW
                  </Button>
                </li>
              </ul>
              <Link to='/' className={classes.brand}>
                <Img alt='logo' fixed={logoImage.file.childImageSharp.fixed} objectFit="contain" />
              </Link>
            </Toolbar>
          </AppBar>
          <Drawer classes={{paper: classes.drawerPaper}} variant="temporary" anchor="left" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{keepMounted: true}} >
            <List component="nav">
              {options.map((link, i) => (
                <Link className={classes.listLink} activeClassName={classes.listLinkActive} to={link.to} exact={'true'} >
                  <ListItem className="listItem" button>
                    <ListItemText primary={link.text} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Drawer>
        </header>
      )}
    </>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
