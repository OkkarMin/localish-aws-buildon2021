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

  Flex,
  useToast,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Storage } from "aws-amplify";

import { Radio, RadioGroup } from "@chakra-ui/react"
import { Formik, Form, Field } from "formik";
import { DataStore } from '@aws-amplify/datastore';
import { LocalAnnoucement } from '../../../models';

import { PhoneIcon, ExternalLinkIcon, ChatIcon } from '@chakra-ui/icons'

import { ArrowBackIcon } from "@chakra-ui/icons";
const { useState } = React
import Link from "next/link";


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
  const setFormDetails = async (values) => {
    let date_posted = values.date_posted;
    let content_full = values.content_full;
    // let image = values.image;
    let link = values.link;
    let title = values.title;

    const saltedAvatarKey = Math.random() + file.targetFile.name;
    
    try {
      const result = await Storage.put(saltedAvatarKey, file.targetFile, {
        level: "public",
        contentType: file.targetFile.type,
      });
      console.log(result);
    await DataStore.save(
      new LocalAnnoucement({
      "date": date_posted,
      "content_full": content_full,
      "image":result.key,
      "link":link,
      "title":title
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

  function validateTitle(value) {
    let error;
    if (!value) {
      error = "Title is required";
    }
    return error;
  }
  
  function validateLink(value) {
    let error;
    if (!value) {
      error = "Link is required";
    }
    return error;
  }

  return (
    <Box align="center">
      <Flex direction="column" width={["70vw"]} height="full">
        <Formik
          initialValues={{
            link: "",
            date: "",
            content_full: "",
            // image: "",
            title:""
          }}
          onSubmit={(values, { resetForm }) => {
            JSON.stringify(values);
            
            setFormDetails(values);

            resetForm();
          }}
        >
          {(props) => (

            <Box align = "center"> <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={50}> Create New Annoucement Post</chakra.p>
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
              
              
              <Field name="title" validate={validateTitle}>
                {({ field, form }) => (
                  
                  <FormControl
                    isInvalid={form.errors.title && form.touched.title}
                  >
                    <FormLabel marginTop="2" htmlFor="title">
                      Title
                    </FormLabel>
                    <Input {...field} id="title" placeholder="title" />
                    <FormErrorMessage>{form.errors.title}</FormErrorMessage>
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

              <Field name="link" validate={validateLink}>
                {({ field, form }) => (
                  <FormControl>
                    <FormLabel marginTop="2" htmlFor="link">
                      Registration Link
                    </FormLabel>
                    <Input {...field} id="link" placeholder="link" />

                    
                  </FormControl>
                )}
              </Field>
              <Input type="file" onChange={handleSetFile} />

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
                      Event Date
                    </FormLabel>
                    <Input type="date" {...field} id="date_posted" placeholder="date posted" />
                    <FormErrorMessage>{form.errors.date_posted}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
             
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
export default LocalBoardNew;