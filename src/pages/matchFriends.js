import { useEffect, useState } from "react";
import {
  Box,
  Text,
  VStack,
  Flex,
  Heading,
  Button,
  HStack,
  Center,
} from "@chakra-ui/react";
import { ChatIcon, ArrowBackIcon } from "@chakra-ui/icons";

import Link from "next/link";

import { DataStore } from "@aws-amplify/datastore";
import { FriendsAmongUs } from "../models";
import FriendCard from "../components/friendAmongUs/friendCard";

import TinderCard from "react-tinder-card";

const MatchFriends = () => {
  const [applications, setapplications] = useState([]);
  const [likedPerson, setlikedPerson] = useState();
  const [lastDirection, setLastDirection] = useState();

  let likeList = [];

  useEffect(() => {
    async function fetchApplications() {
      const applicationsData = await DataStore.query(FriendsAmongUs);

      setapplications(applicationsData);
    }

    DataStore.observe(FriendsAmongUs).subscribe(() => {
      fetchApplications();
    });
    fetchApplications();
  }, []);

  const swiped = (direction, likedPerson) => {
    if (direction == "right") {
      likeList.push(likedPerson);
      setlikedPerson(likedPerson);
      setLastDirection(direction);
    }
    setLastDirection(direction);
  };

  return (
    <Box align="center">
      <HStack justify="center">
        <Link href="/friendAmongUs">
          <Button>
            <ArrowBackIcon />
          </Button>
        </Link>
        <Heading>Friend Among Us</Heading>
      </HStack>

      {applications.map((character, i) => (
        <TinderCard
          className="swipe"
          key={character.name}
          onSwipe={(dir) => swiped(dir, character.name)}
        >
          <Box position="fixed" width="100%" mt="20">
            <FriendCard
              key={i}
              name={character.name}
              interests={character.interests}
              others={character.others}
            />
          </Box>
        </TinderCard>
      ))}

      {lastDirection == "right" ? (
        <Text m="5" className="infoText">
          You liked {likedPerson}
        </Text>
      ) : (
        <Text></Text>
      )}
      <Button positon="fixed" top="450">
        <ChatIcon mr="2" /> Start chatting!!
      </Button>
    </Box>
  );
};

export default MatchFriends;
