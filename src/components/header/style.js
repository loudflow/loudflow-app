const styles = ({ app, palette, transitions }) => ({
  header: {
    width: '100%',
    maxWidth: app.maxWidth,
    height: '200px',
    paddingTop: '20px',
    paddingBottom: '60px',
  },
  appbar: {
    background: 'transparent',
    boxShadow: 'none',
    color: 'black',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 0,
  },
  brand: {
    display: 'block',
    height: '40px',
    marginRight: '40px',
  },
  navContainer: {
    flexGrow: 1,
    margin: 0,
    padding: 0
  },
  navLinkContainer: {
    display: 'inline-block',
    borderRadius: '4px',
  },
  navLink: {
    border: 'none',
    display: 'inline-block',
    marginRight: '8px',
    padding: `4px`,
    textDecoration: 'none',
    color: palette.text.primary,
    "&:hover": {
      backgroundColor: '#ebebeb',
    }
  },
  navLinkActive: {
    borderBottom: `2px solid ${palette.primary.main}`,
  },
  userInfoContainer: {
    marginBottom: '-5px',
    marginLeft: '20px',
    background: 'transparent',
    boxShadow: 'none',
  },
  userInfo: {
    marginLeft: '5px',
  },
  userMenu: {
    marginLeft: 'auto',
  },
  userMenuOpen: {
  },
  menuButton: {
  },
  drawerPaper: {
    width: '240px',
  },
  listLink: {
    border: 'none',
    textDecoration: 'none',
    color: palette.text.primary,
  },
  listLinkActive: {
    "& .listItem": {
      backgroundColor: palette.action.selected,
    }
  },
  help: {
    border: 'none',
    marginRight: '8px',
    padding: `4px`,
    textDecoration: 'none',
    color: palette.text.primary,
  },
});

export default styles;
