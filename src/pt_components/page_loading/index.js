import React, { Component } from 'react';

class PageLoader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0
        };

    }

    render() {
        return (
            <div className="app">
                <div className="container">
                    Page Loading..........
                </div>
            </div>
        );
    }
}

/*Page loader nằm ngoài path route nên cần bọc vào withRouter
* để component PageLoader có thể truy cập được this.props.history
* và có thể chuyển hướng người dùng .
*/
export default PageLoader;
