import React from "react";
import {
  chakra,
  Box,
  Image,
  HStack,
  useColorModeValue,
  SimpleGrid,
  Button,
  IconButton,
  Spacer,
  VStack,
  Wrap,
  WrapItem,
  Text,
  Tag,
  Flex,
  Heading,
  Link as ChakraLink,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { TriangleUpIcon, TriangleDownIcon, ChatIcon } from "@chakra-ui/icons";

import Link from "next/link";

import { ArrowBackIcon } from "@chakra-ui/icons";

import localnews from "../data/localnews.json";
import { DataStore } from "@aws-amplify/datastore";
import { LocalAnnoucement, LocalNews } from "../models";
import { useEffect, useState } from "react";
const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};
const categories = ["Business", "LifeStyle", "Health"];
const localNews = () => {
  const [applications, setapplications] = useState([]);
  const [annoucements, setannoucements] = useState([]);

  useEffect(() => {
    async function fetchApplications() {
      const applicationsData = await DataStore.query(LocalNews);
      console.log(applicationsData);
      setapplications(applicationsData);
      const annoucementsData = await DataStore.query(LocalAnnoucement);
      console.log(annoucementsData);
      setannoucements(annoucementsData);
    }

    DataStore.observe(LocalNews).subscribe(() => {
      fetchApplications();
    });
    DataStore.observe(LocalAnnoucement).subscribe(() => {
        fetchApplications();
      });
    fetchApplications();
  }, []);

  return (
    // <HStack>
    <div>
      <Box align="right">
        <Button
          mt={1}
          colorScheme="teal"
          align="right"
          mr="10px"
          maxWidth="fit-content"
        >
          <Link
            href="/local-news/posts/add"
            px={3}
            py={1}
            fontSize="sm"
            fontWeight="700"
            rounded="md"
          >
            Create New Neighbourhood Annoucement
          </Link>
        </Button>
        <Button
          mt={1}
          colorScheme="teal"
          align="right"
          mr="10px"
          maxWidth="fit-content"
        >
          <Link
            href="/local-news/posts/create"
            px={3}
            py={1}
            fontSize="sm"
            fontWeight="700"
            rounded="md"
          >
            Create New Local News
          </Link>
        </Button>
      </Box>
      <SimpleGrid columns="2" minChildwidth="1200px">
        <Box ml="50px">
          <SimpleGrid minChildWidth="250px" spacing="5">
            {/* <PublicBoardPost/>
                            <PublicBoardPost/>
                            <PublicBoardPost/> */}
            {annoucements.map((newsArticle, i) => {
              console.log(newsArticle);
              return (
                <PublicBoardPost
                  key={i}
                  title={newsArticle.title}
                  date={new Date(newsArticle.date).toLocaleDateString()}
                  content_full={newsArticle.content_full}
                  image={newsArticle.image}
                  link={newsArticle.link}
                />
              );
            })}
          </SimpleGrid>
        </Box>

        <Box>
          <VStack>
            {categories.map((c) => {
              return (
                <div>
                  <Box
                    border="1px"
                    borderColor="gray.200"
                    rounded={"xl"}
                    width="500px"
                    mb="20px"
                    ml="50px"
                  >
                    <Box ml="10px" mb="1">
                      <chakra.h1
                        fontSize="xl"
                        color={useColorModeValue("gray.700", "white")}
                        fontWeight="700"
                      >
                        {c}
                      </chakra.h1>
                    </Box>
                    <SimpleGrid>
                      {applications.map((newsArticle, i) => {
                        if (c == newsArticle.topic) {
                          return (
                            <Card
                              key={i}
                              id = {newsArticle.id}
                              title={newsArticle.title}
                              date={new Date(
                                newsArticle.date
                              ).toLocaleDateString()}
                              user_image={newsArticle.user_image}
                              user_name={newsArticle.user_name}
                              content={newsArticle.content}
                              content_full={newsArticle.content_full}
                              read_more={newsArticle.read_more}
                              topic={newsArticle.topic}
                              image={newsArticle.image}
                              image_alt={newsArticle.image_alt}
                              likes={newsArticle.likes}
                              dislikes={newsArticle.dislikes}
                              headline={newsArticle.headline}
                              theme={newsArticle.theme}
                              comments={newsArticle.comments}
                            />
                          );
                        }
                      })}
                    </SimpleGrid>
                  </Box>
                </div>
              );
            })}
          </VStack>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default localNews;

const PublicBoardPost = ({ title, link, content_full, image, date }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  console.log(image);
  return (
    <Box>
      <Box borderRadius="lg" overflow="hidden">
        <Box mt={3} ref={btnRef} onClick={onOpen}>
          <Image
            // transform="scale(1.0)"
            src={image}
            alt="some text"
            width="100%"
            objectFit="contain"
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          />
        </Box>
      </Box>
      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack>
              <Image
                // transform="scale(1.0)"
                src={image}
                alt="some text"
                width="50%"
                objectFit="contain"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
              <Text as="p" fontSize="md" marginTop="2">
                {content_full}
              </Text>
            </HStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue">Register</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
    // <Box >
    //     <Box borderRadius="lg" overflow="hidden">
    //         <Box mt={3} ref={btnRef} onClick={onOpen}>
    //             <Image
    //                 // transform="scale(1.0)"
    //                 src="https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/212339907_361385365355288_3715464866889335730_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=2ND1ZlndrVgAX-L7XwU&_nc_ht=scontent.fsin10-1.fna&oh=380f7bbcb689d56bff0cbf8665c61352&oe=61208904"
    //                 alt="some text"
    //                 width="100%"
    //                 objectFit="contain"
    //                 transition="0.3s ease-in-out"
    //                 _hover={{
    //                     transform: 'scale(1.05)',
    //                 }}
    //                 />
    //         </Box>
    //     </Box>
    //     <Modal
    //         onClose={onClose}
    //         finalFocusRef={btnRef}
    //         isOpen={isOpen}
    //         scrollBehavior={scrollBehavior}
    //     >
    //         <ModalOverlay />
    //         <ModalContent>
    //         <ModalHeader>Modal Title</ModalHeader>
    //         <ModalCloseButton />
    //         <ModalBody>
    //             <HStack>

    //             <Image
    //             // transform="scale(1.0)"
    //             src="https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/212339907_361385365355288_3715464866889335730_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=2ND1ZlndrVgAX-L7XwU&_nc_ht=scontent.fsin10-1.fna&oh=380f7bbcb689d56bff0cbf8665c61352&oe=61208904"
    //             alt="some text"
    //             width="50%"
    //             objectFit="contain"
    //             transition="0.3s ease-in-out"
    //             _hover={{
    //                 transform: 'scale(1.05)',
    //             }}
    //             />
    //             <Text as="p" fontSize="md" marginTop="2">
    //             Lorem Ipsum is simply dummy text of the printing and typesetting
    //             industry. Lorem Ipsum has been the industry's standard dummy text
    //             ever since the 1500s, when an unknown printer took a galley of
    //             type and scrambled it to make a type specimen book.
    //             </Text>
    //             </HStack>

    //         </ModalBody>
    //         <ModalFooter>
    //             <Button colorScheme="blue">Register</Button>
    //         </ModalFooter>
    //         </ModalContent>
    //     </Modal>
    // </Box>
  );
};

const Card = ({
  title,
  id,
  date,
  user_name,
  user_image,
  content,
  content_full,
  read_more,
  topic,
  image,
  image_alt,
  likes,
  dislikes,
  headline,
  theme,
  comments,
}) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const [dislikeCount, setDislikeCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  const likeCounter = (increment) => {
    console.log(increment);

    if (liked == false && disliked == false) {
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
  const dislikeCounter = (increment) => {
    console.log(dislikeCount);

    if (liked == false && disliked == false) {
      setDislikeCount(dislikeCount + increment);
      setDisliked(true);
    } else {
      if (dislikeCount - increment > 0) {
        setDislikeCount(dislikeCount - increment);
        setDisliked(false);
      } else {
        setDislikeCount(0);
        setDisliked(false);
      }
    }
  };
  return (
    <Flex alignItems="center" justifyContent="center">
      <HStack justify="space-between">
        <Box
          w="inherit"
          h="m"
          mx="2"
          mb="2"
          p="2"
          shadow="base"
          rounded="md"
          bg="white"
          _hover={{ shadow: "2xl", textDecoration: "none" }}
        >
          <Flex justifyContent="space-between" alignItems="center">
            {/* <Button mt={1} colorScheme={theme}>
                <Link href="/"
                    px={3}
                    py={1}
                    
                    fontSize="xs"
                    fontWeight="10"
                    rounded="md"
                    
                >
                    {topic}
                    
                </Link>
                </Button> */}
          </Flex>
          <HStack mt={3}>
            <Box>
              <chakra.span
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                {date}
              </chakra.span>
              <chakra.h5
                fontSize={{ base: "md", md: "lg" }}
                color={useColorModeValue("gray.800", "white")}
                fontWeight="bold"
                _hover={{
                  color: useColorModeValue("gray.600", "gray.200"),
                  textDecor: "underline",
                }}
              >
                <Link
                  href={{
                    pathname: "/local-news/posts/" + id,
                    query: {
                      id: id,
                    },
                  }}
                  fontSize="xl"
                  color={useColorModeValue("gray.700", "white")}
                  fontWeight="700"
                >
                  {headline}
                </Link>
              </chakra.h5>
              <Box
                // backgroundColor="gray.100"
                w="fit-content"
                h="auto"
                borderRadius="10"
              >
                <HStack direction="column" mx={4} my={1}>
                  <Image
                    w={7}
                    h={7}
                    rounded="full"
                    fit="cover"
                    display={{ base: "none", sm: "block" }}
                    src={user_image}
                    alt="avatar"
                  />
                  <chakra.p
                    fontSize="sm"
                    color={useColorModeValue("gray.700", "gray.200")}
                    fontWeight="700"
                  >
                    {user_name}
                  </chakra.p>
                </HStack>
              </Box>

              {/* <chakra.p fontSize="small" mt={2} color={useColorModeValue("gray.600", "gray.300")}>
                {content}
                    
                </chakra.p> */}
            </Box>

            <Image h="full" w={40} fit="cover" src={image} alt={image_alt} />
          </HStack>

          {/* <Flex justifyContent="space-between" alignItems="center" > */}
          <Flex as="nav" align="center" mt={4}>
            <Spacer />
            {/* <LikeIncrement increment={1} likes = {likes} likeCounter= {likeCounter} likeCount = {likeCount} />   
                    <DislikeIncrement increment={1} dislikes = {dislikes} dislikeCounter= {dislikeCounter} dislikeCount = {dislikeCount} />
                    
                    <CommentsButton comments = {comments} /> */}
          </Flex>
        </Box>
      </HStack>
    </Flex>
  );
};
