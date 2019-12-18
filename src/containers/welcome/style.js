const styles = ({ palette }) => ({
  content: {
    marginTop: '100px',
  },
  container: {
    float: 'right',
    marginTop: '40px',
    marginLeft: '40px',
  },
  banner: {
    minHeight: '480px',
    height: `calc(100vh - 200px)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top left',
    backgroundSize: 'contain',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '20px',
  },
  brand: {
    width: '100%',
  },
  titleContainer: {
    marginTop: '20px',
  },
  captionContainer: {
    marginTop: '20px',
  },
  contentContainer: {
    marginTop: '20px',
  },
  loginContainer: {
    width: '100%',
    minHeight: '150px',
    paddingTop: '40px',
  },
  buttonLink: {
    textDecoration: 'none',
    color: palette.primary.contrastText,
  },
});

export default styles;
