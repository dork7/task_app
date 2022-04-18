import React from "react";
import { motion, useViewportScroll } from "framer-motion";
import { Button, Stack, Flex, Grid, HStack, Text } from "@chakra-ui/react";
import Card from "./Card";

const Simple = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const { scrollYProgress } = useViewportScroll();
  return (
    <>
      <HStack gap={10}>
        <Stack>
          {[...Array(5).keys()].map((item, idx) => {
            return (
              <motion.div
                initial="hidden"
                animate={{ y: idx * 10 }}
                transition={{ delay: 1, type: "spring", stiffness: 100 }}
              >
                {" "}
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Text variants={item}>lorem text</Text>
                </motion.div>
              </motion.div>
            );
          })}
        </Stack>

        <motion.ul variants={container} initial="hidden" animate="show">
          {[...Array(5).keys()].map((item, idx) => {
            return <Text variants={item}>lorem text</Text>;
          })}
        </motion.ul>
      </HStack>
    </>
  );
};

export default Simple;
