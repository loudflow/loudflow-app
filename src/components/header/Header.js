import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Avatar, Button, Card, CardContent, CardHeader, Collapse, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography, useMediaQuery } from '@material-ui/core';
import { Menu, ExpandMore } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import clsx from 'clsx';

const options = [
  { to: '/systems/', text: 'Systems' },
  { to: '/worlds/', text: 'Worlds' },
  { to: '/agents/', text: 'Agents' }
];

const Header = ({ classes, user }) => {

  const matches = useMediaQuery('(min-width:680px)');

  const logoImage = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/logo/logo-color.png" }) {
        childImageSharp {
          fixed(height: 40, quality: 100) {
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

  const [userMenuOpen, setUserMenuOpen] = React.useState(false);
  const handleUserMenuOpenClick = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <>
      {matches ? (
        <header className={classes.header}>
          <AppBar classes={{root: classes.appbar}} position="relative" >
            <Toolbar classes={{root: classes.toolbar}}>
              <Link to='/' className={classes.brand}>
                <Img alt='logo' fixed={logoImage.file.childImageSharp.fixed} objectFit="contain" />
              </Link>
              <ul className={classes.navContainer}>
                {options.map((link, i) => (
                  <li className={classes.navLinkContainer} key={i}>
                    <Link className={classes.navLink} activeClassName={classes.navLinkActive} to={link.to} exact={'true'} >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <Card className={classes.userInfoContainer} >
                <CardHeader
                  classes={{action: classes.userInfo}}
                  avatar={
                    <Avatar />
                  }
                  title={user.nickname ? user.nickname : "friend"}
                  action={
                    <IconButton
                      className={clsx(classes.userMenu, {
                        [classes.userMenuOpen]: userMenuOpen,
                      })}
                      onClick={handleUserMenuOpenClick}
                    >
                      <ExpandMore />
                    </IconButton>
                  }
                />
                <Collapse in={userMenuOpen} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>HELLO!</Typography>
                  </CardContent>
                </Collapse>
              </Card>
              <Link to='/' className={classes.help}>
                Help
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
                    <Menu />
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
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
