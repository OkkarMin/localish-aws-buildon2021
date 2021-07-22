import Link from "next/link";

import {
  SimpleGrid,
  Text,
  Button,
  Flex,
  Box,
  Heading,
  Image,
  VStack,
  Icon,
} from "@chakra-ui/react";

import { VscMortarBoard } from "react-icons/vsc";
import { GiThreeFriends } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdLocalActivity } from "react-icons/md";

const Index = () => {
  return (
    <VStack>
      {/* CTA */}
      <Flex
        direction={{ base: "column", md: "row" }}
        px={8}
        py={24}
        mx="auto"
        align="center"
      >
        <Box
          w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
          mx="auto"
          pr={{ md: 20 }}
        >
          <Heading
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            mb={6}
          >
            <Text>
              Your neighbours are on{" "}
              <Text as="span" color="greenPrimary.600">
                localish
              </Text>
            </Text>
            <Text>Are you?</Text>
          </Heading>

          <Link href="/signup">
            <Button colorScheme="greenPrimary" w="full">
              Join
            </Button>
          </Link>
        </Box>
        <Box
          w={{ base: "full", md: 10 / 12 }}
          mx="auto"
          mt={{ base: "10", md: 0 }}
        >
          <Image
            w="full"
            h="full"
            rounded="lg"
            src="/main/cta.svg"
            alt="localish racial harmony call to action picture"
          />
        </Box>
      </Flex>
      {/* Features */}
      <VStack px="8">
        <Box textAlign="center">
          <Heading>
            Here are a few things you can do on{" "}
            <Text as="span" color="greenPrimary.600">
              localish
            </Text>
          </Heading>
        </Box>
        <SimpleGrid px="8" py="8" columns={[1, 2]} spacing="10">
          <Box bg="greenPrimary.100" maxW="md" p="8" rounded="md">
            <VStack>
              <Icon as={VscMortarBoard} w="6" h="6" />
              <Heading fontSize="lg">Education</Heading>
              <Text>
                Stay in the loop with latest tech by reading easily
                comprehensible articles from Tech Lingo
              </Text>
            </VStack>
          </Box>

          <Box bg="greenPrimary.100" maxW="md" p="8" rounded="md">
            <VStack>
              <Icon as={GiThreeFriends} w="6" h="6" />
              <Heading fontSize="lg">Friend Among Us</Heading>
              <Text>
                Find another human being who share same interest as you
              </Text>
            </VStack>
          </Box>

          <Box bg="greenPrimary.100" maxW="md" p="8" rounded="md">
            <VStack>
              <Icon as={FaChalkboardTeacher} w="6" h="6" />
              <Heading fontSize="lg">Local board</Heading>
              <Text>
                Never miss a nearby lobang and interesting information nuggets
                again!
              </Text>
            </VStack>
          </Box>

          <Box bg="greenPrimary.100" maxW="md" p="8" rounded="md">
            <VStack>
              <Icon as={MdLocalActivity} w="6" h="6" />
              <Heading fontSize="lg">Neighbourhood Activities</Heading>
              <Text>
                Drop by once in awhile to see what activites there are in your
                neighbourhood
              </Text>
            </VStack>
          </Box>
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};

export default Index;
