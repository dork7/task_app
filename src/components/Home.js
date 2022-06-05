import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
const Home = (props) => {
  const homeAnimation = {
    hidden: {
      opacity: 0,
      // color: 'red',
    },
    visible: {
      opacity: 1,
      // color: 'white',
      transition: {
        // delay: 1,
        duration: 1,
        type: 'spring',
        stiffness: 100,
      },
    },
    exit: {
      x: '100vw',
      transition: { ease: 'easeOut' },
    },
  };
  // if (Math.random() > 0.5) return new Error('Error for testing test boundary');
  return (
    <Flex
      flexDir={'column'}
      alignItems="center"
      justifyContent="center"
      // backgroundColor="gray.700"
      // grow={true}
      // height="100%"
      p={4}
    >
      <motion.div
        variants={homeAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Flex className="blur-box" wrap="wrap" flexDir={'column'}>
          <Text>React demo app !!!</Text>
          <Text>Props passed form APP {JSON.stringify(props)}</Text>
        </Flex>
      </motion.div>
    </Flex>
  );
};

export default Home;
