import React, { Component } from 'react'

export default class Event extends Component {

    //Phuong Thuc /xu Ly 
    handleShowmessage = (message) =>{
        alert(message);
    }


    render() {

        let message = 'hello hello';
        return (
            <div className="container">
                <button onClick={this.handleShowmessage.bind(this,message)}>Show Message</button>
            </div>
        )
    }
}
