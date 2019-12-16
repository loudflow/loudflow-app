const styles = ({ app, breakpoints }) => ({
  '@global': {
    html: {
      [breakpoints.up('xl')]: {
        fontSize: '0.833333vw !important',
      },
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0 auto',
    minHeight: '100vh',
    padding: '0 50px',
    transition: 'filter .5s, opacity .5s',
    boxSizing: 'border-box',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: app.maxWidth,
    width: '100%',
    minHeight: '100vh',
  },
});

export default styles;
