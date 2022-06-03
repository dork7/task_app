import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { useFetchData } from "../hooks/useFetchData";
import Card from "./Card";
import { SearchBar } from "./SearchBar";

const URL = "https://jsonplaceholder.typicode.com/posts";

const ListComp = () => {
  const { isLoading, error, data } = useFetchData("posts", URL, true);
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }
  if (data) {
  }

  return (
    <>
      <SearchBar p={12} />
      <SimpleGrid columns={[1, 2, 3]}>
        {data.map(function (data) {
          const { id, title, body } = data;
          return <Card key={id} title={title} body={body} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default ListComp;
