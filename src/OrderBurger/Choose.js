import React, { Component } from "react";
import { connect } from "react-redux";
import './style.css';
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
                  <td >{item.name}</td>
                  <td>
                    <button
                      className="btn-success"
                      onClick={() => {
                        this.props.themDoAn(item.name, true);
                      }}
                    >
                      +
                    </button>
                    {item.amount}
                    <button
                      className="btn-danger"
                      onClick={() => {
                        this.props.themDoAn(item.name, false);
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
      let action = {
        type: "TANG_GIAM",
        name,
        tangGiam,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Choose);
