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
      <Box
        alignItems="center"
        justifyContent="center"
        shadow="lg"
        rounded="lg"
        w="md"
        h="275"
        p="5"
      >
        <Avatar size="lg" src={avatar} />
        <chakra.h1 fontSize="xl" fontWeight="bold">
          {name}
        </chakra.h1>

        <Text py={2} noOfLines={2}>
          {experience}
        </Text>

        <Flex alignItems="center" mt={4}>
          <Icon as={PhoneIcon} h={6} w={6} mr={2} />

          <chakra.h1 px={2} fontSize="sm">
            {phone}
          </chakra.h1>
        </Flex>
        <Flex alignItems="center" mt={4}>
          <Icon as={EmailIcon} h={6} w={6} mr={2} />

          <chakra.h1 px={2} fontSize="sm">
            {email}
          </chakra.h1>
        </Flex>
      </Box>
    </span>
  );
});

export default VolunteerCard;
