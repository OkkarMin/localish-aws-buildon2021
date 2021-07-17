import Link from "next/link";

import {
  Flex,
  Heading,
  Button,
  Link as ChakraLink,
  VStack,
  HStack,
} from "@chakra-ui/react";

import { FriendImage } from "../components/friendAmongUs/friendImage";

const FriendAmongUs = () => {
  return (
    <VStack align="center" justify="center">
      <Heading>Friend Among Us</Heading>
      <FriendImage />
      <HStack spacing="10">
        <Link href="/friendAmongUsProfile">
          <Button colorScheme="teal">Create profile</Button>
        </Link>
        <Link href="/matchFriends">
          <Button colorScheme="teal">Start matching!!</Button>
        </Link>
      </HStack>
    </VStack>
  );
};

export default FriendAmongUs;
