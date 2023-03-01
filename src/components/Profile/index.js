import { Button, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link, Route, Routes, useMatch } from 'react-router-dom';
import BasicLayout from '../BasicLayout';
import EditProfile from './EditProfile';
import ViewProfile from './ViewProfile';

const ProfilePage = () => {
  const { path, url } = useMatch();

  return (
    <BasicLayout>
      <Text>You can only view this page if you're logged in</Text>
      <Text>NESTED ROUTING</Text>
      <HStack>
        <Link to={`${path}/edit-profile`}>
          <Button>Edit Profile</Button>
        </Link>
        <Link to={`${path}/view-profile`}>
          {' '}
          <Button>View Profile</Button>
        </Link>
      </HStack>
      <Route path={`${path}/edit-profile`} element={<ViewProfile />} />
      <Route path={`${path}/view-profile`} element={<EditProfile />} />
    </BasicLayout>
  );
};

export default ProfilePage;
