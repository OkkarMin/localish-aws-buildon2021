import { useEffect, useState, useContext } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

import Link from "next/link";

import { DataStore } from "@aws-amplify/datastore";
import { FriendsAmongUs } from "../models";

import TinderCard from "react-tinder-card";

import FriendCard from "../components/friendAmongUs/friendCard";
import { FriendMatchesContext } from "../context/FriendMatchesContext";

const MatchFriends = () => {
  const [setMatchList] = useContext(FriendMatchesContext);

  const [applications, setapplications] = useState([]);
  const [likedPerson, setlikedPerson] = useState();
  const [lastDirection, setLastDirection] = useState();

  useEffect(() => {
    async function fetchApplications() {
      const applicationsData = await DataStore.query(FriendsAmongUs);

      setapplications(applicationsData);
    }

    fetchApplications();
  }, []);

  const swiped = (direction, likedPerson) => {
    if (direction == "right") {
      setMatchList((prev) => [...prev, likedPerson]);
      setlikedPerson(likedPerson);
      setLastDirection(direction);
    }
    setLastDirection(direction);
  };

  return (
    <Box align="center">
      {applications.map((character, i) => (
        <TinderCard
          className="swipe"
          key={character.name}
          onSwipe={(dir) => swiped(dir, character.name)}
          preventSwipe={["up", "down"]}
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
      <Text fontWeight="bold" fontSize="xl">
        Swipe to match
      </Text>
      {lastDirection == "right" ? (
        <Text m="5" className="infoText">
          You liked {likedPerson}
        </Text>
      ) : (
        <Text></Text>
      )}

      <Link href="/chat">
        <Button colorScheme="teal" positon="fixed" top="450">
          <ChatIcon mr="2" /> Chats
        </Button>
      </Link>
    </Box>
  );
};

export default MatchFriends;
