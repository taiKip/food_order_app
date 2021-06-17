import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton"
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Happy Meals</h1>
       <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}> 
        <img src={mealsImage} alt=" a table full of delicious food"/>
      </div>
    </>
  );
};

export default Header;
