import { Button, Stack, Flex, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Cards from "./Cards";
import ScaleAble from "./ScaleAble";
import Simple from "./Simple";

const animations = ["simple", "cards", "scaleAble"];
const Animations = () => {
  const [animationSelected, setAnimationSelected] = useState(animations[1]);

  return (
    <>
      <Flex
        flexDir={"column"}
        alignItems="center"
        justifyContent="center"
        // backgroundColor="gray.700"
        // grow={true}
        // height="100%"
        p={4}
      >
        <Text alignText="center">Animations</Text>
        <HStack p={4}>
          {animations.map((item) => (
            <Button
              variant={"outline"}
              _focus={{
                bg: "black",
                color: "white",
              }}
              key={item}
              onClick={() => setAnimationSelected(item)}
            >
              {item}
            </Button>
          ))}
        </HStack>
        <Stack> {animationSelected === "simple" && <Simple />}</Stack>
        <Stack> {animationSelected === "cards" && <Cards />}</Stack>
        <Stack> {animationSelected === "scaleAble" && <ScaleAble />}</Stack>
      </Flex>
    </>
  );
};

export default Animations;
