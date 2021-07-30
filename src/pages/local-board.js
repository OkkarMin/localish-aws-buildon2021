import React from "react";
import {
  chakra,
  Box,
  Image,
  HStack,
  useColorModeValue,
  SimpleGrid,
  Button,
  VStack,
  Icon,
  IconButton,
  Spacer,
  Avatar,

  Flex, Heading, Link as ChakraLink
  
} from "@chakra-ui/react";
import { Storage } from "aws-amplify";

import { TriangleUpIcon, TriangleDownIcon, ChatIcon } from '@chakra-ui/icons'

import Link from 'next/link'

import { ArrowBackIcon } from "@chakra-ui/icons";

import localboard from "../data/localboard.json";

import { DataStore } from '@aws-amplify/datastore';
import { LocalBoard } from '../models';

import { useEffect, useState } from "react";

const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
  ];
  
//   interface TestimonialCardProps {
//     name: string;
//     email: string;
//     phone: string;
//     category : string;
//     location : string;
//     time : string;
//     date_posted : string;
//     tip : string;
//     user_name : string;
//     user_image : string;
//     content : string;
//     title: string;
//   }
  
  function TestmonialCard({title, details, image, category, location, time, date_posted, tip, user_name, user_image, content, theme, index}) {
    // const {title, category, location, time, date_posted, tip, user_name, user_image, content, theme} = props;
    const [avatar, setAvatar] = useState("");
    const [avatar2, setAvatar2] = useState("");


  useEffect(async () => {
    const data = await Storage.get(user_image);
    setAvatar(data);

    const data2 = await Storage.get(image);
    setAvatar2(data2);
  }, []);

  
    
    return (
      <Flex
        boxShadow={'lg'}
        direction={{ base: 'column-reverse', md: 'row' }}
        
        rounded={'xl'}
        p={10}
        ml={4}
        justifyContent={'space-between'}
        position={'relative'}
        bg={useColorModeValue('white', 'gray.800')}
        _after={{
          content: '""',
          position: 'absolute',
          height: '21px',
          width: '29px',
          left: '35px',
          top: '-10px',
          backgroundSize: 'cover',
          backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath  fill='%239F7AEA'/%3E%3C/svg%3E")`,
        }}
        _before={{
          content: '""',
          position: 'absolute',
          zIndex: '-1',
          height: 'full',
          maxW: '640px',
          width: 'full',
          filter: 'blur(40px)',
          transform: 'scale(0.98)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          top: 0,
          left: 0,
          //backgroundImage: backgrounds[index % 4]
        }}>
            <VStack align="left">
                <Button mt={1} colorScheme={theme} maxWidth="fit-content">
                    
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
            
        <Flex
          direction={'column'}
          textAlign={'left'}
          justifyContent={'space-between'}>
        <chakra.p
            fontFamily={'Inter'}
            fontWeight={'medium'}
            fontSize={'15px'}
            pb={4}>
            {content}
            </chakra.p>
            {details ? 
                    <chakra.p
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={'15px'}
                    pb={4}>
                    {details}
                    </chakra.p>
                    : <div>
                      </div>}
          <chakra.p fontFamily={'Inter'}
            fontWeight={'small'}
            fontSize={'15px'}
            pb={4}>
                Tip: $ {Number.parseFloat(tip)}
                </chakra.p>

                <chakra.p fontFamily={'Inter'}
            fontWeight={'small'}
            fontSize={'15px'}
            pb={4}>
                Location: {location}
                </chakra.p>

                {image ? <Image
                    w={40}
                    h={40}
                    // fit="cover"
                    // display={{ base: "none", sm: "block" }}
                    src={avatar2}
                    alt="image"
                    />: <div>
                      </div>} 
                
          
          
          
        </Flex>
        
        
        <Avatar
          src={avatar}
          height={'80px'}
          width={'80px'}
          alignSelf={'center'}
          mt="35px"
          //m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
          />
          {/* <Spacer/> */}
          <HStack>
        
        <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
            {user_name}
            {/* <chakra.span
              fontFamily={'Inter'}
              fontWeight={'medium'}
              color={'gray.500'}>
              {' '}
              - {user_name}
            </chakra.span> */}

            <chakra.span
            width="fit-content"
              fontFamily={'Inter'}
              fontWeight={'medium'}
              color={'gray.500'}>
              {' '}
                -  {date_posted}
            </chakra.span>
          </chakra.p>
          <Button
                maxWidth="fit-content"
                maxHeight="fit-content"
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                bg: 'gray.200',
                }}>
                Message
            </Button>
          </HStack>
          
