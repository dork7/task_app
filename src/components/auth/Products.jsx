import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from '../../config/axios';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Products = ({ token, ...props }) => {
  const [productsList, setProductsList] = useState([]);
  const { getStoredValue, storeValue, removeValue } = useLocalStorage();

  const fetchData = async () => {
    const JWTToken = await getStoredValue('jwtToken');
    const options = {
      method: 'GET',
      url: `/product/protected`,
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${JWTToken}`,
      },
    };
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
