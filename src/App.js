import {useContext,useState}  from 'react'
import './App.css';
import Header from "./components/Layout/Header"
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart'

import CartContext from './contexts/CartContext';
 import CartContextProvider from './contexts/CartContextProvider'
function App() {
  const [showModal,setShowModal] = useState(false)
 
  const toggleModal=()=>{
    setShowModal(prev=>!prev)
  }

  return (
  <CartContextProvider>
   {showModal && <Cart toggleModal={toggleModal}/>} 
  <Header openModal={toggleModal}/>
  <main>
    <Meals/>
  </main>
  </CartContextProvider>
  );
}

export default App;
