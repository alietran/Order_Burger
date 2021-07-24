
import { TANG_GIAM } from "../Type/OrderBurgerType";

const burgerState = {
  burger: [
    { name: "salad", amount: 1, tangGiam: false },
    { name: "cheese", amount: 1, tangGiam: false },
    { name: "beef", amount: 1, tangGiam: false },
  ],
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
  total: 85,
};
const OrderBurger = (state = burgerState, action) => {
  switch (action.type) {
    case TANG_GIAM: {
      let burgerNew = [...state.burger];
      let index = burgerNew.findIndex((sp) => sp.name === action.name);
      if (index !== -1) {
        if (action.tangGiam ) burgerNew[index].amount += 1;
        else {
          if (burgerNew[index].amount > 0) {
            burgerNew[index].amount -= 1;
          } else {
            if (burgerNew[index].amount === 0) alert("Lượng thức ăn tối thiểu");
          }
        }

      }
      state.burger = burgerNew;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default OrderBurger;
