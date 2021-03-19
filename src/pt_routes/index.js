/**
 * App.js Layout Start Here
 */
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
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
			<div className="App">
        <InitView
          path={`${match.url}app`}
          auth={true}
          component={Views}
        />
        <Switch>
            <Route path="*" component={AsyncUserComponent} />
        </Switch>
      </div>
		);
	}
}

export default AppComponent;
