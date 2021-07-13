import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
} from "@chakra-ui/react";

const avatars = [
  {
    name: "Okkar Min",
    url: "https://avatars.githubusercontent.com/u/24297303?v=4",
  },
  {
    name: "Yeow Ying Sheng",
    url: "https://avatars.githubusercontent.com/u/70012669?v=4",
  },
  {
    name: "Surabhi",
    url: "https://avatars.githubusercontent.com/u/47130821?v=4",
  },
  {
    name: "Jiayin",
    url: "https://avatars.githubusercontent.com/u/48309567?v=4",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

const SignUp = () => {
  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="extrabold"
          >
            Your neighbours are on localish 🤝
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={useBreakpointValue({ base: "md", md: "lg" })}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgColor: "greenPrimary.100",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              width={useBreakpointValue({ base: "44px", md: "60px" })}
              height={useBreakpointValue({ base: "44px", md: "60px" })}
              position={"relative"}
              _before={{
                content: '""',
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgColor: "greenSecondary.400",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              You
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg="gray.100"
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              fontWeight="extrabold"
            >
              Join localish
              <Text as={"span"} color="greenPrimary.600">
                !
              </Text>
            </Heading>
          </Stack>

          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <Input
                type="text"
                placeholder="Full name"
                bg="gray.300"
                _placeholder={{ color: "gray.500" }}
              />
              <Input
                type="tel"
                placeholder="81234567"
                bg="gray.300"
                _placeholder={{ color: "gray.500" }}
              />
              <Input
                type="password"
                placeholder="******"
                bg="gray.300"
                _placeholder={{ color: "gray.500" }}
              />
            </Stack>
            <Button mt={8} w={"full"} colorScheme="greenPrimary">
              Join
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default SignUp;
