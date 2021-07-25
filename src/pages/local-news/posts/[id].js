import React from "react";
import {
  chakra,
  Box,
  Image,
  HStack,
  VStack,
  useColorModeValue,
  SimpleGrid,
  Button,
  Flex,
  Spacer,
  IconButton,
  Heading,
  Link as ChakraLink,
  AlertTitle,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { TriangleUpIcon, ExternalLinkIcon, ChatIcon } from "@chakra-ui/icons";

import { ArrowBackIcon } from "@chakra-ui/icons";
import { DataStore } from "@aws-amplify/datastore";
import { LocalNews, LocalNewsComment } from "../../../models";
import { useEffect, useState } from "react";
import Link from "next/link";

// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const { Auth, DataStore } = withSSRContext({ req })

//   const applicationsData = await DataStore.query(LocalNews);
//   console.log(applicationsData);
//   setapplications(applicationsData);

import localnews from "../../../data/localnews.json";
// }
// export const getStaticPaths = async () => {
//   // const res = await fetch("../../../data/localnews.json")

//   const paths = {}
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const title = context.query.title

//   console.log(title)
//   return {
//     props: {
//       article: title,
//     },
//   };
// };

const LikeIncrement = ({ increment, likes, likeCounter, likeCount }) => {
  const handleClick = () => {
    likeCounter(increment);
  };

  return (
    <Button w="full" onClick={handleClick}>
      {" "}
      <TriangleUpIcon w={6} h={6} /> Like {likes + likeCount}{" "}
    </Button>
  );
};

const CommentIncrement = ({ comments }) => {
  return (
    <Button w="full">
      {" "}
      <ChatIcon w={6} h={6} /> Comment {comments}{" "}
    </Button>
  );
};

const ShareIncrement = () => {
  return (
    <Button w="full">
      {" "}
      <ExternalLinkIcon w={6} h={6} /> Shares{" "}
    </Button>
  );
};

const CommentCard = ({ date, content, user_image, user_name }) => {
  return (
    <Flex p={2} alignItems="center" justifyContent="center">
      <Box
        w="full"
        mx="2"
        mb="2"
        p="4"
        shadow="base"
        rounded="md"
        bg="white"
        _hover={{ shadow: "2xl", textDecoration: "none" }}
      >
        <Box mt={2}>
          <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
            {content}
          </chakra.p>
        </Box>

        <HStack direction="column">
          <Box
            backgroundColor="teal.100"
            w="fit-content"
            h="auto"
            borderRadius="10"
          >
            <HStack direction="column" mx={4} my={1}>
              <Image
                w={10}
                h={10}
                rounded="full"
                fit="cover"
                display={{ base: "none", sm: "block" }}
                src={user_image}
                alt="avatar"
              />
              <chakra.p
                color={useColorModeValue("gray.700", "gray.200")}
                fontWeight="700"
              >
                {user_name}
              </chakra.p>
            </HStack>
          </Box>
          <Spacer />

          <Spacer />
          <Flex justifyContent="space-between" alignItems="center">
            <chakra.span
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {date}
            </chakra.span>
          </Flex>

          {/* <Flex justifyContent="space-between" alignItems="center" > */}
        </HStack>
      </Box>
    </Flex>
  );
};
const Details = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const likeCounter = (increment) => {
    console.log(increment);

    if (liked == false) {
      setLikeCount(likeCount + increment);
      setLiked(true);
    } else {
      if (likeCount - increment > 0) {
        setLikeCount(likeCount - increment);
        setLiked(false);
      } else {
        setLikeCount(0);
        setLiked(false);
      }
    }
  };
  const [applications, setapplications] = useState([]);
  const [comments, setcomments] = useState([]);
  const router = useRouter();
  useEffect(async () => {
    async function fetchApplications() {
      const { id } = router.query;
      // console.log(title);
      const applicationsData = await DataStore.query(LocalNews, (c) =>
        c.id("eq", id)
      );
      console.log(applicationsData[0]);
      setapplications(applicationsData[0]);
      console.log(applicationsData[0].id);
      const commentsData = (await DataStore.query(LocalNewsComment)).filter(
        (c) => c.LocalNews.id === applicationsData[0].id
      );
      setcomments(commentsData);
    }

    DataStore.observe(LocalNews).subscribe(() => {
      fetchApplications();
    });
    fetchApplications();
  }, []);

  // return(
  //   <div></div>
  // )

  return applications ? (
    <div>
      <Link href="/local-news">
        <ChakraLink>
          <ArrowBackIcon w="8" h="8" />
        </ChakraLink>
      </Link>
      <Box align="center">
        <Box width="1000px" align="left" height="full">
          <VStack
            // width="70vw"
            // backgroundColor="gray.100"
            borderRadius="10"
            align="left"
            height="full"
            padding="10"
          >
            {/* {console.log(article.article.title)}
            {article.article.title} */}

            <chakra.span
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {applications.date}
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
              {applications.headline}
            </chakra.h2>

            <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
              {applications.content}
            </chakra.p>

            <Box
              backgroundColor="gray.100"
              w="fit-content"
              h="auto"
              borderRadius="10"
            >
              <HStack direction="column" mx={4} my={1}>
                <Image
                  w={10}
                  h={10}
                  rounded="full"
                  fit="cover"
                  display={{ base: "none", sm: "block" }}
                  src={applications.user_image}
                  alt="avatar"
                />
                <chakra.p
                  color={useColorModeValue("gray.700", "gray.200")}
                  fontWeight="700"
                >
                  {applications.user_name}
                </chakra.p>
              </HStack>
            </Box>

            <Flex alignItems="center" justifyContent="center">
              <Image
                // h={400}
                w="fit-content"
                fit="cover"
                mt={2}
                src={applications.image}
                alt={applications.image_alt}
              />
            </Flex>
            <chakra.p
              align="center"
              color={useColorModeValue("gray.700", "gray.200")}
              fontWeight="2000"
              fontSize="10px"
              fontStyle="italic"
            >
              Image credits: unsplash.com
            </chakra.p>
            <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
              {applications.content_full}
            </chakra.p>

            <Flex as="nav" align="center" mt={4}>
              <LikeIncrement
                increment={1}
                likes={applications.likes}
                likeCounter={likeCounter}
                likeCount={likeCount}
              />
              <Spacer />
              <CommentIncrement increment={1} comments={comments.length} />
              <Spacer />
              <ShareIncrement />
            </Flex>

            <SimpleGrid mt="2">
              {
                // console.log((comments))
                comments.map((comment, i) => {
                  return (
                    <CommentCard
                      key={i}
                      w="full"
                      date={new Date(comment.date).toLocaleDateString()}
                      user_image={comment.user_image}
                      user_name={comment.user_name}
                      content={comment.content}
                    />
                  );
                })
              }
            </SimpleGrid>
          </VStack>
        </Box>
      </Box>
    </div>
  ) : (
    <div></div>
  );
};

export default Details;
