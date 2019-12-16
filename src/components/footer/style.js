const styles = ({ app, palette }) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0 auto',
    maxWidth: app.maxWidth,
    width: '100%',
    height: '100px',
    padding: '40px 0 10px',
    '@media only screen and (max-width: 680px)' : {
      flexDirection: 'column',
      '& span': {
        marginBottom: '20px',
      }
    }
  },
  copyright: {
    flexGrow: 1,
  },
  privacy: {
    display: 'flex',
    flexGrow: 1,
  },
  privacyLink: {
    display: 'flex',
    alignItems: 'center',
    color: palette.text.primary,
    textDecoration: 'none',
  },
  source: {
    display: 'flex',
  },
  sourceLink: {
    display: 'flex',
    alignItems: 'center',
  },
  sourceIcon: {
    width: '24px',
    height: '24px',
  },
});

export default styles;
