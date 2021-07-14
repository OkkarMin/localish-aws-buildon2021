import React from "react";
import {
  chakra,
  Box,
  Image,
  HStack,
  Button,
  useColorModeValue,
  SimpleGrid,

  Flex, Heading, Link as ChakraLink
  
} from "@chakra-ui/react";

import Link from 'next/link'

import { ArrowBackIcon } from "@chakra-ui/icons";

import educ from "../data/education.json";

const education = () => {
  return (
      <SimpleGrid minChildWidth="800px"  spacing="2" mt="4" px={["4", "8"]}>
        {educ.map((educationArticle )=> {
          return (
          <Card  
              title = {educationArticle.title} 
              content = {educationArticle.content} 
              image = {educationArticle.image} />
          )
        }
        )}
      </SimpleGrid>
    
  )
    
    
};

export default education;

const Card = ({ title, content,  image }) => {
    return (
        <Flex
        
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bg={useColorModeValue("white", "gray.800")}
          mx={{ lg: 8 }}
          display={{ lg: "flex" }}
          maxW={{ lg: "2xl" }}
          shadow={{ lg: "lg" }}
          rounded={{ lg: "lg" }}
        >
          <Box w={{ lg: "50%" }}>
            <Box
              h={{ base: 32, lg: "full" }}
              rounded={{ lg: "lg" }}
              bgSize="cover"
              style={image}
            ></Box>
          </Box>
  
          <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
            <chakra.h2
              fontSize={{ base: "2xl", md: "3xl" }}
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
            >
              {title}
            </chakra.h2>
            <chakra.p mt={4} color={useColorModeValue("gray.600", "gray.400")}>
              {content}
            </chakra.p>
  
            <Button mt={8}>
              <Link href="/"
                
                bg="gray.900"
                color="gray.100"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="lg"
                _hover={{ bg: "gray.800" }}
              >
                Start Now
              </Link>
            </Button>
          </Box>
        </Box>
      </Flex>
    );
};