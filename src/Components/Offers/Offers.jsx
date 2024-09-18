import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='Offers'>
<div className="offers-left">
    <h1>EXCLUSIVE</h1>
    <h1>OFFERS FOR YOU</h1>
    <p>Only On Best Sellers</p>
</div>
<div className="offers-right">
    <img src={exclusive_image} alt="" />
    </div> 
    </div>
  )
}

export default Offers