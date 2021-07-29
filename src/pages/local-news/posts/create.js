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
  Avatar,
  InputLeftElement,
  useColorModeValue,
  SimpleGrid,
  Button,
  InputGroup,

  Flex,
  useToast,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react"
import { Formik, Form, Field } from "formik";
import { DataStore } from '@aws-amplify/datastore';
import { LocalNews } from '../../../models';
import { Storage } from "aws-amplify";

import { PhoneIcon, ExternalLinkIcon, ChatIcon } from '@chakra-ui/icons'

import { ArrowBackIcon } from "@chakra-ui/icons";
const { useState } = React
import Link from "next/link";


const LocalNewsNew = () => {
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
    let date_posted = values.date_posted;
    // let user_image = values.user_image;
    let content_full = values.content_full;
    let headline = values.headline;
    let image_alt = "";
    let image = values.image;
    let theme = "";

    if (value == "Business"){
      theme = "green"
    }
    else if (value == "Health" ){
      theme = "orange"
    }
    else{
      //LifeStyle
      theme = "blue"
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
      new LocalNews({
      "title": Math.random().toString(),
      "date": date_posted,
      
      "user_name": user_name,
      "content": "",
      "content_full": content_full,
      "topic": value,
      "user_image" : result.key,
        "image" : result2.key,
      "image_alt": image_alt,
      "likes": 0,
      "dislikes": 0,
      "headline": headline,
      "theme": theme,
      "read_more": ""
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

  function validateDate(value) {
    let error;
    if (!value) {
      error = "Date is required";
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
  
  function validateHeadline(value) {
    let error;
    if (!value) {
      error = "Headline is required";
    }
    return error;
  }
  const [value, setValue] = React.useState("Offer")

  return (
    <Box align="center">
      <Flex direction="column" width={["70vw"]} height="full">
        <Formik
          initialValues={{
            title: "",
            date: "",
            user_image: "",
            user_name: "",
            content: "",
            content_full: "",
            topic: "",
            image_alt: "",
            likes: 0,
            dislikes: 0,
            headline: "",
            theme: "",
            image:"",
            read_more: ""
          }}
          onSubmit={(values, { resetForm }) => {
            JSON.stringify(values);
            
            setFormDetails(values);

            resetForm();
          }}
        >
          {(props) => (

            <Box align = "center"> <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={50}> Create New Local News Post</chakra.p>
            <Box  backgroundColor = "pink" rounded={'xl'} width = "640px"  
            padding= '20px' mb = "20px"


            >
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
                        <Radio value="Business">Business</Radio>
                        <Radio value="Health">Health</Radio>
                        <Radio value="LifeStyle">LifeStyle</Radio>
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
              
              <Field name="headline" validate={validateHeadline}>
                {({ field, form }) => (
                  
                  <FormControl
                    isInvalid={form.errors.headline && form.touched.headline}
                  >
                    <FormLabel marginTop="2" htmlFor="headline">
                      Headline
                    </FormLabel>
                    <Input {...field} id="headline" placeholder="headline" />
                    <FormErrorMessage>{form.errors.headline}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              
              <Field name="content_full" validate={validateContent}>
                {({ field, form }) => (
                  <FormControl>
                    <FormLabel marginTop="2" htmlFor="content_full">
                      Content
                    </FormLabel>
                    <Textarea
                      {...field}
                      id="content_full"
                    />
                  </FormControl>
                )}
              </Field>
              <Input mt={3} type="file" onChange={handleSetFile2} />

              {/* <Field name="image" validate={validateImage}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.image && form.touched.image}
                  >
                    <FormLabel marginTop="2" htmlFor="image">
                    Image
                    </FormLabel>
                    <Input {...field} id="image" placeholder="image" />
                    <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                  </FormControl>
                )}
              </Field> */}
              <Field name="date_posted" validate={validateDate}>
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
              </Field>
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
            </Box>
            </Box>
          )}
        </Formik>
      </Flex>
    </Box>
  );
};
export default LocalNewsNew;