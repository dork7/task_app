import { Button } from '@chakra-ui/button';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Center, HStack } from '@chakra-ui/layout';
import { Icon, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard = ({ pages }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const transition = { duration: 4, yoyo: Infinity, ease: 'easeInOut' };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, color: 'red', y: -300 }}
        animate={{ opacity: 1, color: 'white', y: 0 }}
        transition={{ delay: 0.2, stiffness: 100 }}
      >
        <Center>
          <HStack p={4}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 222 222"
            >
              <motion.path
                d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
                fill="transparent"
                strokeWidth="6"
                stroke="rgba(255, 255, 255, 0.69)"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={transition}
              />
              <motion.path
                d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
                fill="transparent"
                strokeWidth="6"
                stroke="rgba(255, 255, 255, 0.69)"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={transition}
              />
            </svg>
            <motion.div
              className="box"
              initial={{ offsetDistance: '0%', scale: 2.5 }}
              animate={{ offsetDistance: '100%', scale: 1 }}
              transition={transition}
            />
            {pages.map((page, idx) => (
              <Link key={`${page}-${idx}`} to={page.href}>
                <Button
                  key={`${page}-${idx}`}
                  variant="solid"
                  colorScheme="teal"
                >
                  {page.label}
                </Button>{' '}
              </Link>
            ))}
          </HStack>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? (
              <Icon as={SunIcon} />
            ) : (
              <Icon as={MoonIcon} />
            )}
          </Button>
        </Center>
      </motion.div>
    </>
  );
};

export default Dashboard;
