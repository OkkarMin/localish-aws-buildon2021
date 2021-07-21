import React, { useEffect, useState } from "react";
import Parser from "rss-parser";

import {
  Box,
  Button,
  chakra,
  Flex,
  Image,
  Link,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

const RSSParser = new Parser();

const Education = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    async function getRSSFeed() {
      const CORS_PROXY = "https://api.allorigins.win/raw?url=";
      const feed = await RSSParser.parseURL(
        CORS_PROXY + "https://techlingo.co/feed"
      );
      setFeed(feed.items);
    }
    getRSSFeed();
    console.log(feed);
  }, []);

  return (
    <SimpleGrid mt="4" p={["4", "8"]} columns={2}>
      {feed.map((item: any, i: number) => {
        return (
          <EducationCard
            key={i}
            title={item.title}
            content={item.contentSnippet}
            link={item.link}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default Education;

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
