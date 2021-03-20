import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


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
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="sm">
                    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                        <div className="app-main-test">
                            <div className="main-page">
                                {children}
                            </div>
                        </div>
                    </Typography>
                </Container>
            </React.Fragment>
        );
    }
}

// map state to props
const mapStateToProps = ({ configs }) => ({ configs });

export default withRouter(connect(mapStateToProps)(MainLayout));
