import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Text,
  SimpleGrid,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  VStack,
} from "@chakra-ui/react";

import UpcomingRegisteredEvents from "../components/volunteerProfile/upcomingRegisteredEvents";
import PastVolunteeredEvents from "../components/volunteerProfile/pastVolunteeredEvents";
import Goals from "../components/volunteerProfile/goals";
import Leaderboard from "../components/volunteerProfile/leaderboard";

const VolunteerProfilePage = () => {
  return (
    <VStack align="flex-start" spacing="0">
      <Heading ml="40" mb="5">
        Welcome Ying Sheng,
      </Heading>
      <Box py="8" px="4" bg="gray.100" w="full">
        <Heading fontSize="2xl" mb="4">
          Profile
        </Heading>

        <HStack justify="space-evenly">
          <Avatar
            size="2xl"
            name="Ying Sheng"
            src="https://avatars.githubusercontent.com/u/70012669?v=4"
          />
          <VStack>
            <Text fontSize="xl">Yeow Ying Sheng</Text>
            <Text fontSize="xl">+65 9311 8988</Text>
            <Text fontSize="xl">Blk 789 Yishun st 89 #18-95 (s)894789</Text>
          </VStack>
          <Button colorScheme="green">Edit profile</Button>
        </HStack>
      </Box>

      <Goals />

      <UpcomingRegisteredEvents />

      <PastVolunteeredEvents />

      <Leaderboard />
    </VStack>
  );
};

export default VolunteerProfilePage;
