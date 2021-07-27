import { useEffect, useState } from "react";
import { Box, Button, VStack, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";

import { DataStore } from "@aws-amplify/datastore";
import { VolunteerProfile } from "../../models";
import VolunteerProfileCard from "../../components/volunteerProfileCard";

const MotionBox = motion(Box);

const index = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetchApplications() {
      const profilesData = await DataStore.query(VolunteerProfile);

      setProfiles(profilesData);
    }

    fetchApplications();
  }, []);

  return (
    <Flex width="full" flexWrap="wrap" direction="row" m="5">
      {profiles.map((profile, i) => {
        return (
          <MotionBox
            key={i}
            marginBottom="4"
            marginX="4"
            whileHover={{ scale: 1.05 }}
          >
            <Link key={i} href={`/volunteer-list/${profile.id}`} passHref>
              <VolunteerProfileCard
                key={i}
                name={profile.name}
                TotalEvents={profile.TotalEvents}
                TotalHours={profile.TotalHours}
                profileImage={profile.profileImage}
                languages={profile.languages}
              />
            </Link>
          </MotionBox>
        );
      })}
    </Flex>
  );
};

export default index;
