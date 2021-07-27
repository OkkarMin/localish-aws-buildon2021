import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import {
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
  Stack,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";

const data = [
  { event: "Event A", male: 400, female: 2400, others: 1400 },
  { event: "Event B", male: 300, female: 2400, others: 2400 },
  { event: "Event C", male: 500, female: 2400, others: 3400 },
  { event: "Event D", male: 600, female: 2400, others: 4400 },
  { event: "Event E", male: 200, female: 2400, others: 5400 },
];

const AdminDashboard = () => {
  return (
    <VStack>
      {/* Stats */}
      <SimpleGrid columns={3} spacing={20}>
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
      {/* Chart */}
      <ResponsiveContainer width="100%" aspect={4.0 / 2.0}>
        <BarChart data={data}>
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis dataKey="event" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="male" fill="#47E6A7" />
          <Bar dataKey="female" fill="#E6477B" />
          <Bar dataKey="others" fill="#0987A0" />
        </BarChart>
      </ResponsiveContainer>
    </VStack>
  );
};

export default AdminDashboard;
