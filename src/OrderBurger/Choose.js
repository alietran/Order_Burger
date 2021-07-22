import React, { Component } from "react";
import { connect } from "react-redux";
class Choose extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Thức ăn</th>
              <th></th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
              
            </tr>
          </thead>
          <tbody>
            {this.props.burger.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <button className="btn-success">+</button>
                    {item.amount}
                    <button className="btn-danger">-</button>
                  </td>

                  <td>{this.props.menu[item.name]}</td>
                  <td>{item.amount * this.props.menu[item.name]}</td>
                 
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}></td>
              <td>Tổng cộng</td>
              <td>{this.props.total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    burger: state.OrderBurgerReducer.burger,
    total: state.OrderBurgerReducer.total,
    menu: state.OrderBurgerReducer.menu,
  };
};

export default connect(mapStateToProps)(Choose);
