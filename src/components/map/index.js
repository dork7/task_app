import { Button, Stack, Flex, HStack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Map from './Map';
import SelectionMap from './SelectionMap';
import { motion } from 'framer-motion';

const maps = ['SelectionMap', 'SimpleMap'];
const MapComponent = () => {
  const [mapSelected, setMapSelected] = useState(maps[0]);

  return (
    <>
      {' '}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        exit={{
          opacity: 0,
        }}
      >
        <Flex
          flexDir={'column'}
          alignItems="center"
          justifyContent="center"
          // backgroundColor="gray.700"
          // grow={true}
          // height="100%"
          p={4}
        >
          <HStack p={4}>
            {maps.map((item) => (
              <Button
                variant={'outline'}
                _focus={{
                  bg: 'black',
                  color: 'white',
                }}
                key={item}
                onClick={() => setMapSelected(item)}
              >
                {item}
              </Button>
            ))}
          </HStack>
          <Stack>
            {' '}
            <Text>MapComponent </Text>
            {mapSelected === 'SimpleMap' && <Map />}
            {mapSelected === 'SelectionMap' && <SelectionMap />}
          </Stack>
        </Flex>{' '}
      </motion.div>
    </>
  );
};

export default MapComponent;
