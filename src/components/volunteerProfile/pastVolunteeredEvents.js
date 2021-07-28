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

const eventData = [
  {
    eventName: "Bolly Dancing by PA Trainer Vanita",
    eventDescription:
      "Bolly dancing ncorporates Indian modern dance form with other genres, to make it a creative performance art that can also help to improve physcial fitness and health. Join PA Trainer Vanita now",
    role: "Event Manager",
    feedback: "Did a good job managing the event. Very passionate.",
  },
  {
    eventName: "The Joy Of Freelancing In Your Silver Years",
    eventDescription:
      "Freelancing allows you to earn casual income, and it also helps you stay occupied and fulfils your learning aspirations while helping others. Watch this webinar to learn more and how to get started.",
    role: "Event Manager",
    feedback: "Did a good job managing the event. Very passionate.",
  },
  {
    eventName: "Telecommuting- How Do You Stay Cybersafe",
    eventDescription:
      "Working from Home and Home-based Learning are our new daily norms, which brings us tension and challenges. With increased screen time comes issues such as safety, security and addiction. Learn tips from our speaker on how you could stay cybersafe while telecommuting",
    role: "Event Manager",
    feedback: "Did a good job managing the event. Very passionate.",
  },
];

const EventCard = ({ eventName, eventDescription, role, feedback }) => {
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
        <Box mt="5" w="full" align="end">
          <Text color="gray.500">More Info</Text>
        </Box>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Volunteered for {eventName}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Heading fontSize="2xl" mb="2">
              Role
            </Heading>
            <Text fontSize="lg">{role}</Text>
            <Heading fontSize="2xl" mb="2" mt="5">
              Feedback
            </Heading>
            <Text fontSize="lg">{feedback}</Text>
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

const PastVolunteeredEvents = () => {
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
            role={event.role}
            feedback={event.feedback}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default PastVolunteeredEvents;
