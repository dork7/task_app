import { Button } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import axios from '../../config/axios';
import AuthContext from '../../context/AuthProvider';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { createToast } from '../notification';

const Products = ({ token, ...props }) => {
  const [productsList, setProductsList] = useState([]);
  const { getStoredValue, storeValue, removeValue } = useLocalStorage();
  const { auth } = useContext(AuthContext);

  const fetchData = async () => {
    const JWTToken = await getStoredValue('jwtToken');
    const options = {
      method: 'GET',
      url: `/product/protected`,
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${auth.accessToken}`,
      },
    };
    try {
      const resp = await axios(options);
      setProductsList(resp.data.products);
    } catch (err) {
      console.log(`err`, err);
      createToast({
        title: 'Something went wrong',
        msg: err.response.data.message ?? '',
        type: 'error',
      });
    }
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
