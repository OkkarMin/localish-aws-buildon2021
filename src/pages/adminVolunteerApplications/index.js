import { useEffect, useState } from "react";
import { Box, Text, VStack, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";

import { DataStore } from "@aws-amplify/datastore";
import { VolunteerForm } from "../../../models";
import VolunteerCard from "../../components/volunteerApplication/VolunteerCard";

const MotionBox = motion(Box);

const index = () => {
  const [applications, setapplications] = useState([]);

  useEffect(() => {
    async function fetchApplications() {
      const applicationsData = await DataStore.query(VolunteerForm);

      setapplications(applicationsData);
    }

    DataStore.observe(VolunteerForm).subscribe(() => {
      fetchApplications();
    });
    fetchApplications();
  }, []);
  console.log(applications);

  return (
    <Flex width="full" flexWrap="wrap" direction="row">
      {applications.map((application, i) => (
        <MotionBox
          key={i}
          marginBottom="4"
          marginX="4"
          whileHover={{ scale: 1.05 }}
        >
          <Link
            key={i}
            href={`/adminVolunteerApplications/${application.id}`}
            passHref
          >
            <VolunteerCard
              key={i}
              name={application.name}
              phone={application.phone}
              email={application.email}
              experience={application.experience}
            />
          </Link>
        </MotionBox>
      ))}
    </Flex>
  );
};

export default index;
