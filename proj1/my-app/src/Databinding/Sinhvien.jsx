import React, { Component } from 'react'

export default class Sinhvien extends Component {
    hoTen = "Nguyen Van A";
    lop = "Front End n";


    render() {
        return (
            <div className="container">
                <ul>
                    <li>Ho ten:{this.hoTen}</li>
                    <li>Lop:{this.lop}</li>
                </ul>
                
            </div>
        )
    }
}
