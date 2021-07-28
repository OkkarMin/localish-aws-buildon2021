import {
  Box,
  Heading,
  HStack,
  Image,
  VStack,
  Text,
  Flex,
  createIcon,
  Circle,
  useColorModeValue,
} from "@chakra-ui/react";

const QuoteIcon = createIcon({
  viewBox: "0 0 50 37",
  d: "M49.6 4.712C47.2853 5.952 45.4253 7.15067 44.02 8.308C42.6973 9.38267 41.664 10.4573 40.92 11.532C40.176 12.524 39.68 13.4747 39.432 14.384C39.2667 15.2933 39.184 16.1613 39.184 16.988C39.184 18.476 39.8453 19.22 41.168 19.22C46.9547 19.22 49.848 21.948 49.848 27.404C49.848 30.4627 48.98 32.8187 47.244 34.472C45.508 36.1253 43.1107 36.952 40.052 36.952C36.332 36.952 33.48 35.8773 31.496 33.728C29.512 31.496 28.52 28.272 28.52 24.056C28.52 18.4347 30.0907 13.764 33.232 10.044C36.3733 6.24134 40.8787 2.89334 46.748 0L49.6 4.712ZM20.956 4.712C18.6413 5.952 16.7813 7.15067 15.376 8.308C14.0533 9.38267 13.02 10.4573 12.276 11.532C11.532 12.524 11.036 13.4747 10.788 14.384C10.6227 15.2933 10.54 16.1613 10.54 16.988C10.54 18.476 11.2013 19.22 12.524 19.22C18.3107 19.22 21.204 21.948 21.204 27.404C21.204 30.4627 20.336 32.8187 18.6 34.472C16.864 36.1253 14.4667 36.952 11.408 36.952C7.688 36.952 4.836 35.8773 2.852 33.728C0.950667 31.496 0 28.272 0 24.056C0 18.4347 1.52933 13.764 4.588 10.044C7.72933 6.24134 12.2347 2.89334 18.104 0L20.956 4.712Z",
});

const Quotee = (props) => {
  const { name, jobTitle, imageSrc, ...boxProps } = props;
  return (
    <Box {...boxProps}>
      <Image
        src={imageSrc}
        mx="auto"
        objectFit="cover"
        w="16"
        h="16"
        rounded="full"
      />
      <Box mt="3">
        <Text as="cite" fontStyle="normal" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {jobTitle}
        </Text>
      </Box>
    </Box>
  );
};

const Feedback = () => {
  return (
    <Box bg="gray.100" py="8" px="4" w="full">
      <Heading fontSize="2xl" mb="4">
        Feedbacks
      </Heading>
      <HStack spacing="20" justify="center">
        <Box as="section" bg={useColorModeValue("gray.50", "gray.800")}>
          <Box boxSize="md" px={{ base: "6", md: "8" }} pt="12" pb="16">
            <Flex direction="column" align="center" textAlign="center">
              <QuoteIcon
                color={useColorModeValue("gray.300", "gray.600")}
                fontSize={{ base: "3xl", md: "6xl" }}
              />
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="medium"
                mt="6"
              >
                &ldquo;He managed a conflict between 2 residents very well. Both
                party made up in the end. Good conflict management.&rdquo;
              </Text>
              <Quotee
                name="Surabi"
                jobTitle="Ang Mo Kio Volunteer Chairman"
                imageSrc="https://avatars.githubusercontent.com/u/47130821?v=4"
              />
            </Flex>
            <HStack
              justify="center"
              spacing="4"
              mt="8"
              color={useColorModeValue("gray.300", "gray.600")}
            ></HStack>
          </Box>
        </Box>

        <Box as="section" bg={useColorModeValue("gray.50", "gray.800")}>
          <Box boxSize="md" px={{ base: "6", md: "8" }} pt="12" pb="16">
            <Flex direction="column" align="center" textAlign="center">
              <QuoteIcon
                color={useColorModeValue("gray.300", "gray.600")}
                fontSize={{ base: "3xl", md: "6xl" }}
              />
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="medium"
                mt="6"
              >
                &ldquo;Very passionated about his work. Love his energy.&rdquo;
              </Text>
              <Quotee
                name="Okkar"
                jobTitle="Event Logistic Head"
                imageSrc="https://avatars.githubusercontent.com/u/24297303?v=4"
                mt="8"
              />
            </Flex>
            <HStack
              justify="center"
              spacing="4"
              mt="8"
              color={useColorModeValue("gray.300", "gray.600")}
            ></HStack>
          </Box>
        </Box>

        <Box as="section" bg={useColorModeValue("gray.50", "gray.800")}>
          <Box
            boxSize="md"
            mx="auto"
            px={{ base: "6", md: "8" }}
            pt="12"
            pb="16"
          >
            <Flex direction="column" align="center" textAlign="center">
              <QuoteIcon
                color={useColorModeValue("gray.300", "gray.600")}
                fontSize={{ base: "3xl", md: "6xl" }}
              />
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="medium"
                mt="6"
              >
                &ldquo;Goes extra mile to help people. Very good.&rdquo;
              </Text>
              <Quotee
                name="Jiayin"
                jobTitle="Event Organiser"
                imageSrc="https://avatars.githubusercontent.com/u/48309567?v=4"
                mt="8"
              />
            </Flex>
            <HStack
              justify="center"
              spacing="4"
              mt="8"
              color={useColorModeValue("gray.300", "gray.600")}
            ></HStack>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default Feedback;
