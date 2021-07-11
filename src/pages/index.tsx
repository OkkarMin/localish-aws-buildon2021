import Link from "next/link";

import {
  Button,
  Heading,
  Link as ChakraLink,
  ListItem,
  UnorderedList,
  VStack,
  useToast,
} from "@chakra-ui/react";

const Index = () => {
  const toast = useToast();

  const showToast = (
    type: "success" | "error" | "warning",
    message: string,
    description: string
  ) => {
    toast({
      title: message,
      description: description,
      status: type,
      variant: "left-accent",
      position: "top-right",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack
      minH="100vh"
      align="center"
      justify="center"
      backgroundColor="offWhite"
    >
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

      <Button
        colorScheme="green"
        onClick={() =>
          showToast("success", "Good job!", "Something gone right :)")
        }
      >
        Green
      </Button>
      <Button
        colorScheme="red"
        onClick={() =>
          showToast("error", "Not good job!", "Something weint wrong :(")
        }
      >
        Red
      </Button>
      <Button
        colorScheme="pink"
        onClick={() =>
          showToast(
            "warning",
            "Not so good not so bad",
            "Something went half right ??"
          )
        }
      >
        Pink
      </Button>
    </VStack>
  );
};

export default Index;
