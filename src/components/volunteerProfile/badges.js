import { Box, Heading, HStack, Image, VStack, Text } from "@chakra-ui/react";

const Badges = () => {
  return (
    <Box py="8" px="4" w="full">
      <Heading fontSize="2xl" mb="4">
        Badges
      </Heading>
      <HStack spacing="20" justify="center">
        <VStack>
          <Image
            border="1px"
            borderColor="grey.100"
            borderRadius="full"
            boxSize="150px"
            src="./badge/language.svg"
          />
          <Text>Malay 101</Text>
        </VStack>
        <VStack>
          <Image
            border="1px"
            borderColor="grey.100"
            borderRadius="full"
            boxSize="150px"
            src="./badge/plant.svg"
          />
          <Text>Gardening</Text>
        </VStack>
        <VStack>
          <Image
            border="1px"
            borderColor="grey.100"
            borderRadius="full"
            boxSize="150px"
            src="./badge/presentation.svg"
          />
          <Text>Event Management</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Badges;
