import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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

    render() {
        return (
            <div className="app">
                <div className="app-main-container">
                    Loading..........
                </div>
            </div>
        );
    }
}


export default withRouter(PageLoader);
