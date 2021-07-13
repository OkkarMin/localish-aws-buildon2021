import { withSSRContext } from "aws-amplify";
import { VolunteerForm } from "../../../models";
import { useRouter } from "next/dist/client/router";
import { VStack, HStack, Box, Text, Heading } from "@chakra-ui/react";

export default function from({ form }) {
  console.log(form);

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
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
          {/* {languages.flatmap((language) => {
            <Text>{language}</Text>;
          })} */}
          <Text>{form.commonLanguage}</Text>
          {/* for(i=0, i<form.commonLanguage.length, i++){
                <Text>{form.commonLanguage[i]}</Text>
              }
           */}
        </HStack>
        <HStack>
          <Text fontSize="xl" fontWeight="bold">
            Dialect(s):
          </Text>

          <Text>{form.dialects}</Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export const getStaticPaths = async (req) => {
  const { DataStore } = withSSRContext(req);
  const volunteerForms = await DataStore.query(VolunteerForm);

  const paths = volunteerForms.map((form) => {
    return {
      params: { id: form.id },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (req) => {
  const { DataStore } = withSSRContext(req);
  const { params } = req;
  const { id } = params;
  const form = await DataStore.query(VolunteerForm, id);

  return {
    props: {
      form: JSON.parse(JSON.stringify(form)),
    },
    revalidate: 100,
  };
};
