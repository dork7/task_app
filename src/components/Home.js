import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

  // getting query from useLocation
  const query = new URLSearchParams(useLocation().search);
  // history demo
  const navigate = useNavigate();
  useEffect(() => {
    navigate('?test=url param set using useNavigate ');
  }, []);

  // if (Math.random() > 0.5) return new Error('Error for testing test boundary');
  return (
    <Flex
      flexDir={'column'}
      alignItems="center"
      justifyContent="center"
      // backgroundColor="gray.700"
      grow={true}
      // height="100%"
      // width=""
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
          <Text>This is the query from URL :::: {query.get('test')} </Text>
        </Flex>
      </motion.div>
    </Flex>
  );
};

export default Home;
