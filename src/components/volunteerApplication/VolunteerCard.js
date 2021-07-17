import React, { useState, useEffect } from "react";

import { chakra, Flex, Box, Avatar, Icon, Text } from "@chakra-ui/react";

import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

import { Storage } from "aws-amplify";

// const VolunteerCard = React.forwardRef(funtion VolunteerCard({ name, email, phone, experience, onclick, href }, ref) {
const VolunteerCard = React.forwardRef(function VolunteerCard(
  { name, email, phone, experience, avatarKey, onClick, href },
  ref
) {
  const [avatar, setAvatar] = useState("");

  useEffect(async () => {
    const data = await Storage.get(avatarKey);
    setAvatar(data);
    console.log(data);
  }, []);
  console.log(avatarKey);

  return (
    <span href={href} onClick={onClick} ref={ref}>
      <Flex
        //bg={""}
        p={50}
        //w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="sm"
          mx="auto"
          //bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
        >
          <Box py={4} px={6}>
            <Avatar
              // src={`https://localish1storage144626-dev.s3.ap-southeast-1.amazonaws.com/public/${avatarKey}`}
              src={avatar}
            />
            <chakra.h1
              fontSize="xl"
              fontWeight="bold"
              //color={useColorModeValue("gray.800", "white")}
            >
              {name}
            </chakra.h1>

            <Text
              py={2}
              //color={useColorModeValue("gray.700", "gray.400")}
              noOfLines={3}
            >
              {experience}
            </Text>

            <Flex
              alignItems="center"
              mt={4}
              //color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={PhoneIcon} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                {phone}
              </chakra.h1>
            </Flex>
            <Flex
              alignItems="center"
              mt={4}
              //color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={EmailIcon} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                {email}
              </chakra.h1>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </span>
  );
});

export default VolunteerCard;
