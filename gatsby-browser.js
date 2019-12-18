import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'styles/theme';
import { silentAuth } from "./src/utils/auth"

class SessionCheck extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  handleCheckSession = () => {
    this.setState({ loading: false })
  };

  componentDidMount() {
    silentAuth(this.handleCheckSession)
  };

  render() {
    return (
      this.state.loading === false && (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    )
  };

}

export const wrapRootElement = ({ element }) => {
 return (
   <SessionCheck>
     <ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
   </SessionCheck>
 );
};
