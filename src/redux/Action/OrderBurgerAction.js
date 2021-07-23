import { TANG_GIAM } from "../Type/OrderBurgerType";

export const tangGiamAction = (name, tangGiam) => {
  return {
    type: TANG_GIAM,
    name,
    tangGiam,
  };
};