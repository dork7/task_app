import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const Products = ({ token, ...props }) => {
  const [productsList, setProductsList] = useState([]);

  const fetchData = async () => {
    console.log(`token`, token);
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_HOST_URL}/product/protected`,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const resp = await axios(options);
    setProductsList(resp.data.products);
  };

  return (
    <>
      <Button variant={"blackButton"} onClick={fetchData} w="full">
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
