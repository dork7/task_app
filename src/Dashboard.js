import { Button } from '@chakra-ui/button';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Center, Flex, Box, Stack } from '@chakra-ui/layout';
import { Icon, useColorMode } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard = ({ pages, loggedIn, setLoggedIn, children }) => {
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

  const [menuDir, setMenuDir] = useState(true);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, color: 'red' }}
        animate={{ opacity: 1, color: 'white' }}
        transition={{ delay: 0.2, stiffness: 100 }}
      >
        <>
          <Flex className="nav-layout">
            <motion.div className="box" />
            <Box flex="1" my="12">
              {children}
            </Box>
            <Box bgColor={'gray'} p={4} borderRadius={12} mx={12}>
              <Box className="nav-bar">
                {pages.map((page, idx) => (
                  <Link key={`${page}-${idx}`} to={page.href}>
                    <Button
                      key={`${page}-${idx}`}
                      variant="grayButton"
                      m={2}
                      data-testid={`tab-${idx}`}
                      size="sm"
                      flex="0 1 50px"
                    >
                      {page.label}
                    </Button>{' '}
                  </Link>
                ))}
                <Button
                  id="color-mode"
                  onClick={toggleColorMode}
                  m={2}
                  size="sm"
                >
                  {colorMode === 'light' ? (
                    <Icon as={SunIcon} />
                  ) : (
                    <Icon as={MoonIcon} />
                  )}
                </Button>

                <Button onClick={() => setLoggedIn(!loggedIn)} m={2} size="sm">
                  {loggedIn ? 'LOGOUT' : 'LOG IN'}
                </Button>
                <Button
                  onClick={() => setMenuDir(!menuDir)}
                  m={2}
                  size="sm"
                  textAlign={'center'}
                >
                  {menuDir ? '<-' : '->'}
                </Button>
              </Box>
            </Box>
          </Flex>
        </>
      </motion.div>
    </>
  );
};

export default Dashboard;
