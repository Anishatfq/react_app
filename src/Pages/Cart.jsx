
import React from 'react';
import { useCart } from './CartContext'

const Cart = () => {
    const { cartItems } = useCart();
  return (    
    <div >
      
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
              <div style={{ marginLeft: '20px' }}>
                <p>Title: {item.title}</p>
                <p>Name: {item.name}</p>
                <p>Description: {item.description}</p>
                <p>Price: ${item.price}</p>
                
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
