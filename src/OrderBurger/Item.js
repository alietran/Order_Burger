import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
class Item extends Component {
  renderBurger = () => {
    return this.props.burger.map((item, index) => {
      let burgerNew = [];
      for (let i = 0; i < item.amount; i++) {
         burgerNew.push(<div key={index} className={item.name}></div>);
      }
      return burgerNew;
    });
  };

  render() {
    return (
      <div>
        <div className="breadTop"></div>
        {this.renderBurger()}
        <div className="breadBottom"></div>
      </div>
    );

    // <div>
    //   <div className="breadTop">{this.props.burgerdefault}</div>
    //   <div className="salad"></div>
    //   <div className="salad"></div>
    //   <div className="salad"></div>
    //   <div className="salad"></div>
    //   <div className="cheese"></div>
    //   <div className="cheese"></div>
    //   <div className="beef"></div>
    //   <div className="beef"></div>
    //   <div className="breadBottom"></div>
    // </div>
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.OrderBurgerReducer.burger,
  };
};

export default connect(mapStateToProps)(Item);
