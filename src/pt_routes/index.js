/**
 * App.js Layout Start Here
 */
import React, { Component } from 'react';
import { Route, withRouter, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Views from '../pt_views';
import {
    AsyncUserComponent
} from "../pt_components/async";
import logo from '../logo.svg';
import '../App.css';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit test router switch app component <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
		);
	}
}

export default AppComponent;
