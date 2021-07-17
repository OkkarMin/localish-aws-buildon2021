import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Box,
  Checkbox,
  HStack,
  VStack,
  Textarea,
  useToast,
} from "@chakra-ui/react";

import Link from "next/link";
import { useRouter } from "next/router";

import { Formik, Form, Field } from "formik";

import { DataStore } from "@aws-amplify/datastore";
import { FriendsAmongUs } from "../models";

const FriendAmongUsProfile = () => {
  const toast = useToast();
  const router = useRouter();

  const setFormDetails = async (values) => {
    let name = values.name;
    let interests = JSON.stringify(values.interests);
    let others = values.others;

    try {
      await DataStore.save(
        new FriendsAmongUs({
          name: name,
          interests: interests,
          others: others,
        })
      );
    } catch (error) {
      console.log(error);
    }
    toast({
      title: "Profile created",
      description: "Start making new friends!!",
      status: "success",
      duration: 2500,
      isClosable: true,
      position: "top",
    });

    router.replace("/matchFriends");
  };

  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    }
    return error;
  }

  return (
    <Box align="center">
      <Flex
        direction="column"
        width={["50vw"]}
        height="full"
        shadow="lg"
        py={4}
        px={6}
        rounded="lg"
      >
        <Formik
          initialValues={{
            name: "",
            interests: [],
            others: "",
          }}
          onSubmit={(values, { resetForm }) => {
            JSON.stringify(values);

            console.log(values);

            setFormDetails(values);

            resetForm();
          }}
        >
          {(props) => (
            <Form>
              <Field name="name" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel marginTop="2" htmlFor="name">
                      Name
                    </FormLabel>
                    <Input {...field} id="name" placeholder="name" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="interests">
                {({ field, form }) => (
                  <FormControl>
                    <FormLabel marginTop="2" htmlFor="interests">
                      Interests
                    </FormLabel>
                    <VStack justify="space-around" align="left">
                      <Checkbox {...field} value="Football">
                        Football
                      </Checkbox>
                      <Checkbox {...field} value="Basketball">
                        Basketball
                      </Checkbox>
                      <Checkbox {...field} value="Drawing">
                        Drawing
                      </Checkbox>
                      <Checkbox {...field} value="Gardening">
                        Gardening
                      </Checkbox>
                    </VStack>
                  </FormControl>
                )}
              </Field>

              <Field name="others">
                {({ field, form }) => (
                  <FormControl>
                    <FormLabel marginTop="2" htmlFor="others">
                      Others
                    </FormLabel>
                    <Textarea
                      {...field}
                      id="others"
                      placeholder="What other interest do you have?"
                    />
                  </FormControl>
                )}
              </Field>
              {/* <Link href={"/"}> */}
              <HStack justify="space-around" mt={5}>
                <Link href={"/friendAmongUs"}>
                  <Button colorScheme="teal">Back</Button>
                </Link>
                <Button colorScheme="teal" type="submit">
                  Submit
                </Button>
              </HStack>
              {/* </Link> */}
            </Form>
          )}
        </Formik>
      </Flex>
    </Box>
  );
};
export default FriendAmongUsProfile;
