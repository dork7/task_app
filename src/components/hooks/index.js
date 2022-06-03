import { Button, Flex, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import CallBackHook from './CallBackHook';
import ContextHook from './ContextHook';
import ImperativeHandleHook from './ImperativeHandleHook';
import LayoutEffect from './LayoutEffect';
import MemoHook from './MemoHook';
import ReducerHook from './ReducerHook';
import RefHook from './RefHook';
import UseEffect from './UseEffect.js';
import { motion } from 'framer-motion';
import { useMainAnimation } from '../animations/useMainAnimation';

const hooks = [
  'useEffect',
  'useCallBack',
  'useMemo',
  'useContextHook',
  'useReducer',
  'useRef',
  'useImperativeHandle_useForwardRef',
];

const ReactHooks = () => {
  const [selectedHook, setSelectedHook] = useState(hooks[0]);
  const mainAnimation = useMainAnimation();

  return (
    <motion.div
      variants={mainAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
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
          {hooks.map((item) => (
            <Button
              variant={'outline'}
              _focus={{
                bg: 'black',
                color: 'white',
              }}
              key={item}
              onClick={() => setSelectedHook(item)}
            >
              {item}
            </Button>
          ))}
        </HStack>
        {selectedHook === 'useEffect' && <UseEffect />}
        {selectedHook === 'useReducer' && <ReducerHook />}
        {selectedHook === 'useMemo' && <MemoHook />}
        {selectedHook === 'useRef' && <RefHook />}
        {selectedHook === 'useCallBack' && <CallBackHook />}
        {selectedHook === 'useLayoutEffect' && <LayoutEffect />}
        {selectedHook === 'useContextHook' && <ContextHook />}
        {selectedHook === 'useImperativeHandle_useForwardRef' && (
          <ImperativeHandleHook />
        )}
      </Flex>
    </motion.div>
  );
};

export default ReactHooks;
