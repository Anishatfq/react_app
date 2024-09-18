import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.css'; 

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  return (
   < div>
    <div className="product-list">
      
      <ul>
        {products.map(product => (
          <li key={product.id} className="product-item">
            <Link to={`/product/${product.id}`}>
              <div className="product-details">
                <img src={product.image} alt={product.title} className="product-image" />
                <div>
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">Price: ${product.price}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Product;
