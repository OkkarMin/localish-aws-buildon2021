import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const SignIn = () => {
  return (
    <Flex maxH="100vh" align="center" justify="center">
      <Stack spacing={8} mx={"auto"} py={12} px={6}>
        <Heading fontSize={"4xl"}>
          Sign in to start{" "}
          <Heading as="span" color="greenPrimary.600">
            localish-ing
          </Heading>
        </Heading>

        <Box rounded={"lg"} bg="gray.100" p={8}>
          <Stack spacing={4}>
            <FormControl id="phone">
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                placeholder="81234567"
                bg="gray.300"
                _placeholder={{ color: "gray.500" }}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="******"
                bg="gray.300"
                _placeholder={{ color: "gray.500" }}
              />
            </FormControl>

            <Button colorScheme="greenPrimary">Sign in</Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignIn;
