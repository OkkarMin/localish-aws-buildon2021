import {
  VStack,
  Box,
  HStack,
  Heading,
  Text,
  SimpleGrid,
  StatGroup,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

const Goals = () => {
  return (
    <Box py="8" px="4" w="full">
      <Heading fontSize="2xl" mb="4">
        Goals
      </Heading>
      <VStack>
        <HStack>
          <Heading fontSize="xl">Good job!! You are</Heading>
          <Heading fontSize="xl" color="green">
            50%
          </Heading>
          <Heading fontSize="xl">
            away from reaching your goals!!! All the best!!!!
          </Heading>
        </HStack>

        <SimpleGrid columns={4} spacing={20} alignSelf="center" pt="5">
          <Stat>
            <StatLabel fontSize="lg">Total Participated Events</StatLabel>
            <StatNumber fontSize="3xl" color="orange">
              5
            </StatNumber>
          </Stat>

          <Stat>
            <StatLabel fontSize="lg">Target Event Goal</StatLabel>
            <StatNumber fontSize="3xl">10</StatNumber>
          </Stat>

          <Stat>
            <StatLabel fontSize="lg">Total Volunteer Hours</StatLabel>
            <StatNumber fontSize="3xl" color="orange">
              25
            </StatNumber>
          </Stat>

          <Stat>
            <StatLabel fontSize="lg">Target Volunteer Hours</StatLabel>
            <StatNumber fontSize="3xl">50</StatNumber>
          </Stat>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Goals;
