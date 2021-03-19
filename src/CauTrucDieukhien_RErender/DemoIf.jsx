import React, { Component } from 'react'

export default class DemoIf extends Component {
//Thuoc Tinhs
    isLogin = false;
    userName = '';

    renderContent = () => {
        if(this.isLogin){
            return(
                <div>
                    hello <button>Logout</button>
                </div>
            )
        }
        return(
            <div>Not login yet! <button>Login</button></div>
        )
    }
//Phuong thuc render cua component
    render() {
        return (
            <div>
                {this.renderContent()};
            </div>
        )
    }
}
