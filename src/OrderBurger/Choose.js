import React, { Component } from "react";
import { connect } from "react-redux";
import './style.css';
import {tangGiamAction} from  "../redux/Action/OrderBurgerAction";
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
               const tang = true;
               const giam = false
              return (
                <tr key={index}>
                  <td >{item.name}</td>
                  <td>
                    <button
                      className="btn-success"
                      onClick={() => {
                        this.props.themDoAn(item.name, tang);
                      }}
                    >
                      +
                    </button>
                    {item.amount}
                    <button
                      className="btn-danger"
                      onClick={() => {
                        this.props.themDoAn(item.name, giam);
                      }}
                    >
                      -
                    </button>
                  </td>

                  <td >{this.props.menu[item.name]}</td>
                

                  <td>{item.amount * this.props.menu[item.name]}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}></td>
              <td>Tổng cộng</td>
              <td>
                {this.props.burger
                  .reduce((tongTien, doAn, index) => {
                    return (tongTien +=
                      doAn.amount * this.props.menu[doAn.name]);
                  }, 0)
                  .toLocaleString()}
              </td>
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

const mapDispatchToProps = (dispatch) => {
  return {
    themDoAn: (name, tangGiam) => {
      
    dispatch(tangGiamAction(name,tangGiam))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Choose);
