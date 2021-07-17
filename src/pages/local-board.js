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

import localboard from "../data/localboard.json";

import { DataStore } from '@aws-amplify/datastore';
import { LocalBoard } from '../models';

import { useEffect, useState } from "react";

const localBoard = () => {
    const [applications, setapplications] = useState([]);
    useEffect(() => {
        async function fetchApplications() {
            const applicationsData = await DataStore.query(LocalBoard);
            console.log(applicationsData);
          setapplications(applicationsData);
        }
    
        DataStore.observe(LocalBoard).subscribe(() => {
          fetchApplications();
        });
        fetchApplications();
      }, []);

  return (
    <div>
        <Button mt={1} colorScheme="teal" align="right" mr="10px">
                <Link href="/local-board-/create"
                    px={3}
                    py={1}
                    
                    fontSize="sm"
                    fontWeight="700"
                    rounded="md"
                    
                >
                    Create New
                    
                </Link>
                </Button>
        <SimpleGrid minChildWidth="200px" spacing="2" mt="4" px={["4", "8"]}>
      {applications.map((localPost, i)=> {
       
        return (
        <Card2 key={i} 
        title = {localPost.title} 
        category={localPost.category}
        location = {localPost.location}
        time = {localPost.time}
        date_posted = {localPost.date_posted}
        tip = {localPost.tip}
        user_image={localPost.user_image}
        user_name = {localPost.user_name}
        content = {localPost.content}
        theme = {localPost.theme}

            
            />
            
        )
       
    }
    )}
    </SimpleGrid>
    </div>
    
  )
    
    
};

export default localBoard;


const LikeIncrement = ({ increment, likes, likeCounter, likeCount}) => {
    const handleClick = () => {
        likeCounter(increment);
      };

      return <Button colorScheme="green" onClick={handleClick}> {likes + likeCount} <TriangleUpIcon w={6} h={6} /> </Button>
    
  }


  const CommentsButton = ({ comments}) => {
    

    return <Button colorScheme="teal" > {comments} <ChatIcon w={6} h={6} /> </Button>
  }
  
const Card2 = ({ title, category, location, time, date_posted, tip, user_name, user_image, content, theme  }) => {
    const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(0)
   
    const likeCounter = increment => {
        console.log(increment)
        
        if (liked == false){
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
                    Date Posted: {date_posted}
                </chakra.span>
                <Button mt={1} colorScheme={theme}>
                <Link href="/"
                    px={3}
                    py={1}
                    
                    fontSize="sm"
                    fontWeight="700"
                    rounded="md"
                    
                >
                    {category}
                    
                </Link>
                </Button>
                
                </Flex>

                <Box mt={2}>
                {/* <chakra.h2
                fontSize={{ base: "xl", md: "3xl" }}
                color={useColorModeValue("gray.800", "white")}
                fontWeight="bold"
                _hover={{
                    color: useColorModeValue("gray.600", "gray.200"),
                    textDecor: "underline",
                    }}
                > 
                    
                </chakra.h2> */}
                <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
                Content: {content}
                </chakra.p>
                </Box>

                <Box mt={2}>
                <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
                Tip: $ {Number.parseFloat(tip)}
                </chakra.p>
                </Box>

                <Box mt={2}>
                <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
                Location: {location}
                </chakra.p>
                </Box>

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
                    {/* <LikeIncrement increment={1} likes = {likes} likeCounter= {likeCounter} likeCount = {likeCount} />   
                    <DislikeIncrement increment={1} dislikes = {dislikes} dislikeCounter= {dislikeCounter} dislikeCount = {dislikeCount} />
                    
                    <CommentsButton comments = {comments} /> */}
                </Flex>
                
            </Box>
      </HStack>

      
    
    </Flex>
    );
};