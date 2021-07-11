import Link from "next/link";

import { Flex, Heading, Link as ChakraLink } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const FriendlyNeighbourhoodActivities = () => {
  return (
    <Flex direction="column" minH="100vh" align="center" justify="center">
      <Heading>FriendlyNeighbourhoodActivities Page</Heading>
      <Link href="/">
        <ChakraLink>
          <ArrowBackIcon w="8" h="8" />
        </ChakraLink>
      </Link>
    </Flex>
  );
};

export default FriendlyNeighbourhoodActivities;
