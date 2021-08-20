import Link from "next/link";

import { Button, VStack, HStack } from "@chakra-ui/react";

import { FriendImage } from "../components/friendAmongUs/friendImage";

const FriendAmongUs = () => {
  return (
    <VStack align="center" justify="center">
      <FriendImage />
      <HStack spacing="10">
        <Link href="/friend-among-us-profile">
          <Button colorScheme="teal">Create profile</Button>
        </Link>
        <Link href="/match-friends">
          <Button colorScheme="teal">Start matching!!</Button>
        </Link>
      </HStack>
    </VStack>
  );
};

export default FriendAmongUs;
