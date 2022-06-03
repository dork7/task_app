import { Box, Button, HStack, Text } from "@chakra-ui/react";
import {
  Chat,
  MemberList,
  MessageInput,
  MessageList,
  useChannelMembers,
} from "@pubnub/react-chat-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const usersList = ["channel_1", "channel_2"];

const Receiver = () => {
  const theme = "light";
  const [currentChannel, setCurrentChannel] = useState(usersList[0]);

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
      <HStack p={2}>
        <Link to={"/chat"} target="_blank">
          <Button variant="solid" colorScheme="teal">
            Sender
          </Button>
        </Link>
        <Link to={{ pathname: "/receiver" }}>
          <Button variant="solid" colorScheme="teal">
            Receiver
          </Button>
        </Link>
      </HStack>
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
