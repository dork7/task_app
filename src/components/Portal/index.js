import { Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import BasicLayout from '../BasicLayout';
import Modal from './Modal';

const Portal = () => {
  const [toggleModal, setToggleModal] = useState(!false);
  return (
    <BasicLayout>
      <Button onClick={() => setToggleModal(!toggleModal)}>Open modal</Button>
      <Modal
        borderRadius={'md'}
        boxSize="2xl"
        {...{ toggleModal, setToggleModal }}
      >
        modal Body
      </Modal>
    </BasicLayout>
  );
};

export default Portal;
