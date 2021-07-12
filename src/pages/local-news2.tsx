import Link from "next/link";

import { Flex, Heading, Link as ChakraLink } from "@chakra-ui/react";

import { ArrowBackIcon } from "@chakra-ui/icons";

const LocalNews = () => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Heading>LocalNews Page</Heading>
      <Link href="/">
        <ChakraLink>
          <ArrowBackIcon w="8" h="8" />
        </ChakraLink>
      </Link>
    </Flex>
  );
};

export default LocalNews;
