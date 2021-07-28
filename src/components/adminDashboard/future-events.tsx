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
    eventName: "National Steps Challenge",
    eventDescription:
      "Jio your kakis to join National Steps Challenge™️ Season 5: Bonus Round! Earn up to $20 worth of eVouchers simply by clocking steps and Moderate to Vigorous Physical Activity (MVPA) minutes",
    volunteersRequired: 5,
    volunteersConfirmed: 5,
  },
  {
    eventName: "Ondeh Ondeh by PA Trainer Hajjah Roziah  ",
    eventDescription:
      "Sometimes, all you want to do is bite into a sweet and chewy Ondeh Ondeh. But did you know you can make this traditional sweet at home? PA Trainer Hajjah Raziah can show you how!",
    volunteersRequired: 10,
    volunteersConfirmed: 8,
  },
  {
    eventName: "Digital Transformation in the Retail Industry",
    eventDescription:
      '"The retail industry is embarking on a new journey with digital transformation. Hear insights from our expert speaker on how the future of retail looks like, and the kind of job skills required to engage the new normal of "contactless" seamless customer experience.',
    volunteersRequired: 2,
    volunteersConfirmed: 0,
  },
];

const EventCard = ({
  eventName,
  eventDescription,
  volunteersRequired,
  volunteersConfirmed,
}) => {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      p="4"
      shadow="md"
      borderRadius="md"
      width="md"
      bg="white"
      //   onClick={onOpen}
      _hover={{ cursor: "pointer", shadow: "outline" }}
    >
      <VStack align="flex-start" spacing="4">
        <Heading fontSize="lg">{eventName}</Heading>
        <Text color="gray.500" noOfLines={2}>
          {eventDescription}
        </Text>
        <Flex mt="5" w="full">
          <Text> volunteers confirmed</Text>
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

      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </Box>
  );
};

const FutureEvents = () => {
  return (
    <Box p="4" bg="gray.100" w="full">
      <Center>
        <Heading fontSize="xl" mb="4">
          Upcoming events
        </Heading>
      </Center>

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

export default FutureEvents;
