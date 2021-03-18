/**
 * App Routes
 */
import React, { Component } from "react";
import { Route, withRouter, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";

// async component
import {
    AsyncUserComponent
} from "../pt_components/async";


class MainView extends Component {

    render() {
        const { match } = this.props;
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path={`${match.url}/users`}
                        component={AsyncUserComponent}
                    />
                </Switch>
            </div>
        );
    }
}

export default withRouter(MainView);
