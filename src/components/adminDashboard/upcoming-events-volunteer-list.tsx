import { useEffect, useState } from "react";

import { Box, Avatar, Text, Heading, HStack, VStack } from "@chakra-ui/react";

const UpcomingEventsVolunteerList = ({
  volunteersRequired,
  volunteersConfirmed,
}) => {
  const [fakeVolunteer, setFakeVolunteer] = useState([]);

  useEffect(() => {
    volunteersConfirmed != 0 &&
      fetch(`https://randomuser.me/api/?results=${volunteersConfirmed}`)
        .then((response) => response.json())
        .then((fakeData) => {
          setFakeVolunteer(fakeData.results);
        });
  }, []);

  return (
    <VStack align="flex-start">
      <HStack>
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
        <Text fontSize="md">Volunteers confirmed</Text>
      </HStack>

      {fakeVolunteer.map((volunteer, i) => {
        return (
          <Box flex="1" textAlign="left">
            <HStack>
              <Text fontSize="lg">{i + 1}.</Text>
              <Avatar src={volunteer.picture.thumbnail} />
              <Text>{`${volunteer.name.first} ${volunteer.name.last}`}</Text>
            </HStack>
          </Box>
        );
      })}
    </VStack>
  );
};

export default UpcomingEventsVolunteerList;
