import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Filterdata() {
  let user = JSON.parse(sessionStorage.getItem("user"));
  const user_email = user ? user.email : null;
  const [userSubscriptions, setUserSubscriptions] = useState([]);
  const [products, setProducts] = useState([]);

  
  const fetchUserSubscriptions = () => {
    axios.get('http://localhost:1337/api/filtercatsercats', { params: { user_email: user_email } })
      .then((response) => {
      
        const productIds = response.data.map(item => item.p_id);
        setUserSubscriptions(productIds);
        console.log(productIds);
      })
      .catch(error => {
        console.error('Error fetching user subscriptions:', error);
      });
  };

  // Simulated fetchProducts function
  const fetchProducts = () => {
    axios.get('http://localhost:1337/api/get_proall')
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  useEffect(() => {
    fetchUserSubscriptions();
    fetchProducts();
  }, []); // dependency array

  // Filter products based on user subscriptions
  const filteredProducts = products.filter(product => userSubscriptions.includes(product.cat_id));
console.log(filteredProducts)
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.p_id}>{product.p_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Filterdata;
