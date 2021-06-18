import { useReducer } from "react";
import CartContext from "./CartContext";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;
    let existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload
    );
    const existingItem = state.items[existingCartItemIndex]
    const updatedTotalAmount =state.totalAmount-existingItem.price;
    let updatedItems;
    if(existingItem.amount===1){
      updatedItems = state.items.filter(item=>item.id!==action.payload)
    }
    else{
      const updatedItem = {...existingItem, amount:existingItem.amount-1}
   updatedItems =[...state.items];
   updatedItems[existingCartItemIndex] = updatedItem;

    }
  
    return {items:updatedItems,totalAmount:updatedTotalAmount};
  }
};
const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const handleAddItemToCart = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", payload: item });
  };
  const handleRemoveItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", payload: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: handleAddItemToCart,
    removeItem: handleRemoveItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
