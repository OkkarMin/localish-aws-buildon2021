import Link from "next/link";

import {
  Heading,
  Link as ChakraLink,
  ListItem,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

const Index = () => {
  return (
    <VStack minH="100vh" align="center" justify="center">
      <Heading>This is DOS</Heading>
      <UnorderedList>
        <Link href="/education">
          <ChakraLink>
            <ListItem>Education</ListItem>
          </ChakraLink>
        </Link>

        <Link href="/friend-among-us">
          <ChakraLink>
            <ListItem>Friend Among Us</ListItem>
          </ChakraLink>
        </Link>

        <Link href="/friendly-neighbourhood-activities">
          <ChakraLink>
            <ListItem>Friendly Neighbourhood Activities</ListItem>
          </ChakraLink>
        </Link>

        <Link href="/local-board">
          <ChakraLink>
            <ListItem>Local Board</ListItem>
          </ChakraLink>
        </Link>

        <Link href="/local-news">
          <ChakraLink>
            <ListItem>Local News</ListItem>
          </ChakraLink>
        </Link>
      </UnorderedList>
    </VStack>
  );
};

export default Index;
