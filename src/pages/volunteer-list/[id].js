import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import { DataStore } from "@aws-amplify/datastore";
import { VolunteerProfile } from "../../models";

export default function Profile() {
  const [volunteerProfile, setVolunteerProfile] = useState();
  const router = useRouter();

  useEffect(async () => {
    const { id } = router.query;
    const result = await DataStore.query(VolunteerProfile, id);
    console.log(result);
    setVolunteerProfile(result);
  }, []);

  return volunteerProfile ? (
    <Center py={6}>
      <Box
        //maxW={"270px"}
        boxSize="lg"
        //w={"full"}
        h="auto"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        overflow={"hidden"}
      >
        <Image
          h={"120px"}
          w={"full"}
          src={
            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={volunteerProfile.profileImage}
            alt={"Profile Image"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {volunteerProfile.name}
            </Heading>
            <Text color={"gray.500"}>{volunteerProfile.phoneNumber}</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>Total Events</Text>
              <Text fontSize={"lg"} color={"gray.500"}>
                {volunteerProfile.TotalEvents}
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>Hours</Text>
              <Text fontSize={"lg"} color={"gray.500"}>
                {volunteerProfile.TotalHours}
              </Text>
            </Stack>
          </Stack>

          <Stack spacing={1} align={"center"} mb={5} mt="5">
            <Heading fontSize={"xl"} fontWeight={500} fontFamily={"body"}>
              Language(s)
            </Heading>
            {JSON.parse(volunteerProfile.languages).map((language, i) => {
              return (
                <Text key={i} color={"gray.500"}>
                  {language}
                </Text>
              );
            })}
          </Stack>

          <Stack spacing={1} align={"center"} mb={5}>
            <Heading fontSize={"xl"} fontWeight={500} fontFamily={"body"}>
              Dialect(s)
            </Heading>
            {JSON.parse(volunteerProfile.dialects).map((dialect, i) => {
              return (
                <Text key={i} color={"gray.500"}>
                  {dialect}
                </Text>
              );
            })}
          </Stack>

          <Stack spacing={1} align={"center"} mb={5}>
            <Heading fontSize={"xl"} fontWeight={500} fontFamily={"body"}>
              Badges
            </Heading>
            {JSON.parse(volunteerProfile.badges).map((badge, i) => {
              return (
                <Text key={i} color={"gray.500"}>
                  {badge}
                </Text>
              );
            })}
          </Stack>

          <Stack spacing={1} align={"center"} mb={5}>
            <Heading fontSize={"xl"} fontWeight={500} fontFamily={"body"}>
              Events
            </Heading>
            {JSON.parse(volunteerProfile.events).map((event, i) => {
              return (
                <Text key={i} color={"gray.500"}>
                  {event}
                </Text>
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Center>
  ) : (
    <div></div>
  );
}
