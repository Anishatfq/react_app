import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

import { useCart } from '../../Pages/CartContext'




const Navbar = () => {
  const { cartItems } = useCart();
 
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=""/>
            <p>MyKart</p>
        </div>
        <ul className="nav-menu">
        <li><Link style={{textDecoration:'none'}}to='/'>Home</Link></li>
        <li><Link  style={{textDecoration:'none'}} to='/product'>Product</Link></li>
        <li><Link  style={{textDecoration:'none'}} to='/about'>About</Link></li>
        <li><Link  style={{textDecoration:'none'}} to='/contact'>Contact Us</Link> </li>
        
        </ul>
<div className="nav-cart">
<Link to='/cart'>
          <img src={cart_icon} alt="Cart" />
          <p className="nav-cart-count">{cartItems.length}</p>
        </Link>
</div>
    </div>
  )
}

export default Navbar