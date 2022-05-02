import { Box, Button, HStack, Input, Stack, Text } from '@chakra-ui/react';
import {
  Chat,
  MessageInput,
  MessageList,
  TypingIndicator,
  useChannelMembers,
  useUsers,
} from '@pubnub/react-chat-components';
import { usePubNub } from 'pubnub-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useViewportScroll } from 'framer-motion';
import { useMainAnimation } from '../animations/useMainAnimation';

const usersList = ['channel_1', 'channel_2'];

const ChatLayout = () => {
  const pubnub = usePubNub();
  const [currentChannel, setCurrentChannel] = useState(usersList[0]);
  const [channels, setChannels] = useState(usersList);

  useEffect(() => {
    // add user meta info
    //     pubnub.objects.setUUIDMetadata({
    //       data: {
    //         uuid: "lol2",
    //         name: "John Doe",
    //         email: "johndoe@pubnub.com",
    //         custom: {
    //           nickname: "Mr. Mysterious",
    //         },
    //       },
    //     });
    // remove user meta info not working
    // const lol = pubnub.objects.removeUUIDMetadata("myUniqueUUID");
    // lol.then((ee) => {
    //   console.log(`ee`, ee);
    // });
    // add user in channel
    // pubnub.objects.setChannelMembers({
    //   channel: "myCurrentChannel",
    //   uuids: ["johndoe_12" ],
    // });
    // remove user from channel
    // pubnub.objects.removeChannelMembers({
    //   channel: "myCurrentChannel",
    //   uuids: ["johndoe_12"],
    // });
    // pubnub.objects.setUUIDMetadata()
    // fetching previous messages
    // pubnub.fetchMessages(
    //   {
    //     channels: [currentChannel],
    //     end: "15343325004275466",
    //     count: 25, // default/max is 25 messages for multiple channels (up to 500)
    //   },
    //   function (status, response) {
    //     console.log("res", status, response);
    //   }
    // );
  }, []);

  // const currentChannel = "myCurrentChannel";
  const theme = 'light';
  const [members, fetchPage, refetchChannelMembers, total, e: error] =
    useChannelMembers({
      channel: 'myCurrentChannel',
      includeState: true,
    });
  const [users] = useUsers();

  const handleClick = (e) => {
    // console.log(`currentChannel`, currentChannel);
    // pubnub.unsubscribe({
    //   channels: [currentChannel],
    // });
    setCurrentChannel(e.target.id);
    pubnub.setState(
      {
        state: {
          mood: 'online',
          status: 'online',
        },
        channels: [e.target.id],
      },
      (status, response) => {
        // handle state setting response
        console.log(`status, response`, status, response);
      }
    );
  };

  const [messages, addMessage] = useState([]);

  const handleMessage = (event) => {
    console.log(`event`, event);
    setCurrentChannel(event.channel);
    const message = event.message;
    if (typeof message === 'string' || message.hasOwnProperty('text')) {
      const text = message.text || message;
      // console.log(`text`, text);
      addMessage((messages) => [...messages, text]);
    }
  };

  const handlePresence = (event) => {
    console.log(`event`, event);
  };

  useEffect(() => {
    // pubnub.addListener({
    //   message: handleMessage,
    //   presence: handlePresence,
    //   messageAction: (action) => {
    //     console.log(`action`, action);
    //   },
    // });
    pubnub.subscribe({ channels });

    return () => {
      pubnub.unsubscribe({
        channels: [channels],
      });
    };
  }, [pubnub, channels]);

  const unSub = () => {
    pubnub.unsubscribe({
      channels: [channels],
    });
  };

  const getMessageCount = () => {
    pubnub
      .messageCounts({
        channels: channels,
        channelTimetokens: ['15518041524300251'],
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        // handle error
      });
  };

  const getUUIDs = async () => {
    console.log(`pubnub.getUUID();`, pubnub.getUUID());
    try {
      const result = await pubnub.objects.getAllUUIDMetadata();
      console.log(`result`, result);
    } catch (status) {
      console.log('operation failed w/ error:', status);
    }
  };
  const setMeta = (obj) => {
    pubnub.objects.setUUIDMetadata({
      data: {
        name: 'dork Doe',
        email: 'dorkdoe@pubnub.com',
        custom: {
          nickname: 'Mr. dork',
        },
      },
    });
  };

  const getMeta = async () => {
    console.log('meta', await pubnub.objects.getAllUUIDMetadata());
  };
  const [inputVal, setInputVal] = useState('');
  const mainAnimation = useMainAnimation();

  return (
    <motion.div
      variants={mainAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Box p={4}>
        <HStack p={2}>
          <Link to={'/chat'}>
            <Button variant="solid" colorScheme="teal">
              Sender
            </Button>
          </Link>
          <Link to={{ pathname: '/receiver' }} target="_blank">
            <Button variant="solid" colorScheme="teal">
              Receiver
            </Button>
          </Link>
        </HStack>
        <Stack p={2}>
          <Input
            placeholder="Enter Id"
            onChange={(e) => setInputVal(e.target.value)}
          />
          <Button
            variant="solid"
            colorScheme="teal"
            onClick={() => {
              setChannels((prevVal) => [...prevVal, inputVal]);
              setCurrentChannel(inputVal);
            }}
          >
            Connect
          </Button>
        </Stack>
        <Text>Talking to {currentChannel} </Text>
        <HStack p={2}>
          <Button variant="solid" colorScheme="teal" onClick={unSub}>
            unSub
          </Button>
          <Button variant="solid" colorScheme="teal" onClick={getMessageCount}>
            Get count
          </Button>
          <Button variant="solid" colorScheme="teal" onClick={getUUIDs}>
            Get UUIDs{' '}
          </Button>
          <Button variant="solid" colorScheme="teal" onClick={setMeta}>
            Set metadata
          </Button>
          <Button variant="solid" colorScheme="teal" onClick={getMeta}>
            Get metadata
          </Button>
        </HStack>
        <Text>Employees</Text>
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

        <Box>
          <Chat {...{ currentChannel, theme, users }}>
            <MessageList
              enableReactions
              fetchMessages={5}
              onScroll={function noRefCheck() {}}
            >
              {' '}
              <TypingIndicator />
            </MessageList>
            <MessageInput typingIndicator senderInfo fileUpload="image" />
          </Chat>
        </Box>
      </Box>{' '}
    </motion.div>
  );
};

export default ChatLayout;
