import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const Leaderboard = () => {
  return (
    <Box bg="gray.100" mt="4" p="4" width="full">
      <Heading fontSize="2xl" mb="4">
        Leaderboard
      </Heading>
      <Tabs isFitted variant="enclosed-colored" colorScheme="greenPrimary">
        <TabList mb="1em">
          <Tab _selected={{ bg: "greenPrimary.300" }} fontSize="xl">
            Local
          </Tab>
          <Tab _selected={{ bg: "greenPrimary.300" }} fontSize="xl">
            Singapore
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel width="full" align="center">
            {/* Local */}
            <Box bgColor="offWhite" rounded="lg" w="50vw">
              <Heading
                bgColor="pink.100"
                borderRadius="10px 10px 0px 0px"
                p="2"
                w="50vw"
              >
                Local Leaderboard
              </Heading>

              <Table variant="simple">
                <TableCaption>Local Volunteer Leaderboard</TableCaption>
                <Thead>
                  <Tr>
                    <Th isNumeric>Rank</Th>
                    <Th>Name</Th>
                    <Th>Score</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td isNumeric>1</Td>
                    <Td>Surabi</Td>
                    <Td>200</Td>
                  </Tr>
                  <Tr>
                    <Td isNumeric>2</Td>
                    <Td>Okkar</Td>
                    <Td>180</Td>
                  </Tr>
                  <Tr>
                    <Td isNumeric>3</Td>
                    <Td>Jiayin</Td>
                    <Td>170</Td>
                  </Tr>
                  <Tr bgColor="greenPrimary.500">
                    <Td isNumeric>4</Td>
                    <Td>Ying Sheng</Td>
                    <Td>129</Td>
                  </Tr>
                  <Tr>
                    <Td isNumeric>5</Td>
                    <Td>Jia Jun</Td>
                    <Td>100</Td>
                  </Tr>
                  <Tr>
                    <Td isNumeric>6</Td>
                    <Td>Qian yu </Td>
                    <Td>95</Td>
                  </Tr>

                  <Tr>
                    <Td isNumeric>7</Td>
                    <Td>Beng yew</Td>
                    <Td>93</Td>
                  </Tr>
                  <Tr>
                    <Td isNumeric>8</Td>
                    <Td>Terence</Td>
                    <Td>82</Td>
                  </Tr>
                  <Tr>
                    <Td isNumeric>9</Td>
                    <Td>Guang Yuan</Td>
                    <Td>79</Td>
                  </Tr>
                  <Tr>
                    <Td isNumeric>10</Td>
                    <Td>Micheal</Td>
                    <Td>75</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </TabPanel>

          <TabPanel align="center">
            {/* Singapore */}
            <Box bgColor="offWhite" rounded="lg" w="50vw">
              <Heading
                bgColor="pink.100"
                borderRadius="10px 10px 0px 0px"
                p="2"
                w="50vw"
              >
                Singapore Leaderboard
              </Heading>

              <Table variant="simple">
                <TableCaption>Singapore Volunteer Leaderboard</TableCaption>
                <Thead>
                  <Tr>
                    <Th isNumeric>Rank</Th>
                    <Th>Name</Th>
                    <Th>Score</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td isNumeric>125</Td>
                    <Td>Bob</Td>
                    <Td>141</Td>
                  </Tr>
                  <Tr>
                    <Td isNumeric>126</Td>
                    <Td>Kumar</Td>
                    <Td>140</Td>
                  </Tr>
                  <Tr>
                    <Td isNumeric>127</Td>
                    <Td>Lester</Td>
                    <Td>135</Td>
                  </Tr>
                  <Tr>
                    <Td isNumeric>128</Td>
                    <Td>Kline</Td>
                    <Td>133</Td>
                  </Tr>
                  <Tr>
                    <Td isNumeric>129</Td>
                    <Td>Stuart </Td>
                    <Td>130</Td>
                  </Tr>
                  <Tr bgColor="greenPrimary.500">
                    <Td isNumeric>130</Td>
                    <Td>Ying Sheng</Td>
                    <Td>129</Td>
                  </Tr>
                  <Tr>
                    <Td isNumeric>131</Td>
                    <Td>Zubair </Td>
                    <Td>127</Td>
                  </Tr>
                  <Tr>
                    <Td isNumeric>132</Td>
                    <Td>Aaisha </Td>
                    <Td>125</Td>
                  </Tr>
                  <Tr>
                    <Td isNumeric>133</Td>
                    <Td>Ferguson</Td>
                    <Td>119</Td>
                  </Tr>
                  <Tr>
                    <Td isNumeric>134</Td>
                    <Td>Daisy</Td>
                    <Td>117</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Leaderboard;
