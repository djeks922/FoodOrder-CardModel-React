import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemFrom from "./MealItemForm";
import CartContext from "../../../store/cart-context";
const MealItem = (props) => {
  const ctx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = amount => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return (
    <li className = {classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className = {classes.description}>{props.description}</div>
        <div className = {classes.price}>{price}</div>
      </div>
      <div>
        <MealItemFrom onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
