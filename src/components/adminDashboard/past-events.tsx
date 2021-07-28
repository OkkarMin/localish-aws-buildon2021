import {
  Box,
  Button,
  Center,
  Text,
  Heading,
  Flex,
  HStack,
  VStack,
  Stack,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Spacer,
} from "@chakra-ui/react";

import PastEventVolunteerList from "./past-events-volunteer-list";

const eventData = [
  {
    eventName: "Bolly Dancing by PA Trainer Vanita",
    eventDescription:
      "Bolly dancing ncorporates Indian modern dance form with other genres, to make it a creative performance art that can also help to improve physcial fitness and health. Join PA Trainer Vanita now",
    volunteersRequired: 4,
    volunteersConfirmed: 3,
  },
  {
    eventName: "The Joy Of Freelancing In Your Silver Years",
    eventDescription:
      "Freelancing allows you to earn casual income, and it also helps you stay occupied and fulfils your learning aspirations while helping others. Watch this webinar to learn more and how to get started.",
    volunteersRequired: 4,
    volunteersConfirmed: 4,
  },
  {
    eventName: "Telecommuting- How Do You Stay Cybersafe",
    eventDescription:
      "Working from Home and Home-based Learning are our new daily norms, which brings us tension and challenges. With increased screen time comes issues such as safety, security and addiction. Learn tips from our speaker on how you could stay cybersafe while telecommuting",
    volunteersRequired: 1,
    volunteersConfirmed: 0,
  },
];

const EventCard = ({
  eventName,
  eventDescription,
  volunteersRequired,
  volunteersConfirmed,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      p="4"
      shadow="md"
      borderRadius="md"
      width="md"
      bg="white"
      onClick={onOpen}
      _hover={{ cursor: "pointer", shadow: "outline" }}
    >
      <VStack align="flex-start" spacing="4">
        <Text fontSize="lg" fontWeight="medium">
          {eventName}
        </Text>
        <Text color="gray.500" noOfLines={2}>
          {eventDescription}
        </Text>
        <Flex mt="5" w="full">
          <Text color="gray.500">volunteers confirmed</Text>
          <Spacer />
          <Heading
            fontSize="lg"
            color={
              volunteersConfirmed >= volunteersRequired
                ? "green"
                : volunteersConfirmed / volunteersRequired > 0.5
                ? "orange"
                : "red"
            }
          >
            {volunteersConfirmed}/{volunteersRequired}
          </Heading>
        </Flex>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Volunteers for {eventName}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <PastEventVolunteerList />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="greenPrimary" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const PastEvents = () => {
  return (
    <Box py="8" px="4" w="full">
      <Heading fontSize="xl" mb="4">
        Past events
      </Heading>

      <HStack justify="space-between">
        {eventData.map((event) => (
          <EventCard
            eventName={event.eventName}
            eventDescription={event.eventDescription}
            volunteersRequired={event.volunteersRequired}
            volunteersConfirmed={event.volunteersConfirmed}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default PastEvents;
