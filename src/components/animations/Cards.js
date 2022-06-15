import { Box, Flex, Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import Card from './Card';

const Cards = () => {
  return (
    <>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 200 }}
        exit={{ opacity: 0, y: -200 }}
        transition={{ duration: 0.15 }}
      >
        <Flex wrap="wrap" justify="center">
          {[...Array(5).keys()].map((item, idx) => {
            return (
              <>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  key={idx}
                >
                  <Box p={2}>
                    <Card />
                  </Box>
                </motion.div>
              </>
            );
          })}
        </Flex>
      </motion.div>
    </>
  );
};

export default Cards;
