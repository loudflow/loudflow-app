const styles = ({ app, palette }) => ({
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
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 0,
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
  preview: {
    marginLeft: '20px',
  },
  brand: {
    display: 'block',
    height: '120px',
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
});

export default styles;
