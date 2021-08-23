import {
  Box,
  Button,
  Text,
  Heading,
  HStack,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const eventData = [
  {
    eventName: "National Steps Challenge",
    eventDescription:
      "Jio your kakis to join National Steps Challenge™️ Season 5: Bonus Round! Earn up to $20 worth of eVouchers simply by clocking steps and Moderate to Vigorous Physical Activity (MVPA) minutes",
    role: "Event Manager",
    timing: "9am - 6pm",
  },
  {
    eventName: "Ondeh Ondeh by PA Trainer Hajjah Roziah  ",
    eventDescription:
      "Sometimes, all you want to do is bite into a sweet and chewy Ondeh Ondeh. But did you know you can make this traditional sweet at home? PA Trainer Hajjah Raziah can show you how!",
    role: "Event Manager",
    timing: "9am - 6pm",
  },
  {
    eventName: "Digital Transformation in the Retail Industry",
    eventDescription:
      '"The retail industry is embarking on a new journey with digital transformation. Hear insights from our expert speaker on how the future of retail looks like, and the kind of job skills required to engage the new normal of "contactless" seamless customer experience.',
    role: "Event Manager",
    timing: "9am - 6pm",
  },
];

const EventCard = ({ eventName, eventDescription, role, timing }) => {
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
          <ModalHeader>Details for {eventName}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Heading fontSize="2xl" mb="2">
              Role
            </Heading>
            <Text fontSize="lg">{role}</Text>
            <Heading fontSize="2xl" mb="2" mt="5">
              Timing
            </Heading>
            <Text fontSize="lg">{timing}</Text>
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

const UpcomingRegisteredEvents = () => {
  return (
    <Box py="8" px="4" bg="gray.100" w="full">
      <Heading fontSize="xl" mb="4">
        Upcoming events
      </Heading>

      <HStack justify="space-between">
        {eventData.map((event) => (
          <EventCard
            eventName={event.eventName}
            eventDescription={event.eventDescription}
            role={event.role}
            timing={event.timing}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default UpcomingRegisteredEvents;
