import React from "react";

import {
  chakra,
  Flex,
  Box,
  Image,
  Icon,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";

import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

// const VolunteerCard = React.forwardRef(funtion VolunteerCard({ name, email, phone, experience, onclick, href }, ref) {
const FriendCard = React.forwardRef(function VolunteerCard(
  { name, interests, others, onClick, href },
  ref
) {
  return (
    <span href={href} onClick={onClick} ref={ref}>
      <VStack
        w={["full", "30vw"]}
        justifyContent="center"
        backgroundColor="green.100"
        shadow="lg"
        rounded="lg"
        height="30vh"
        py={4}
        px={6}
      >
        <chakra.h1
          fontSize="xl"
          fontWeight="bold"
          //color={useColorModeValue("gray.800", "white")}
        >
          {name}
        </chakra.h1>
        <HStack>
          <chakra.h3
            fontSize="xl"
            fontWeight="bold"
            //color={useColorModeValue("gray.800", "white")}
          >
            Interest(s):
          </chakra.h3>
          {JSON.parse(interests).map((interest, i) => (
            <Text key={i}>{interest}</Text>
          ))}
        </HStack>
        <HStack>
          <chakra.h3
            fontSize="xl"
            fontWeight="bold"
            //color={useColorModeValue("gray.800", "white")}
          >
            Other(s):
          </chakra.h3>

          <Text>{others}</Text>
        </HStack>
      </VStack>
    </span>
  );
});

export default FriendCard;
