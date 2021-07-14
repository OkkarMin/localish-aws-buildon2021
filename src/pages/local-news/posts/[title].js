import localnews from "../../../data/localnews.json";
import React from "react";
import {
  chakra,
  Box,
  Image,
  HStack,
  useColorModeValue,
  SimpleGrid,
  Button,
  Flex,
  Heading,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { ArrowBackIcon } from "@chakra-ui/icons";

import Link from "next/link";

export const getStaticPaths = async () => {
  // const res = await fetch("../../../data/localnews.json")

  const paths = localnews.map((article) => {
    return {
      params: { title: article.title },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const title = context.params.title;
  // const res = await fetch("../../../data/localnews.json")

  let targetArticle = {};
  localnews.map((article) => {
    if (article.title == title) {
      targetArticle = article;
    }
  });
  return {
    props: {
      article: targetArticle,
    },
  };
};

const Details = (article) => {
  return (
    <div>
      {/* {console.log(article.article.title)}
            {article.article.title} */}
      <Link href="/local-news">
        <ChakraLink>
          <ArrowBackIcon w="8" h="8" />
        </ChakraLink>
      </Link>
      <chakra.span
        fontSize="sm"
        color={useColorModeValue("gray.600", "gray.400")}
      >
        {article.article.date}
      </chakra.span>

      <chakra.h2
        fontSize={{ base: "xl", md: "3xl" }}
        color={useColorModeValue("gray.800", "white")}
        fontWeight="bold"
        _hover={{
          color: useColorModeValue("gray.600", "gray.200"),
          textDecor: "underline",
        }}
      >
        {article.article.title}
      </chakra.h2>

      <Flex direction="row">
        <Box w="xxs" mb="4" p="4" shadow="base" rounded="md" bg="green.400">
          {article.article.likes}
        </Box>
        Likes
        <Box w="xxs" mb="4" p="4" shadow="base" rounded="md" bg="red.400">
          {article.article.dislikes}
        </Box>
        Dislikes
      </Flex>
      <Image
        h={90}
        w="full"
        fit="cover"
        mt={2}
        src={article.article.image}
        alt={article.article.image_alt}
      />
      <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
        {article.article.content_full}
      </chakra.p>
    </div>
  );
};

export default Details;
