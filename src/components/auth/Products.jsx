import { Button } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Products = ({ token, ...props }) => {
  const [productsList, setProductsList] = useState([]);
  const { getStoredValue, storeValue, removeValue } = useLocalStorage();

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: `${process.env.REACT_APP_HOST_URL}/product/protected`,
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const val = await getStoredValue('jwtToken');
    console.log(`jwtToken`, val);
    const resp = await axios(options);
    setProductsList(resp.data.products);
  };

  return (
    <>
      <Button variant={'blackButton'} onClick={fetchData} w="full">
        GET PRODUCTS
      </Button>
      <div>
        {productsList.map(({ productId, productOwner, productName }) => (
          <p key={productId}>
            {productId} - {productName} || {productOwner}
          </p>
        ))}
      </div>
    </>
  );
};

export default Products;
