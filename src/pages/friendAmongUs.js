import Link from "next/link";

import {
  Flex,
  Heading,
  Button,
  Link as ChakraLink,
  VStack,
} from "@chakra-ui/react";

import { ArrowBackIcon } from "@chakra-ui/icons";

const FriendAmongUs = () => {
  return (
    <VStack align="center" justify="center">
      <Heading>FriendAmongUs Page</Heading>
      <Link href="/friendAmongUsProfile">
        <Button>Edit profile</Button>
      </Link>
      <Link href="/matchFriends">
        <Button>Start matching!!</Button>
      </Link>
    </VStack>
  );
};

export default FriendAmongUs;
