import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../contexts/CartContext";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
  const handleRemoveCartItem = (id) => {
    cartContext.removeItem(id)
  };
  const handleAddCartItem = (item) => {
    cartContext.addItem({...item,amount:1})
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items &&
        cartContext.items.map((item) => (
          <CartItem
            key={item.id + Date.now()}
            name={item.name}
            price={item.price}
            amount={item.amount}
            //use bind to make sure that both recieve the id and the item respectively
            onAdd={handleAddCartItem.bind(null, item)}
            onRemove={handleRemoveCartItem.bind(null, item.id)}
          ></CartItem>
        ))}
    </ul>
  );

  return (
    <Modal closeModal={props.toggleModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.toggleModal}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
