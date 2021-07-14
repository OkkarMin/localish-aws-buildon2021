import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { VStack, HStack, Box, Text } from "@chakra-ui/react";

import { DataStore } from "@aws-amplify/datastore";
import { VolunteerForm } from "../../../models";

export default function Form() {
  const [form, setForm] = useState();
  const router = useRouter();

  useEffect(async () => {
    const { id } = router.query;
    const result = await DataStore.query(VolunteerForm, id);

    setForm(result);
  }, []);

  return form ? (
    <Box align="center">
      <VStack
        width="70vw"
        backgroundColor="gray.100"
        borderRadius="10"
        align="left"
        height="full"
        padding="10"
      >
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
          {JSON.parse(form.commonLanguage).map((language) => {
            return <Text>{language}</Text>;
          })}
        </HStack>
        <HStack>
          <Text fontSize="xl" fontWeight="bold">
            Dialect(s):
          </Text>
          {form.dialects &&
            JSON.parse(form.dialects).map((dialect) => {
              return <Text>{dialect}</Text>;
            })}
        </HStack>
      </VStack>
    </Box>
  ) : (
    <div></div>
  );
}
