import React from "react";
import CartIcon from "./../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const handleClick = ()=>{
props.showModal();
  }
  return (
    <button className={classes.button} onClick={handleClick}>
      <span className={classes.icon}>
         <CartIcon/> 
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
          3
      </span>
    </button>
  );
};

export default HeaderCartButton;
