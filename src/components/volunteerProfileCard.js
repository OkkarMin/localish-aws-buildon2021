import React from "react";
import { chakra, Box, Avatar, Text, Stack, Heading } from "@chakra-ui/react";

const VolunteerProfileCard = React.forwardRef(function VolunteerCard(
  { name, TotalEvents, TotalHours, profileImage, languages, onClick, href },
  ref
) {
  return (
    <span href={href} onClick={onClick} ref={ref}>
      <Box
        align="center"
        justifyContent="center"
        shadow="lg"
        rounded="lg"
        boxSize="xxs"
        p="5"
      >
        <Avatar size="lg" src={profileImage} />
        <chakra.h1 fontSize="xl" fontWeight="bold">
          {name}
        </chakra.h1>

        <Stack direction={"row"} justify={"center"} spacing={6} mt="5">
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>Total Events</Text>
            <Text fontSize={"lg"} color={"gray.500"}>
              {TotalEvents}
            </Text>
          </Stack>
          <Stack spacing={0} align={"center"}>
            <Text fontWeight={600}>Total Hours</Text>
            <Text fontSize={"lg"} color={"gray.500"}>
              {TotalHours}
            </Text>
          </Stack>
        </Stack>
        <Stack spacing={1} align={"center"} mb={5} mt="5">
          <Heading fontSize={"xl"} fontWeight={500} fontFamily={"body"}>
            Language(s)
          </Heading>
          {JSON.parse(languages).map((language, i) => {
            return <Text key={i}>{language}</Text>;
          })}
        </Stack>
      </Box>
    </span>
  );
});

export default VolunteerProfileCard;
