import {useState}  from 'react'
const CartContextProvider =(props)=>{
    const [showModal, setShowModal] = useState(false)
const toggleModal =()=>{
    setShowModal(prev=>!prev)
}
  
}

export default CartContextProvider