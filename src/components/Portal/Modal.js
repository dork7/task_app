import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Button, Flex } from '@chakra-ui/react';

const MODAL_STYLE = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  color: 'black',
  padding: '2rem',
  zIndex: 1000,
};

const MODAL_OVERLAY = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',

  zIndex: 1000,
};

const Modal = ({ children, toggleModal, setToggleModal, ...props }) => {
  if (!toggleModal) return null;
  return ReactDOM.createPortal(
    <div style={MODAL_OVERLAY} onClick={() => setToggleModal(!toggleModal)}>
      <Flex flexDir="column" style={MODAL_STYLE} {...props}>
        <Flex
          borderBottom="1px solid hsl(214, 35%, 80%)"
          justify="flex-end"
          //   flexDir="column"
          alignItems="center"
        >
          <Button> X </Button>
        </Flex>
        {children}
      </Flex>
    </div>,
    document.getElementById('portal-div')
  );
};

export default Modal;
