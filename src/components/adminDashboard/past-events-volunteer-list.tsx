import {
  Box,
  Avatar,
  Text,
  Checkbox,
  HStack,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Textarea,
} from "@chakra-ui/react";

const volunteerList = [
  {
    name: "Okkar Min",
    avatarURL: "https://avatars.githubusercontent.com/u/24297303?v=4",
  },
  {
    name: "Yeow Ying Sheng",
    avatarURL: "https://avatars.githubusercontent.com/u/70012669?v=4",
  },
  {
    name: "Surabhi",
    avatarURL: "https://avatars.githubusercontent.com/u/47130821?v=4",
  },
];

const PastEventVolunteerList = () => {
  return (
    <Accordion allowMultiple>
      {volunteerList.map((volunteer, i) => (
        <AccordionItem key={i} bg={i % 2 == 0 ? "" : "gray.100"}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Flex justify="space-between">
                <HStack>
                  <Avatar src={volunteer.avatarURL} />
                  <Text>{volunteer.name}</Text>
                </HStack>
                <Checkbox justifySelf="flex-end" colorScheme="greenPrimary">
                  Mark as attended
                </Checkbox>
              </Flex>
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Text mb="8px">Feedback</Text>
            <Textarea placeholder="write feedback..." />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default PastEventVolunteerList;
