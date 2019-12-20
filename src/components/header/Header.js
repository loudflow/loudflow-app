import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Avatar, Button, Card, Divider, CardHeader, ClickAwayListener, Drawer, Grow, IconButton, List, ListItem, ListItemText, MenuItem, MenuList, Paper, Popper, Toolbar, useMediaQuery } from '@material-ui/core';
import { Menu, ExpandMore } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import { logout } from "../../utils/auth"

const options = [
  { to: '/app/systems/', text: 'Systems' },
  { to: '/app/worlds/', text: 'Worlds' },
  { to: '/app/agents/', text: 'Agents' }
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

  const [openUserMenu, setOpenUserMenu] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleUserMenuToggle = () => {
    setOpenUserMenu(prevOpenUserMenu => !prevOpenUserMenu);
  };
  const handleUserMenuClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenUserMenu(false);
  };
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenUserMenu(false);
    }
  }
  const prevOpenUserMenu = React.useRef(openUserMenu);
  React.useEffect(() => {
    if (prevOpenUserMenu.current === true && openUserMenu === false) {
      anchorRef.current.focus();
    }

    prevOpenUserMenu.current = openUserMenu;
  }, [openUserMenu]);

  function signOut(event) {
    event.preventDefault();
    logout();
  }

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
                      className={classes.userMenu}
                      ref={anchorRef}
                      onClick={handleUserMenuToggle}
                    >
                      <ExpandMore />
                    </IconButton>
                  }
                />
                <Popper open={openUserMenu} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleUserMenuClose}>
                          <MenuList autoFocusItem={openUserMenu} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                            <MenuItem onClick={handleUserMenuClose}>Profile</MenuItem>
                            <MenuItem onClick={handleUserMenuClose}>Account</MenuItem>
                            <Divider />
                            <MenuItem onClick={handleUserMenuClose}>Help</MenuItem>
                            <MenuItem onClick={handleUserMenuClose}>Feedback</MenuItem>
                            <MenuItem onClick={signOut}>Sign Out</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Card>
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
