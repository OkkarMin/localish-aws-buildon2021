import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { VStack, HStack, Box, Text, Button, Avatar } from "@chakra-ui/react";

import { DataStore } from "@aws-amplify/datastore";
import { VolunteerForm2 } from "../../models";
import { Storage } from "aws-amplify";

export default function Form() {
  const [form, setForm] = useState();
  const [avatar, setAvatar] = useState("");
  const router = useRouter();

  useEffect(async () => {
    const { id } = router.query;
    const result = await DataStore.query(VolunteerForm2, id);

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
              NRIC:
            </Text>
            <Text>{form.nric}</Text>
          </HStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Date of Birth:
            </Text>
            <Text>{form.dateOfBirth}</Text>
          </HStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Gender:
            </Text>
            <Text>{form.gender}</Text>
          </HStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Race:
            </Text>
            <Text>{form.race}</Text>
          </HStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Marital status:
            </Text>
            <Text>{form.maritalStatus}</Text>
          </HStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Nationality:
            </Text>
            <Text>{form.nationality}</Text>
          </HStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Country of Birth:
            </Text>
            <Text>{form.countryOfBirth}</Text>
          </HStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Religion:
            </Text>
            <Text>{form.religion}</Text>
          </HStack>
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
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Highest Education:
            </Text>
            <Text>{form.highestEducation}</Text>
          </HStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Address:
            </Text>
            <Text>{form.address}</Text>
          </HStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Postal Code:
            </Text>
            <Text>{form.postalCode}</Text>
          </HStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Contact:
            </Text>
            <Text>{form.phone}</Text>
          </HStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Email:
            </Text>
            <Text>{form.email}</Text>
          </HStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Type of Dwelling:
            </Text>
            <Text>{form.typeOfDwelling}</Text>
          </HStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Occupation:
            </Text>
            <Text>{form.occupation}</Text>
          </HStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Employer/Company Name:
            </Text>
            <Text>{form.employerNameail}</Text>
          </HStack>
          <VStack>
            <Text fontSize="xl" fontWeight="bold">
              Experience:
            </Text>
            <Text>{form.experience}</Text>
          </VStack>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              Day(s) free:
            </Text>
            {form.daysFree &&
              JSON.parse(form.daysFree).map((dayFree, i) => {
                return <Text key={i}>{dayFree}</Text>;
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
