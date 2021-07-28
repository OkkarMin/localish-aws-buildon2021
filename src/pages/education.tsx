import React, { useEffect, useState } from "react";
import Parser from "rss-parser";
const RSSParser = new Parser();

import {
  Box,
  Button,
  chakra,
  Checkbox,
  Link,
  SimpleGrid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

const EducationCard = ({ title, content, link }) => {
  return (
    <Box mx={{ lg: 8 }} shadow={{ lg: "lg" }} rounded={{ lg: "lg" }}>
      <Box p={6} maxW={{ base: "xl", lg: "5xl" }}>
        <chakra.h2 fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
          {title}
        </chakra.h2>

        <chakra.p mt={4}>{content}</chakra.p>

        <Link isExternal href={link} _hover={{ textDecoration: "none" }}>
          <Button mt={8} colorScheme="greenPrimary">
            Read more
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

const Education = () => {
  const [feed, setFeed] = useState([]);
  const [categories, setCategories] = useState(new Set());
  const [checkedCategories, setCheckedCategories] = useState([]);

  useEffect(() => {
    async function getRSSFeed() {
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
      const feed = await RSSParser.parseURL(
        CORS_PROXY + "https://techlingo.co/feed"
      );
      setFeed(feed.items);
    }
    getRSSFeed();
    console.log(feed);
  }, []);

  return (
    <Box mt="4" p="4">
      <Tabs isFitted variant="enclosed-colored" colorScheme="greenPrimary">
        <TabList mb="1em">
          <Tab fontSize="xl">Tech News</Tab>
          <Tab fontSize="xl">Cultural</Tab>
        </TabList>

        <TabPanels>
          {/* Tech News panel */}
          <TabPanel>
            {/* List of checkboxes */}
            <SimpleGrid minChildWidth="180px">
              <Checkbox
                size="lg"
                colorScheme="greenPrimary"
                isChecked={checkedCategories.length == 0}
                onChange={() => setCheckedCategories([])}
              >
                Show All
              </Checkbox>

              {Array.from(categories)
                .splice(30, categories.size)
                .map((category, i) => (
                  <Checkbox
                    key={i}
                    size="lg"
                    colorScheme="greenPrimary"
                    isChecked={checkedCategories.includes(category)}
                    onChange={(e) => {
                      // checked, add it to checkedCategories
                      if (e.target.checked)
                        setCheckedCategories([...checkedCategories, category]);

                      // uncheck, remove it from checkedCategories
                      if (!e.target.checked)
                        setCheckedCategories([
                          ...checkedCategories.filter((c) => c != category),
                        ]);
                    }}
                  >
                    {category}
                  </Checkbox>
                ))}
            </SimpleGrid>

            {/* List of Education cards */}
            <SimpleGrid mt="4" columns={2}>
              {feed.map((item: any, i: number) => {
                // make a set out of all possible categories
                for (const category of item.categories) {
                  if (categories.has(category)) {
                    continue;
                  }
                  setCategories(categories.add(category));
                }

                // render only if relevant categories are checked
                if (checkedCategories.length == 0) {
                  return (
                    <EducationCard
                      key={i}
                      title={item.title}
                      content={item.contentSnippet}
                      link={item.link}
                    />
                  );
                }

                return checkedCategories.some((c) =>
                  item.categories.includes(c)
                ) ? (
                  <EducationCard
                    key={i}
                    title={item.title}
                    content={item.contentSnippet}
                    link={item.link}
                  />
                ) : (
                  <div></div>
                );
              })}
            </SimpleGrid>
          </TabPanel>

          {/* Cultural panel */}
          <TabPanel>
            <SimpleGrid mt="4" columns={2}>
              <EducationCard
                title="Indian Culture"
                content="Uncover how the modern and traditional merge in Littlie India, with our guide to the district’s essential experiences"
                link="https://www.visitsingapore.com/walking-tour/culture/in-the-neighbourhood-little-india/#culture-heritage"
              />

              <EducationCard
                title="Malay Culture"
                content="The Malay Heritage Centre is a must-visit if you’re keen on learning about the rich heritage and culture of Singapore’s Malay community"
                link="https://www.visitsingapore.com/see-do-singapore/culture-heritage/heritage-discovery/malay-heritage-centre/#culture-heritage"
              />

              <EducationCard
                title="Chinese Culture"
                content="Experience the pulse of Singapore’s history with interactive exhibits and immersive experiences at the Chinatown Heritage Centre"
                link="https://www.visitsingapore.com/see-do-singapore/culture-heritage/heritage-discovery/chinatown-heritage-centre/"
              />

              <EducationCard
                title="Eurasian Culture"
                content="This engaging heritage attraction takes you through the history and culture of the Eurasian community in Singapore"
                link="https://www.visitsingapore.com/see-do-singapore/culture-heritage/heritage-discovery/eurasian-heritage-centre/#culture-heritage"
              />
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Education;
