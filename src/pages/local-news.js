import React from "react";
import {
  chakra,
  Box,
  Image,
  HStack,
  useColorModeValue,
  SimpleGrid,
  Button,

  Flex, Heading, Link as ChakraLink
  
} from "@chakra-ui/react";

import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons'

import Link from 'next/link'

import { ArrowBackIcon } from "@chakra-ui/icons";

import localnews from "../data/localnews.json";

const { useState } = React

const localNews = () => {
  return (
        <SimpleGrid minChildWidth="400px" spacing="2" mt="4" px={["4", "8"]}>
      {localnews.map((newsArticle )=> {
        return (
        <Card  
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
            dislikes = {newsArticle.dislikes} />
        )
       
    }
    )}
    </SimpleGrid>
    
  )
    
    
};

export default localNews;

const LikeIncrement = ({ increment, onClickFunction }) => {
    const handleClick = () => {
      onClickFunction(increment)
    }
    return <button onClick={handleClick}> <TriangleUpIcon w={6} h={6} /> </button>
  }

const DislikeIncrement = ({ increment, onClickFunction }) => {
    const handleClick = () => {
      onClickFunction(increment)
    }
    return <button onClick={handleClick}> <TriangleDownIcon w={6} h={6} /> </button>
  }
  
const Card = ({ title, date, user_name, user_image, content, read_more, topic, image, image_alt, likes, dislikes }) => {
    const [likeCount, setLikeCount] = useState(0)
    const [dislikeCount, setDislikeCount] = useState(0)
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)

    const likeCounter = increment => {
        console.log(likeCount)
        
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
        <HStack justify="space-between">
            <Box
                w="m"
                mx="auto"
                mb="4"
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
                <Button mt={1}>
                <Link href="/"
                    px={3}
                    py={1}
                    bg="gray.600"
                    color="gray.100"
                    fontSize="sm"
                    fontWeight="700"
                    rounded="md"
                    _hover={{ bg: "gray.500" }}
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
                        {title}
                        
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

                <Flex justifyContent="space-between" alignItems="center" mt={4}>
                <Flex alignItems="center">
                    <Image
                    w={10}
                    h={10}
                    mx={4}
                    rounded="full"
                    fit="cover"
                    display={{ base: "none", sm: "block" }}
                    src={user_image}
                    alt="avatar"
                    />
                    <Link href="/"
                    
                    color={useColorModeValue("gray.700", "gray.200")}
                    fontWeight="700"
                    cursor="pointer"
                    >
                    {user_name}
                    </Link>
                </Flex>
                {/* <Link href="/"
                    color={useColorModeValue("brand.600", "brand.400")}
                    _hover={{ textDecor: "underline" }}
                    
                >
                    Read more
                </Link> */}
                <Flex direction="row">
                    
                    <Box
                    w="xxs"
                    mx="auto"
                    mb="4"
                    p="4"
                    shadow="base"
                    rounded="md"
                    bg="green.400"
                    >
                    {likes + likeCount}
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
                    {dislikes + dislikeCount}
                    </Box>
                
                   
                </Flex>
                

                <Flex direction="column">
                <LikeIncrement increment={1} onClickFunction={likeCounter} />   
                <DislikeIncrement increment={1} onClickFunction={dislikeCounter} /> 
                </Flex>
                
                </Flex>
            </Box>
      </HStack>

      
    
    </Flex>
    );
};