</VStack>

            
         
      </Flex>
    );
  }
  
const categories = [["Offer", "green"], ["Giveaway", "orange"], ["Request", "pink"]];


  export default function GridBlurredBackdrop() {
    const [applications, setapplications] = useState([]);


    useEffect(() => {
        async function fetchApplications() {
            const applicationsData = await DataStore.query(LocalBoard);
            console.log(applicationsData);
          setapplications(applicationsData);
          
        }
    
        
        fetchApplications();
      }, []);
    return (
      <div
        textAlign={'center'}
        pt={10}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}>
            <Box  align="right"> 
            <Button mt={1} colorScheme="teal" align="right" mr="10px" maxWidth="fit-content">
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
        </Box>
        
        {/* <Image src ={'../public/background_localboard.j{pg'} ></Image>  backgroundImage="https://images.unsplash.com/photo-1542888743-a0323a8bd3df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1701&q=80" */}
        <Box 
        > 
<VStack>
        {categories.map((c) => {
              return (
                <div>
                  <Box
                    border="1px"
                    borderColor={c[1]}
                    rounded={"xl"}
                    width ="1200px"
                    // mb="50px"
                    // ml="50px"
                  >
                    <Box ml="10px" mb="1">
                      <chakra.h1
                        fontSize="xl"
                        color={useColorModeValue("gray.700", "white")}
                        fontWeight="700"
                        color = {c[1]}
                      >
                        {c[0]}
                      </chakra.h1>
                    </Box>
        <SimpleGrid
          spacing={'20'}
          columns="3" minChildwidth="1200px"
          mx={'auto'}>
        
          {applications.map((localPost, i)=> {
            if (c[0] == localPost.category) {
            return (
            <TestmonialCard key={i} 
            title = {localPost.title} 
            category={localPost.category}
            location = {localPost.location}
            time = {localPost.time}
            details = {localPost.details}
            date_posted = {new Date(localPost.createdAt).toLocaleDateString()}
            tip = {localPost.tip}
            image = {localPost.image}
            user_image={localPost.user_image}
            user_name = {localPost.user_name}
            content = {localPost.content}
            theme = {localPost.theme}
            index={i}
            />
            )
          }
        })}
        </SimpleGrid>
        </Box>
        </div>
              );
            })}
            </VStack>
        </Box>


      </div>
    );
  }

// const localBoard = () => {
//     const [applications, setapplications] = useState([]);
//     useEffect(() => {
//         async function fetchApplications() {
//             const applicationsData = await DataStore.query(LocalBoard);
//             console.log(applicationsData);
//           setapplications(applicationsData);
//         }
    
//         DataStore.observe(LocalBoard).subscribe(() => {
//           fetchApplications();
//         });
//         fetchApplications();
//       }, []);

//   return (
//     <div>
//         <Button mt={1} colorScheme="teal" align="right" mr="10px">
//             <Link href="/local-board-/create"
//                 px={3}
//                 py={1}
                
//                 fontSize="sm"
//                 fontWeight="700"
//                 rounded="md"
                
//             >
//                 Create New
                
//             </Link>
//         </Button>
//         <SimpleGrid minChildWidth="200px" spacing="2" mt="4" px={["4", "8"]}>
//       {applications.map((localPost, i)=> {
       
//         return (
//         <Card2 key={i} 
//         title = {localPost.title} 
//         category={localPost.category}
//         location = {localPost.location}
//         time = {localPost.time}
//         date_posted = {localPost.date_posted}
//         tip = {localPost.tip}
//         user_image={localPost.user_image}
//         user_name = {localPost.user_name}
//         content = {localPost.content}
//         theme = {localPost.theme}

            
//             />
            
//         )
       
//     }
//     )}
//     </SimpleGrid>
//     </div>
    
//   )
    
    
// };

// export default GridBlurredBackdrop;

  
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