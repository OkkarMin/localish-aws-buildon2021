import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { VStack, HStack, Box, Text, Button, Avatar } from "@chakra-ui/react";

import { DataStore } from "@aws-amplify/datastore";
import { VolunteerForm } from "../../models";
import { Storage } from "aws-amplify";

export default function Form() {
  const [form, setForm] = useState();
  const [avatar, setAvatar] = useState("");
  const router = useRouter();

  useEffect(async () => {
    const { id } = router.query;
    const result = await DataStore.query(VolunteerForm, id);

    const data = await Storage.get(result.avatarKey);
    setAvatar(data);

    setForm(result);
  }, []);

  return form ? (
    <Box align="center">
      <VStack
        width="30vw"
        backgroundColor="gray.100"
        borderRadius="10"
        height="full"
        padding="10"
        shadow="lg"
      >
        <Avatar size="xl" src={avatar} />
        <VStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Name:
            </Text>
            <Text>{form.name}</Text>
          </HStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Contact:
            </Text>
            <Text>{form.phone}</Text>
          </HStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Address:
            </Text>
            <Text>{form.address}</Text>
          </HStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Email:
            </Text>
            <Text>{form.email}</Text>
          </HStack>
          <VStack>
            <Text fontSize="xl" fontWeight="bold">
              Experience:
            </Text>
            <Text>{form.experience}</Text>
          </VStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Common language(s):
            </Text>
            {JSON.parse(form.commonLanguage).map((language, i) => {
              return <Text key={i}>{language}</Text>;
            })}
          </HStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Dialect(s):
            </Text>
            {form.dialects &&
              JSON.parse(form.dialects).map((dialect, i) => {
                return <Text key={i}>{dialect}</Text>;
              })}
          </HStack>
          <HStack spacing="10">
            <Button colorScheme="green">Accept</Button>
            <Button colorScheme="red">Reject</Button>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  ) : (
    <div></div>
  );
}
