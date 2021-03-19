import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (
            <div>
                <section className="mec-carousel">
                    {/* Boostrap Slider */}
                    <div id="carousel__mec" className="carousel slide mec-carousel__slider" data-ride="carousel">
                        <div className="carousel-inner mec-carousel__img">
                            <div className="carousel-item active mec-item">
                                <img className="d-block w-100" src="./img/01-carousel.jpeg" alt="First slide" />
                                <div className="carousel-caption .d-md-block Caption_show">
                                    <dl>
                                        <dt>
                                            <h3>The new C-Class by</h3>
                                        </dt>
                                        <dt>
                                            <h4>Mercedes-Bendz.</h4>
                                        </dt>
                                        <dt><button className="btn btn-primary">Learn
                more</button></dt>
                                    </dl>
                                </div>
                            </div>
                            <div className="carousel-item  mec-item">
                                <img className="d-block w-100" src="./img/02-carousel.jpeg" alt="Second slide" />
                                <div className="carousel-caption .d-none Caption_show">
                                    <dl>
                                        <dt>
                                            <h3>The new C-Class by</h3>
                                        </dt>
                                        <dt>
                                            <h4>Mercedes-Bendz.</h4>
                                        </dt>
                                        <dt><button className="btn btn-primary">Learn
                more</button></dt>
                                    </dl>
                                </div>
                            </div>
                            <div className="carousel-item  mec-item">
                                <img className="d-block w-100" src="./img/03-carousel.jpeg" alt="Third slide" />
                                <div className="carousel-caption .d-none Caption_show">
                                    <dl>
                                        <dt>
                                            <h3>The new C-Class by</h3>
                                        </dt>
                                        <dt>
                                            <h4>Mercedes-Bendz.</h4>
                                        </dt>
                                        <dt><button className="btn btn-primary">Learn
                more</button></dt>
                                    </dl>
                                </div>
                            </div>
                            <div className="carousel-item  mec-item">
                                <img className="d-block w-100" src="./img/04-carousel.jpeg" alt="Four slide" />
                                <div className="carousel-caption .d-none Caption_show">
                                    <dl>
                                        <dt>
                                            <h3>The new C-Class by</h3>
                                        </dt>
                                        <dt>
                                            <h4>Mercedes-Bendz.</h4>
                                        </dt>
                                        <dt><button className="btn btn-primary">Learn
                more</button></dt>
                                    </dl>
                                </div>
                            </div>
                            <div className="carousel-item  mec-item">
                                <img className="d-block w-100" src="./img/05-carousel.jpeg" alt="Five slide" />
                                <div className="carousel-caption .d-none Caption_show">
                                    <dl>
                                        <dt>
                                            <h3>The new C-Class by</h3>
                                        </dt>
                                        <dt>
                                            <h4>Mercedes-Bendz.</h4>
                                        </dt>
                                        <dt><button className="btn btn-primary">Learn
                more</button></dt>
                                    </dl>
                                </div>
                            </div>
                            <div className="carousel-item  mec-item">
                                <img className="d-block w-100" src="./img/06-carousel.jpeg" alt="Six slide" />
                                <div className="carousel-caption .d-none Caption_show">
                                    <dl>
                                        <dt>
                                            <h3 style={{ color: 'black' }}>The new C-Class by
              </h3>
                                        </dt>
                                        <dt>
                                            <h4 style={{ color: 'black' }}>Mercedes-Bendz.</h4>
                                        </dt>
                                        <dt><button className="btn btn-primary">Learn
                more</button></dt>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carousel__mec" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel__mec" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    {/* Searching bar of Origin */}
                    <div className="input-group input_bar input-group-lg">
                        <input style={{ height: '2vw' }} type="text" className="form-control" placeholder="I am looking for..." aria-describedby="basic-addon2" />
                    </div>
                </section>

            </div>
        )
    }
}
