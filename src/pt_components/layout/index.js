import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class MainLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0
        };
    }

    render() {
        const { children } = this.props;
        
        return (
            <div className="app-layout">
                <div className="app-main-test">
                    <div>
                      <div className="main-page">
                          {children}
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}

// map state to props
const mapStateToProps = ({ settings }) => ({ settings });

export default withRouter(connect(mapStateToProps)(MainLayout));
