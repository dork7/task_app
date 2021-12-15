import React, { useEffect, useState } from "react";
import { usePubNub } from "pubnub-react";
import { useChannelMembers, useUsers } from "@pubnub/react-chat-components";

const PubNubtest = () => {
  const pubnub = usePubNub();
  const channelId = "lol";
  const [channels] = useState([channelId]);
  const [currentLoc, setCurrentLoc] = useState({ latitude: -1, longitude: -1 });
  const [numUsers, setNumUsers] = useState(0);
  const [username, setUsername] = useState("Employee 1");
  const [fixedOnUUID, setFixedOnUUID] = useState("");
  //   const [users, setUsers] = useState(new Map());
  const [isFocused, setIsFocused] = useState(false);
  //   const [usersArray, setUsersArray] = useState(Array.from(users.values()));
  const [users] = useUsers();

  const [members, fetchPage, refetchChannelMembers, total, e: error] =
    useChannelMembers({
      channel: "channel-1",
    });

  useEffect(() => {
    console.log(`members`, members);
    console.log(`users`, users);
  }, []);

  useEffect(() => {
    // pubnub.objects.setChannelMembers({
    //   channel: "channel-1",
    //   uuids: ["johndoe_1", { id: "janedoe_1", custom: { trialPeriod: true } }],
    // });

    pubnub.addListener({
      message: (m) => {
        // const channelName = m.channel; // Channel on which the message was published
        // const channelGroup = m.subscription; // Channel group or wildcard subscription match (if exists)
        // const pubTT = m.timetoken; // Publish timetoken
        // const msg = m.message; // Message payload
        // const publisher = m.publisher; // Message publisher
        // let mUsers = users;

        console.log(m);

        // let coord = [m.message.latitude, m.message.longitude];
        // let oldUser = users.get(m.publisher);

        // let newUser = {
        //   uuid: m.publisher,
        //   latitude: m.message.latitude,
        //   longitude: m.message.longitude,
        // };

        // let tempUsers = users;

        // tempUsers.set(newUser.uuid, newUser);

        // console.log("New User", newUser);
        // console.log("Old User", oldUser);

        // // setUsers(tempUsers);

        // setUsersArray(Array.from(users.values()));
      },
    });
    pubnub.subscribe({ channels });

    return () => {
      pubnub.unsubscribe({ channels });
    };
  }, [pubnub, channels]);

  useEffect(() => {
    // pubnub.addListener({
    //   message: (m) => {
    //     // const channelName = m.channel; // Channel on which the message was published
    //     // const channelGroup = m.subscription; // Channel group or wildcard subscription match (if exists)
    //     // const pubTT = m.timetoken; // Publish timetoken
    //     // const msg = m.message; // Message payload
    //     // const publisher = m.publisher; // Message publisher
    //     // let mUsers = users;
    //     console.log("message ", m);
    //     setCurrentChannel(m.channel);
    //     setChattingUsers();
    //   },
    //   presence: (p) => {
    //     // console.log(`presence event`, p);
    //   },
    // });
    // pubnub.subscribe({ channels });
    // return () => {
    //   pubnub.unsubscribe({ channels });
    // };
  }, []);

  // pubnub.hereNow(
  //   {
  //     channels: channels,
  //     includeState: true,
  //   },
  //   function (status, response) {
  //     console.log("hereNow", status, response);
  //   }
  // );

  // pubnub.publish(
  //   {
  //     channel: "employee1",
  //     message: "Hello to everyone (except me)",
  //     // meta: {
  //     //   uuid: pubnub.getUUID()
  //     // }
  //   },
  //   function (status, response) {
  //     console.log("publish", status, response);
  //   }
  // );

  return <div>dd</div>;
};

export default PubNubtest;
