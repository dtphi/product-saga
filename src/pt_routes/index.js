/**
 * App.js Layout Start Here
 */
import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import theme from './theme';
import Views from '../pt_views';

const InitView = ({ component: Component , ...rest}) =>
  <Route
    {...rest}
    render={routeProps =>
      <Component {...routeProps} />  
    }
  />;
//https://reactrouter.com/web/api/Route
let appPrefix = 'd';

class AppComponent extends Component {
	render() {
    const { match } = this.props;
		return (
			<ThemeProvider theme={theme}>
        <Container>
          <InitView
            path={`${match.url+appPrefix.concat('e', 'm', 'o')}`}
            auth={true}
            component={Views}
          />
        </Container>
      </ThemeProvider>
		);
	}
}

export default AppComponent;
