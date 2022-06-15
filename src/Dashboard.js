import { Button } from '@chakra-ui/button';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Center, Flex } from '@chakra-ui/layout';
import { Icon, useColorMode } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard = ({ pages, loggedIn, setLoggedIn }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const transition = { duration: 4, yoyo: Infinity, ease: 'easeInOut' };

  // get css element

  const color = window
    .getComputedStyle(document.body)
    .getPropertyValue('--color-mode');

  useEffect(() => {
    if (colorMode === 'light') {
      document.documentElement.style.setProperty(
        '--blur-box-bg-color',
        '#f5f5f5'
      );
      document.documentElement.style.setProperty(
        '--blur-box-shadow-color',
        '#9e9e9e'
      );
    } else {
      document.documentElement.style.setProperty(
        '--blur-box-bg-color',
        '#293242'
      );
      document.documentElement.style.setProperty(
        '--blur-box-shadow-color',
        '#011628'
      );
    }
  }, [colorMode]);

  console.log('color', color);

  return (
    <>
      <motion.div
      // initial={{ opacity: 0, color: 'red' }}
      // animate={{ opacity: 1, color: 'white' }}
      // transition={{ delay: 0.2, stiffness: 100 }}
      >
        <Center>
          <Flex wrap={'wrap'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 400 350"
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
              initial={{ opacity: 0, scale: 2.5 }}
              animate={{ opacity: 1, scale: 1 }}
              // transition={transition}
            />
            {pages.map((page, idx) => (
              <Link key={`${page}-${idx}`} to={page.href}>
                <Button
                  key={`${page}-${idx}`}
                  variant="solid"
                  colorScheme="teal"
                  m={2}
                  flex="1"
                  w={120}
                  data-testid={`tab-${idx}`}
                >
                  {page.label}
                </Button>{' '}
              </Link>
            ))}
            <Button id="color-mode" onClick={toggleColorMode} m={2}>
              {colorMode === 'light' ? (
                <Icon as={SunIcon} />
              ) : (
                <Icon as={MoonIcon} />
              )}
            </Button>

            <Button onClick={() => setLoggedIn(!loggedIn)} m={2}>
              {loggedIn ? 'LOGOUT' : 'LOG IN'}
            </Button>
          </Flex>
        </Center>
      </motion.div>
    </>
  );
};

export default Dashboard;
