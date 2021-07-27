import { useEffect, useState } from "react";
import { Box, Button, VStack, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";

import { DataStore } from "@aws-amplify/datastore";
import { VolunteerForm2 } from "../../models";
import VolunteerCard from "../../components/volunteerApplication/VolunteerCard";

const MotionBox = motion(Box);

const index = () => {
  const [applications, setapplications] = useState([]);

  useEffect(() => {
    async function fetchApplications() {
      const applicationsData = await DataStore.query(VolunteerForm2);
      console.log(applicationsData);
      setapplications(applicationsData);
    }

    fetchApplications();
  }, []);

  return (
    <Flex direction="column">
      <Flex direction={["column", "row"]} justify="space-around">
        <Flex
          direction={["column", "row"]}
          justify="space-around"
          width={["100vw", "50vw"]}
        >
          <VStack>
            <Text fontWeight="bold" fontSize="xl">
              Current volunteers
            </Text>
            <Text fontWeight="bold" fontSize="xl">
              15
            </Text>
          </VStack>
          <VStack>
            <Text color="greenPrimary.700" fontWeight="bold" fontSize="xl">
              Accepted
            </Text>
            <Text fontWeight="bold" fontSize="xl">
              3
            </Text>
          </VStack>
          <VStack>
            <Text color="red" fontWeight="bold" fontSize="xl">
              Rejected
            </Text>
            <Text fontWeight="bold" fontSize="xl">
              5
            </Text>
          </VStack>
        </Flex>

        <Button colorScheme="green">Transcribe form</Button>
      </Flex>
      <Flex width="full" flexWrap="wrap" direction="row">
        {applications.map((application, i) => {
          return (
            <MotionBox
              key={i}
              marginBottom="4"
              marginX="4"
              whileHover={{ scale: 1.05 }}
            >
              <Link
                key={i}
                href={`/admin-volunteer-applications/${application.id}`}
                passHref
              >
                <VolunteerCard
                  key={i}
                  name={application.name}
                  phone={application.phone}
                  email={application.email}
                  experience={application.experience}
                  avatarKey={application.avatarKey}
                />
              </Link>
            </MotionBox>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default index;
