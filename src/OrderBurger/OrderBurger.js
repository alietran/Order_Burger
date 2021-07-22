import React, { Component } from 'react'
import Choose from './Choose'
import Item from './Item'
import './style.css'
export default class OrderBurger extends Component {
    render() {
        return (
          <div className="container">
            <h2 className="text-success display-3"> Bài tập Burger</h2>
            <div className="row">
              <div className="col-6">
                <h3 className="text-danger text-center">Bánh Burger của bạn</h3>
                <Item />
               
              </div>
              <div className="col-6">
                <h3 className="text-success text-center ">Chọn thức ăn</h3>
                <Choose/>
              </div>
            </div>
          </div>
        );
    }
}
