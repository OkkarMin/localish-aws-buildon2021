import React from "react";
import {
  chakra,
  Box,
  Spacer,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Image,
  Stack,
  Input,
  Textarea,
  HStack,
  VStack,
  InputLeftElement,
  useColorModeValue,
  SimpleGrid,
  Button,
  InputGroup,
  Avatar,
Icon,
  Flex,
  useToast,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react"
import { Formik, Form, Field } from "formik";
import { DataStore } from '@aws-amplify/datastore';
import { LocalBoard } from '../../models';
import { Storage } from "aws-amplify";
import { PhoneIcon, ExternalLinkIcon, ChatIcon } from '@chakra-ui/icons'

import { ArrowBackIcon } from "@chakra-ui/icons";
const { useState } = React
import Link from "next/link";

import { AiFillAudio } from "react-icons/ai";

const LocalBoardNew = () => {
  const toast = useToast();
  const [file, setFile] = useState({
    fileUrl: "",
    targetFile: {},
  });

  const handleSetFile = (e) => {
    const targetFile = e.target.files[0];
    const fileUrl = URL.createObjectURL(targetFile);
    // console.log(targetFile);
    setFile({
      fileUrl,
      targetFile,
    });
  };

  const [file2, setFile2] = useState({
    fileUrl2: "",
    targetFile2: {},
  });

  const handleSetFile2= (e) => {
    const targetFile2 = e.target.files[0];
    const fileUrl2 = URL.createObjectURL(targetFile2);
    // console.log(targetFile);
    setFile2({
      fileUrl2,
      targetFile2,
    });
  };
  const setFormDetails = async (values) => {
    let user_name = values.name;
    let email = values.email;
    let category = values.value;
    let phone = values.phone;
    let location = values.location;
    let time = values.time;
    // let date_posted = values.date_posted;
    let tip = values.tip;
   
    let content = values.content;
    let details = values.details;
    let theme = "";

    
    if (value == "Offer"){
      theme = "green"
    }
    else if (value == "Giveaway" ){
      theme = "orange"
    }
    else{
      theme = "pink"
    }
    {console.log(value)}
    const saltedAvatarKey = Math.random() + file.targetFile.name;

    const saltedAvatarKey2 = Math.random() + file2.targetFile2.name;


    try {
      const result = await Storage.put(saltedAvatarKey, file.targetFile, {
        level: "public",
        contentType: file.targetFile.type,
      });
      console.log(result);

      const result2 = await Storage.put(saltedAvatarKey2, file2.targetFile2, {
        level: "public",
        contentType: file2.targetFile2.type,
      });

    await DataStore.save(
      
      new LocalBoard({
         "user_name" : user_name,
        "email" : email,
        "category" : value,
        "location" : Number.parseInt(location),
        "time" : time,
        "theme": theme,
        "tip" : Number.parseFloat(tip),
        "details": details,
        "user_image" : result.key,
        "image" : result2.key,

        "content" : content,
        "phone":phone
          })
        );

        console.log(result);
      } catch (error) {
        console.log(error);
      }
    toast({
      title: "Form submitted",
      description:
        "Form successfully submitted. ",
      status: "success",
      duration: 2500,
      isClosable: true,
      position: "top",
    });
  };

  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    }
    return error;
  }

  function validateImage(value) {
    let error;
    if (!value) {
      error = "Image is required";
    }
    return error;
  }

  function validateTime(value) {
    let error;
    if (!value) {
      error = "Time is required";
    }
    return error;
  }

  function validateDate(value) {
    let error;
    if (!value) {
      error = "Date is required";
    }
    return error;
  }
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Email is required";
    }
    return error;
  }

  function validateContent(value) {
    let error;
    if (!value) {
      error = "Content is required";
    }
    return error;
  }

  function validatePhone(value) {
    const validPhoneNumber = /[8|9][0-9]{7}$/;
    let error;
    if (!value) {
      error = "Phone number is required";
    } else if (!value.match(validPhoneNumber)) {
      error = "Phone number must start with 9 or 8 and have 8 digits";
    }
    return error;
  }

  function validateAddress(value) {
    let error;
    const validAddress = /[0-9]/;
    if (!value) {
      error = "Address is required";
    } else if (!value.match(validAddress)) {
      error = "Address must be integer. Only add your postal code!";
    }
    return error;
  }
  function validateTip(value) {
    let error;
    const validTip = /[0-9]*.[0-9][0-9]/;
    if (!value) {
      error = "Tip is required";
    } else if (!value.match(validTip)) {
      error = "Please keep the value to this format $0.00";
    }
    return error;
  }

  const [value, setValue] = React.useState("Offer")

  return (
    <Box align="center">
      <Flex direction="column" width={["70vw"]} height="full">
        <Box align = "center"> <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={50}> Create New Local Board Post</chakra.p>
        <Box  backgroundColor = "pink" rounded={'xl'} width = "640px"  
              padding= '20px' mb = "20px" >
                <Box width = "600px"   bg={useColorModeValue('white', 'gray.800')}
            rounded={'xl'}
            //mt={'100px'}
            
            padding= '20px'
            
            >
               {/* <Button > Hello</Button> */}
               <HStack align="center"> 
               <Button
              mt={1}
              colorScheme="pink"
              align="center"
              as={AiFillAudio}
              mr="10px"
              maxWidth="fit-content"
            >
              <Link href="/">
              </Link>
            </Button>
            <chakra.p color={"pink.500"} fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={30}> Send a voice note</chakra.p>
            </HStack>
            </Box>
                </Box>
            <chakra.p mb = "20px"  fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={30}> Or </chakra.p>

              <Box  backgroundColor = "pink" rounded={'xl'} width = "640px"  
              padding= '20px' mb = "20px">

        
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            category : "",
            location : "",
            time : "",
            // date_posted : "",
            tip : "",
            user_name : "",
            user_image : "",
            content : "",
            details : ""
          }}
          onSubmit={(values, { resetForm }) => {
            JSON.stringify(values);
            
            setFormDetails(values);

            resetForm();
          }}
        >
          {(props) => (

            
            <Box width = "600px" align="left"  bg={useColorModeValue('white', 'gray.800')}
            rounded={'xl'}
            //mt={'100px'}
            
            padding= '20px'
            
            >
            <Form mx={4}
                    my={1}>
              <Field name="category" >
                {({ field, form }) => (
                  <FormControl
                  isInvalid={form.errors.value && form.touched.value}
                    
                  >
                    <FormLabel marginTop="2" htmlFor="category">
                    Category
                    </FormLabel>
                    <HStack justify="space-around">
                    <RadioGroup onChange={setValue} value={value}>
                      <Stack direction="row">
                        <Radio value="Offer">Offer</Radio>
                        <Radio value="Request">Request</Radio>
                        <Radio value="Giveaway">Giveaway</Radio>
                      </Stack>
                    </RadioGroup>
                      </HStack>
                    <FormErrorMessage>{value}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              
              <Field name="name" validate={validateName}>
                {({ field, form }) => (
                  
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel marginTop="2" htmlFor="name">
                      Name
                    </FormLabel>
                    <Input {...field} id="name" placeholder="name" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <HStack mt={3}>
                {file.fileUrl ? (
                  <Avatar size="xl" src={file.fileUrl} />
                ) : (
                  <Avatar size="xl" />
                )}
                <Input type="file" onChange={handleSetFile} />
              </HStack>
              <Field name="email" validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel marginTop="2" htmlFor="email">
                      Email
                    </FormLabel>
                    <Input {...field} id="email" placeholder="email" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="phone" validate={validatePhone}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.phone && form.touched.phone}
                  >
                    <FormLabel marginTop="2" htmlFor="phone">
                      Phone number
                    </FormLabel>
                    <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<PhoneIcon color="gray.300" />}
                    />
                    <Input {...field} id="phone" placeholder="phone" />
                    </InputGroup>
                    <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="location" validate={validateAddress}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.location && form.touched.location}
                  >
                    <FormLabel marginTop="2" htmlFor="location">
                      Postal Code
                    </FormLabel>
                    <Input {...field} id="location" placeholder="postal code" />
                    <FormErrorMessage>{form.errors.location}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="content" validate={validateContent}>
                {({ field, form }) => (
                  <FormControl>
                    <FormLabel marginTop="2" htmlFor="content">
                      Content
                    </FormLabel>
                    <Textarea
                      {...field}
                      id="content"
                      placeholder="What do you need help with / are offering?"
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="tip" validate={validateTip}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.tip && form.touched.tip}
                  >
                    <FormLabel marginTop="2" htmlFor="tip">
                      Tip: $
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        fontSize="1.2em"
                        children="$"
                      />
                    <Input {...field} id="tip" placeholder="tip" />
                    </InputGroup>
                    <FormErrorMessage>{form.errors.tip}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="time" validate={validateTime}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.time && form.touched.time}
                  >
                    <FormLabel marginTop="2" htmlFor="time">
                      Availability of Dates:
                    </FormLabel>
                    <Input type="date" {...field} id="time" placeholder="time" />
                    <FormErrorMessage>{form.errors.time}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="details" >
                {({ field, form }) => (
                  <FormControl>
                    <FormLabel marginTop="2" htmlFor="details">
                      Any additional details?
                    </FormLabel>
                    <Textarea
                      {...field}
                      id="details"
                      placeholder="Details"
                    />
                  </FormControl>
                )}
              </Field>
              <Input mt={3} type="file" onChange={handleSetFile2} />
              {/* <Field name="date_posted" validate={validateDate}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.date_posted && form.touched.date_posted}
                  >
                    <FormLabel marginTop="2" htmlFor="date_posted">
                      Date Posted
                    </FormLabel>
                    <Input type="date" {...field} id="date_posted" placeholder="date posted" />
                    <FormErrorMessage>{form.errors.date_posted}</FormErrorMessage>
                  </FormControl>
                )}
              </Field> */}
              {/* <Field name="user_image" validate={validateImage}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.user_image && form.touched.user_image}
                  >
                    <FormLabel marginTop="2" htmlFor="user_image">
                      User Image
                    </FormLabel>
                    <Input {...field} id="user_image" placeholder="user image" />
                    <FormErrorMessage>{form.errors.user_image}</FormErrorMessage>
                  </FormControl>
                )}
              </Field> */}
              <Box align = "right"> 
              <Button
                mt={4}
                colorScheme="pink"
                //isLoading={props.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
              </Box>
              
            </Form>
            </Box>
            
          )}
        </Formik>
        </Box>
            </Box>
      </Flex>
    </Box>
  );
};
export default LocalBoardNew;