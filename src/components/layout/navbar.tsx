import Link from "next/link";

import {
  Button,
  Flex,
  IconButton,
  Image,
  Link as ChakraLink,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

import DrawerMenu from "./drawer-menu";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex as="nav" align="center" p="4" borderBottomColor="red">
      <Link href="/">
        <ChakraLink>
          <Image h="40px" src="/localish.svg" alt="localish logo" />
        </ChakraLink>
      </Link>

      <Spacer />

      <Link href="/signup">
        <Button colorScheme="greenPrimary">Join</Button>
      </Link>
      <Link href="/signin">
        <Button ml="4">Sign-in</Button>
      </Link>
      <IconButton
        ml="4"
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
