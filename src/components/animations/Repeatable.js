import { Text, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import './styles.css';

const Repeatable = () => {
  const divVariant = {
    hover: {
      scale: [
        1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1,
        1.1, 1,
      ],
      transition: {
        duration: 3,
      },
    },
  };
  const divVariantForRepeat = {
    hover: {
      scale: 1.3,
      transition: {
        duration: 0.5,
        yoyo: Infinity, // added yoyo to add infinity loop xD
      },
    },
  };
  return (
    <>
      <motion.div variants={divVariant} whileHover="hover">
        <Text>Demonstration of key frame</Text>
      </motion.div>
      <motion.div variants={divVariantForRepeat} whileHover="hover">
        <Text>Demonstration of key frame</Text>
      </motion.div>
    </>
  );
};

export default Repeatable;
