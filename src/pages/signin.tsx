import { useState } from "react";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";

const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function signIn() {
    try {
      await Auth.signIn(`+65${phoneNumber}`, password);
      router.push("/local-board");
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  return (
    <Flex maxH="100vh" align="center" justify="center">
      <Stack spacing={8} mx={"auto"} py={12} px={6}>
        <Heading fontSize={"4xl"} fontWeight="extrabold">
          Sign in to start{" "}
          <Heading as="span" color="greenPrimary.600" fontWeight="extrabold">
            localish-ing
          </Heading>
        </Heading>

        <Box rounded={"lg"} bg="gray.100" p={8}>
          <Stack spacing={4}>
            <FormControl id="phone">
              <FormLabel>Phone Number</FormLabel>
              <Input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="tel"
                placeholder="81234567"
                bg="gray.300"
                _placeholder={{ color: "gray.500" }}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="******"
                bg="gray.300"
                _placeholder={{ color: "gray.500" }}
              />
            </FormControl>

            <Button colorScheme="greenPrimary" onClick={() => signIn()}>
              Sign in
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignIn;
