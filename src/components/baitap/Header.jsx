import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <section className="mec-header" id="mec-header_navbar">
                    <div className="container">
                        <div className="row ">
                            <div className="col-2 ">
                                <a className="navbar-brand" href="#"> <img src="./img/logo.svg" alt="First slide" /></a>
                            </div>
                            <div className="col-10 mec-header_rowconfig">
                                <div className="  mec-header_nav1">
                                    <ul className="nav">
                                        <li className="nav-items">
                                            <a className="nav-link active" href="#"><i className="fas fa-info-circle" />Provider/Privacy Statement</a>
                                        </li>
                                        <li className="nav-items">
                                            <a className="nav-link" href="#">Deutsch</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="  mec-header_nav2">
                                    <ul className="nav">
                                        <li className="nav-items">
                                            <a className="nav-link active" href="#">Company</a>
                                        </li>
                                        <li className="nav-items">
                                            <a className="nav-link" href="#">Vehicles</a>
                                        </li>
                                        <li className="nav-items">
                                            <a className="nav-link" href="#">Design</a>
                                        </li>
                                        <li className="nav-items">
                                            <a className="nav-link" href="#">Innovation</a>
                                        </li>
                                        <li className="nav-items">
                                            <a className="nav-link" href="#">Museum &amp; History</a>
                                        </li>
                                        <li className="nav-items">
                                            <a className="nav-link" href="#">Sports</a>
                                        </li>
                                        <li className="nav-items">
                                            <a className="nav-link" href="#">Events</a>
                                        </li>
                                        <li className="nav-items">
                                            <a className="nav-link " href="#">LifeStyle</a>
                                        </li>
                                        <li className="nav-items">
                                            <a className="nav-link " href="#">	<i className="fas fa-search" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
