import Link from "next/link";

import {
  Flex,
  Heading,
  IconButton,
  Link as ChakraLink,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

import DrawerMenu from "./drawer-menu";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex as="nav" align="center" p="4" bg="greenPrimary.100">
      <Link href="/">
        <ChakraLink>
          <Heading as="h2" fontSize="2xl" color="green">
            localish
          </Heading>
        </ChakraLink>
      </Link>
      <Text ml="4" textColor="greenSecondary.400">
        hyper-local-communities
      </Text>

      <Spacer />

      <IconButton
        aria-label="Open menu drawer"
        icon={<HamburgerIcon />}
        bg="transparent"
        _hover={{ backgroundColor: "transparent" }}
        _active={{ backgroundColor: "transparent" }}
        onClick={onOpen}
      ></IconButton>

      <DrawerMenu isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default NavBar;
