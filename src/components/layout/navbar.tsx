import Link from "next/link";
import { useRouter } from "next/router";

import useUser from "../../hooks/useUser";

import {
  Button,
  Flex,
  Heading,
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
  const { user, signOut } = useUser();

  const router = useRouter();

  let currentPage = "";
  try {
    currentPage = router.pathname
      .split("/")[1]
      .replaceAll("-", " ")
      .toLocaleUpperCase();
  } catch (error) {
    currentPage = "";
  }

  return user ? (
    <Flex as="nav" align="center" p="8" borderBottomColor="red">
      <Link href="/">
        <ChakraLink>
          <Image h="40px" src="/localish.svg" alt="localish logo" />
        </ChakraLink>
      </Link>

      <Spacer />

      <Heading textColor="green.500">{currentPage}</Heading>

      <Spacer />

      <Button
        ml="4"
        onClick={() => {
          signOut();
          router.push("/");
        }}
      >
        Sign Out
      </Button>

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
  ) : (
    <Flex as="nav" align="center" p="8" borderBottomColor="red">
      <Link href="/">
        <ChakraLink>
          <Image h="40px" src="/localish.svg" alt="localish logo" />
        </ChakraLink>
      </Link>

      <Spacer />

      <Heading textColor="green.500">{currentPage}</Heading>

      <Spacer />

      <Link href="/signup">
        <Button colorScheme="greenPrimary">Join</Button>
      </Link>
      <Link href="/signin">
        <Button ml="4">Sign-in</Button>
      </Link>
      {user == null ? (
        <div></div>
      ) : (
        <div>
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
        </div>
      )}
    </Flex>
  );
};

export default NavBar;
