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
  Spacer,
  IconButton,
  Heading,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { TriangleUpIcon, ExternalLinkIcon, ChatIcon } from '@chakra-ui/icons'

import { ArrowBackIcon } from "@chakra-ui/icons";
const { useState } = React
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

const LikeIncrement = ({ increment, likes, likeCounter, likeCount}) => {
    const handleClick = () => {
        likeCounter(increment);
      };

      return <Button w="full" onClick={handleClick}> <TriangleUpIcon w={6} h={6} /> Like       {likes + likeCount}  </Button>
    
  }

const CommentIncrement = ({ comments}) => {
    
    return <Button w="full" > <ChatIcon w={6} h={6} /> Comment {comments}  </Button>
  }

const ShareIncrement = () => {

return <Button w="full" > <ExternalLinkIcon  w={6} h={6} /> Shares </Button>
}



const CommentCard = ({date, content, user_image, user_name}) => {
    return(
        
        <Flex
      p={50}
      alignItems="center"
      justifyContent="center"
    >
        
        <HStack justify="space-between" >
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
                <Flex as="nav" align="center" mt={4}>
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
                    <Spacer />

                </Flex>
                <Spacer/>
                

                <Box mt={2}>
                
                <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
                {content}
                    
                </chakra.p>
                </Box>
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
                
            </Box>
      </HStack>

      
    
    </Flex>
    )
}
const Details = (article) => {
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
        {article.article.headline}
      </chakra.h2>

      {/* <Flex direction="row">
        <Box w="xxs" mb="1" p="1" shadow="base" rounded="md" bg="green.400">
          {article.article.likes}
        </Box>
        Likes
        <Box w="xxs" mb="1" p="1" shadow="base" rounded="md" bg="red.400">
          {article.article.dislikes}
        </Box>
        Dislikes
      </Flex> */}
      <Flex
      alignItems="center"
      justifyContent="center"
    >
      <Image
        h={400}
        
        fit="cover"
        mt={2}
        src={article.article.image}
        alt={article.article.image_alt}
      />
      </Flex>
      <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
        {article.article.content_full}
      </chakra.p>

      <Flex as="nav" align="center" mt={4}>
            
            <LikeIncrement increment={1} likes = {article.article.likes} likeCounter= {likeCounter} likeCount = {likeCount} /> 
            <Spacer /> 
            <CommentIncrement increment={1} comments = {article.article.comments} /> 
            <Spacer />
            <ShareIncrement  /> 

        </Flex>

       <SimpleGrid minChildWidth="500px"  spacing="2" mt="4" px={["4", "8"]}>
        

            {
                article.article.comments_list.map((comment, i) => {
                    return(
                        <CommentCard key = {i}
                            w ="full"
                                date = {comment.date} 
                                user_image = {comment.user_image} 
                                user_name = {comment.user_name} 
                                content = {comment.content} 
                                />
                    )
                })
            }
      </SimpleGrid>
    </div>
  );
};

export default Details;
