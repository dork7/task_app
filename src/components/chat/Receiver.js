import React, { useState } from "react";

import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import {
  Chat,
  MessageList,
  MessageInput,
  ChannelList,
  MemberList,
  useChannels,
  useChannelMembers,
} from "@pubnub/react-chat-components";
import { Box, Stack, HStack, Text, Button } from "@chakra-ui/react";

const usersList = ["user1", "user2", "user3", "user4"];

const Receiver = () => {
  const theme = "light";
  const [currentChannel, setCurrentChannel] = useState("user1");

  //   const [channels, fetchPage, total, error] = useChannels();
  const [members, fetchPage, refetchChannelMembers, total, error] =
    useChannelMembers({
      channel: "myCurrentChannel",
    });

  const handleClick = (e) => {
    console.log(`e.target.id`, e.target.id);
    setCurrentChannel(e.target.id);
  };

  return (
    <Box p={4}>
      <Text>Talking to {currentChannel} </Text>
      <HStack p={2}>
        {usersList.map((user) => {
          return (
            <Button
              w="100%"
              variant="outline"
              id={user}
              onClick={(e) => handleClick(e)}
              colorScheme="red"
            >
              {user}
            </Button>
          );
        })}
      </HStack>
      <Chat {...{ currentChannel, theme }}>
        {/* <ChannelList channels={channels} /> */}
        <MemberList members={members} />
        <MessageList />
        <MessageInput />
      </Chat>
    </Box>
  );
};

export default Receiver;
