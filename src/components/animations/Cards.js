import React from "react";
import {
  chakra,
  Grid,
  Box,
  Button,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "./Card";
import { motion } from "framer-motion";

const Cards = () => {
  return (
    <>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 200 }}
        exit={{ opacity: 0, y: -200 }}
        transition={{ duration: 0.15 }}
      >
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {[...Array(5).keys()].map((item, idx) => {
            return (
              <>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Card />
                </motion.div>
              </>
            );
          })}
        </Grid>
      </motion.div>
    </>
  );
};

export default Cards;
