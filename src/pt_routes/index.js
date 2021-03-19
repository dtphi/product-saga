/**
 * App.js Layout Start Here
 */
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import theme from './theme';
import Views from '../pt_views';
import {
    AsyncUserComponent
} from "../pt_components/async";

const InitView = ({ component: Component, auth }) =>
  <Route
    render={props =>
      <Component {...props} />  
    }
  />;

class AppComponent extends Component {
	render() {
    const { match } = this.props;
		return (
			<ThemeProvider theme={theme}>
        <Container>
          <InitView
            path={`${match.url}app`}
            auth={true}
            component={Views}
          />
          <Switch>
              <Route path="/test" component={AsyncUserComponent} />
          </Switch>
        </Container>
      </ThemeProvider>
		);
	}
}

export default AppComponent;
