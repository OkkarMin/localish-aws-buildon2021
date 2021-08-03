import { Box, Center, Heading } from "@chakra-ui/react";

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

const data = [
  { event: "Event A", male: 400, female: 2400, others: 1400 },
  { event: "Event B", male: 300, female: 2400, others: 2400 },
  { event: "Event C", male: 500, female: 2400, others: 3400 },
  { event: "Event D", male: 600, female: 2400, others: 4400 },
  { event: "Event E", male: 200, female: 2400, others: 5400 },
];

const OverviewChart = () => {
  return (
    <Box w="full" bg="gray.100" p="4">
      <Heading fontSize="xl" mb="4">
        Overview Chart
      </Heading>
      <Center>
        <ResponsiveContainer width="70%" aspect={4.0 / 2.0}>
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
      </Center>
    </Box>
  );
};

export default OverviewChart;
