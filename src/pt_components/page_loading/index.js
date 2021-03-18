import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class PageLoader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loadingHeader: true,
            loadingSidebar: true,
            windowWidth: 0,
            windowHeight: 0
        };

    }

    componentDidMount() {
        const { windowWidth } = this.state;
        setTimeout(() => {
            this.setState({ loadingHeader: false, loadingSidebar: false });
        }, 114);
    }

    render() {
        return (
            <div className="app">
                <div className="app-main-container">
                    Loading..............
                </div>
            </div>
        );
    }
}


export default withRouter(PageLoader);
