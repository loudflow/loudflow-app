const styles = ({ typography }) => ({
  content: {
    justifyItems: 'flex-start',
  },
  bulletContainer: {
    minWidth: `${typography.pxToRem(16)}`,
  },
  bullet: {
    width: `${typography.pxToRem(8)}`,
    height: `${typography.pxToRem(8)}`,
  },
});

export default styles;
