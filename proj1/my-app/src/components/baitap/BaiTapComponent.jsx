import React, { Component } from 'react'
import Header from './Header'
import Product from './Product'
import Slider from './Slider'

export default class BaiTapComponent extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Slider/>

                <Product/>
            </div>
        )
    }
}
