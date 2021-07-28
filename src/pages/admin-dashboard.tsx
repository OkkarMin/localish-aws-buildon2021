import {
  SimpleGrid,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  VStack,
} from "@chakra-ui/react";

import OverviewChart from "../components/adminDashboard/overview-chart";
import FutureEvents from "../components/adminDashboard/upcoming-events";
import PastEvents from "../components/adminDashboard/past-events";

const AdminDashboard = () => {
  return (
    <VStack align="flex-start" spacing="0">
      {/* Stats */}
      <SimpleGrid columns={3} spacing={20} alignSelf="center">
        <Stat>
          <StatLabel fontSize="lg">Total Events for August/2022</StatLabel>
          <StatNumber fontSize="3xl">5</StatNumber>
        </Stat>

        <Stat>
          <StatLabel fontSize="lg">Avereage Volunteer/Event</StatLabel>
          <StatNumber fontSize="3xl">12</StatNumber>
          <StatHelpText fontSize="md">
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel fontSize="lg">New Volunteers for August/2022</StatLabel>
          <StatNumber fontSize="3xl">5</StatNumber>
          <StatHelpText fontSize="md">
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
      </SimpleGrid>

      <FutureEvents />

      <PastEvents />

      <OverviewChart />
    </VStack>
  );
};

export default AdminDashboard;
