

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';

import './ProductDetail.css';

const ProductDetail = ({  }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();
  

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.log(error));
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
        addToCart(product);
      }
  };

  return (
    <div className="product-detail-container">
      {product && (
        <div>
          <h2 className="product-title">{product.title}</h2>
          <img src={product.image} alt={product.title} className="product-image" />
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>
          <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
