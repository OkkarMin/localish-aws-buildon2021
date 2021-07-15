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

  Flex, Heading, Link as ChakraLink
  
} from "@chakra-ui/react";

import { TriangleUpIcon, TriangleDownIcon, ChatIcon } from '@chakra-ui/icons'

import Link from 'next/link'

import { ArrowBackIcon } from "@chakra-ui/icons";

import localnews from "../data/localnews.json";

const { useState } = React

const localNews = () => {
  return (
        <SimpleGrid  spacing="2" mt="4" px={["4", "8"]}>
      {localnews.map((newsArticle)=> {
          {console.log(newsArticle.theme)}
        return (
        <Card key={newsArticle.title} 
            title = {newsArticle.title} 
            date = {newsArticle.date} 
            user_image = {newsArticle.user_image} 
            user_name = {newsArticle.user_name} 
            content = {newsArticle.content} 
            read_more = {newsArticle.read_more}  
            topic = {newsArticle.topic} 
            image = {newsArticle.image}
            image_alt = {newsArticle.image_alt}
            likes = {newsArticle.likes}
            dislikes = {newsArticle.dislikes} 
            headline = {newsArticle.headline} 
            theme = {newsArticle.theme}
            comments = {newsArticle.comments}
            />
            
        )
       
    }
    )}
    </SimpleGrid>
    
  )
    
    
};

export default localNews;

{/* <Flex direction="row">
                    
                    <Box
                    w="xxs"
                    mx="auto"
                    mb="4"
                    p="4"
                    shadow="base"
                    rounded="md"
                    bg="green.400"
                    >
                    
                    </Box>

                    <Box
                    w="xxs"
                    mx="auto"
                    mb="4"
                    p="4"
                    shadow="base"
                    rounded="md"
                    bg="red.400"
                    >
                    
                    </Box>
                
                   
                </Flex> */}
const LikeIncrement = ({ increment, likes, likeCounter, likeCount}) => {
    const handleClick = () => {
        likeCounter(increment);
      };

      return <Button colorScheme="green" onClick={handleClick}> {likes + likeCount} <TriangleUpIcon w={6} h={6} /> </Button>
    
  }

const DislikeIncrement = ({ increment, dislikes, dislikeCounter, dislikeCount}) => {
    const handleClick = () => {
        dislikeCounter(increment);
      };
    return <Button colorScheme="red"  onClick={handleClick}> {dislikes + dislikeCount} <TriangleDownIcon w={6} h={6} /> </Button>
  }

  const CommentsButton = ({ comments}) => {
    

    return <Button colorScheme="teal" > {comments} <ChatIcon w={6} h={6} /> </Button>
  }
  
const Card = ({ title, date, user_name, user_image, content, read_more, topic, image, image_alt, likes, dislikes, headline, theme, comments }) => {
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)

    const [dislikeCount, setDislikeCount] = useState(0)
    const [likeCount, setLikeCount] = useState(0)
   
    const likeCounter = increment => {
        console.log(increment)
        
        if (liked == false && disliked == false){
            setLikeCount(likeCount + increment)
            setLiked(true)
        }
        else{
            if(likeCount - increment > 0){
                setLikeCount(likeCount - increment)
                setLiked(false)
            }
            else{
                setLikeCount(0)
                setLiked(false)
            }   
        } 
    }
    const dislikeCounter = increment => {
        console.log(dislikeCount)
        
        if (liked == false && disliked == false){
            setDislikeCount(dislikeCount + increment)
            setDisliked(true)
        }
        else{
            if(dislikeCount - increment > 0){
                setDislikeCount(dislikeCount - increment)
                setDisliked(false)
            }
            else{
                setDislikeCount(0)
                setDisliked(false)
            }   
        } 
    }
    return (
    <Flex
      p={50}
      alignItems="center"
      justifyContent="center"
    >
        <HStack justify="space-between" >
            <Box
                w="full"
                h="m"
                mx="2"
                mb="2"
                p="4"
                shadow="base"
                rounded="md"
                bg="white"
                _hover={{ shadow: "2xl", textDecoration: "none" }}
            >
                <Flex justifyContent="space-between" alignItems="center">
                <chakra.span
                    fontSize="sm"
                    color={useColorModeValue("gray.600", "gray.400")}
                >
                    {date}
                </chakra.span>
                <Button mt={1} colorScheme={theme}>
                <Link href="/"
                    px={3}
                    py={1}
                    
                    fontSize="sm"
                    fontWeight="700"
                    rounded="md"
                    
                >
                    {topic}
                    
                </Link>
                </Button>
                
                </Flex>

                <Box mt={2}>
                <chakra.h2
                fontSize={{ base: "xl", md: "3xl" }}
                color={useColorModeValue("gray.800", "white")}
                fontWeight="bold"
                _hover={{
                    color: useColorModeValue("gray.600", "gray.200"),
                    textDecor: "underline",
                    }}
                > 
                    <Link href={"/local-news/posts/"+title}
                        fontSize="xl"
                        color={useColorModeValue("gray.700", "white")}
                        fontWeight="700"
                        
                    >
                        {headline}
                        
                    </Link>
                </chakra.h2>
                <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
                {content}
                    
                </chakra.p>
                </Box>

                <Image
                h={48}
                w="full"
                fit="cover"
                mt={2}
                src={image}
                alt={image_alt}
                />

                {/* <Flex justifyContent="space-between" alignItems="center" > */}
                <Flex as="nav" align="center" mt={4}>
                <Box backgroundColor="gray.100"
        w="fit-content"
        h="auto"
        borderRadius="10">
            <HStack direction = "column" mx={4}
                    my={1}>
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
                    <LikeIncrement increment={1} likes = {likes} likeCounter= {likeCounter} likeCount = {likeCount} />   
                    <DislikeIncrement increment={1} dislikes = {dislikes} dislikeCounter= {dislikeCounter} dislikeCount = {dislikeCount} />
                    
                    <CommentsButton comments = {comments} />

                    

                </Flex>
                
            </Box>
      </HStack>

      
    
    </Flex>
    );
};