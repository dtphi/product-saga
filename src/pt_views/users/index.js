import React, { Component } from "react";

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            errorPopup: false,
            loading: true,
        };
    }

    render() {
        
        return (
            <div>
            	<div>List uers async moment</div>
            </div>
        );
    }
}

export default UserList;
