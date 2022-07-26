import React, { Component } from 'react'
import Guest from "./assets/guest.jpeg"
export default class Avatar extends Component {

    handleError = (e) => {
        e.target.src = Guest;
    }

    render() {
        return <div className="cmt-avatar">
            <img src="" onError={this.handleError} alt="avatar"/>
        </div>;
    }
}