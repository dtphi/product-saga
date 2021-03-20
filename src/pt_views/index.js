/**
 * App Routes
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter, Switch } from "react-router-dom";
import MainLayout from '../pt_components/layout';
import {
    AsyncUserComponent
} from "../pt_components/async";


class MainView extends Component {

    render() {
        const { match } = this.props;
        
        return (
            <MainLayout>
                <Switch>
                    <Route
                        exact
                        strict
                        path={`${match.url}/users`}
                        component={AsyncUserComponent}
                    />
                </Switch>
            </MainLayout>
        );
    }
}

export default withRouter(connect(null)(MainView));
