import {
  Box,
  Button,
  Text,
  Heading,
  Flex,
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
  Spacer,
} from "@chakra-ui/react";
import UpcomingEventsVolunteerList from "./upcoming-events-volunteer-list";

const eventData = [
  {
    eventName: "National Steps Challenge",
    eventDescription:
      "Jio your kakis to join National Steps Challenge™️ Season 5: Bonus Round! Earn up to $20 worth of eVouchers simply by clocking steps and Moderate to Vigorous Physical Activity (MVPA) minutes",
    volunteersRequired: 3,
    volunteersConfirmed: 3,
    publicParticipants: 10,
    MaxPublicParticipants: 20,
  },
  {
    eventName: "Ondeh Ondeh by PA Trainer Hajjah Roziah  ",
    eventDescription:
      "Sometimes, all you want to do is bite into a sweet and chewy Ondeh Ondeh. But did you know you can make this traditional sweet at home? PA Trainer Hajjah Raziah can show you how!",
    volunteersRequired: 10,
    volunteersConfirmed: 8,
    publicParticipants: 20,
    MaxPublicParticipants: 50,
  },
  {
    eventName: "Digital Transformation in the Retail Industry",
    eventDescription:
      '"The retail industry is embarking on a new journey with digital transformation. Hear insights from our expert speaker on how the future of retail looks like, and the kind of job skills required to engage the new normal of "contactless" seamless customer experience.',
    volunteersRequired: 2,
    volunteersConfirmed: 0,
    publicParticipants: 2,
    MaxPublicParticipants: 10,
  },
];

const EventCard = ({
  eventName,
  eventDescription,
  volunteersRequired,
  volunteersConfirmed,
  publicParticipants,
  MaxPublicParticipants,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(publicParticipants);
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
        <Flex mt="5" w="full">
          <Text color="gray.500">public participants</Text>
          <Spacer />
          <Heading
            fontSize="lg"
            color={
              publicParticipants >= MaxPublicParticipants
                ? "green"
                : publicParticipants / MaxPublicParticipants > 0.5
                ? "orange"
                : "red"
            }
          >
            {publicParticipants}/{MaxPublicParticipants}
          </Heading>
        </Flex>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Volunteers for {eventName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UpcomingEventsVolunteerList
              volunteersRequired={volunteersRequired}
              volunteersConfirmed={volunteersConfirmed}
            />
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

const FutureEvents = () => {
  return (
    <Box py="8" px="4" bg="gray.100" w="full">
      <Heading fontSize="xl" mb="4">
        Upcoming events
      </Heading>

      <HStack justify="space-between">
        {eventData.map((event, i) => (
          <EventCard
            key={i}
            eventName={event.eventName}
            eventDescription={event.eventDescription}
            volunteersRequired={event.volunteersRequired}
            volunteersConfirmed={event.volunteersConfirmed}
            publicParticipants={event.publicParticipants}
            MaxPublicParticipants={event.MaxPublicParticipants}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default FutureEvents;
