import { Button, HStack, Stack, Text } from '@chakra-ui/react';
import { motion, useViewportScroll, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

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
  const [toggleView, setToggleView] = useState(true);
  return (
    <>
      <HStack gap={10}>
        <Stack>
          {[...Array(5).keys()].map((item, idx) => {
            return (
              <motion.div
                initial="hidden"
                animate={{ y: idx * 10 }}
                transition={{ delay: 1, type: 'spring', stiffness: 100 }}
              >
                {' '}
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

      <Stack pt={12}>
        <Button onClick={() => setToggleView(!toggleView)}>Toggle</Button>
        <AnimatePresence>
          {toggleView && (
            <motion.p1
              exit={{
                opacity: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 1,
              }}
            >
              Hello, example of exit animation
            </motion.p1>
          )}
        </AnimatePresence>
      </Stack>
    </>
  );
};

export default Simple;
