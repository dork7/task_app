import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from '../../config/axios';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { createToast } from '../notification';

const Products = ({ token, ...props }) => {
  const [productsList, setProductsList] = useState([]);
  const { auth } = useAuth();

  const axiosPrivate = useAxiosPrivate();

  const fetchData = async () => {
    // const options = {
    //   method: 'GET',
    //   url: `/product/protected`,
    //   headers: {
    //     'content-type': 'application/json',
    //     Authorization: `Bearer ${auth.accessToken}`,
    //   },
    // };
    try {
      const resp = await axiosPrivate(`/product/protected`);
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
