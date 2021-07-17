import React from "react";
import {
  chakra,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Image,
  Stack,
  Input,
  Textarea,
  HStack,
  VStack,
  useColorModeValue,
  SimpleGrid,
  Button,
  Flex,
  useToast,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react"
import { Formik, Form, Field } from "formik";
import { DataStore } from '@aws-amplify/datastore';
import { LocalBoard } from '../../models';

import { TriangleUpIcon, ExternalLinkIcon, ChatIcon } from '@chakra-ui/icons'

import { ArrowBackIcon } from "@chakra-ui/icons";
const { useState } = React
import Link from "next/link";


const LocalBoardNew = () => {
  const toast = useToast();

  const setFormDetails = async (values) => {
    let user_name = values.name;
    let email = values.email;
    let category = values.value;
    let phone = values.phone;
    let location = values.location;
    let time = values.time;
    let date_posted = values.date_posted;
    let tip = values.tip;
    let user_image = values.user_image;
    let content = values.content;
    let theme = "blue"
    if (category == "Offer"){
      theme = "green"
    }
    else if (category == "Giveaway" ){
      theme = "orange"
    }
  //   await DataStore.save(
  //     new LocalBoard({
  //     "category": "Lorem ipsum dolor sit amet",
  //     "location": 1020,
  //     "time": "Lorem ipsum dolor sit amet",
  //     "date_posted": "Lorem ipsum dolor sit amet",
  //     "content": "Lorem ipsum dolor sit amet",
  //     "user_name": "Lorem ipsum dolor sit amet",
  //     "user_image": "Lorem ipsum dolor sit amet",
  //     "tip": 1020,
  //     "email": "Lorem ipsum dolor sit amet",
  //     "phone": "Lorem ipsum dolor sit amet",
  //     "them": "Lorem ipsum dolor sit amet"
  //   })
  // );
    await DataStore.save(
      new LocalBoard({
         "user_name" : user_name,
        "email" : email,
        "category" : value,
        "location" : Number.parseInt(location),
        "time" : time,
        "theme": theme,
        "date_posted" : date_posted,
        "tip" : Number.parseFloat(tip),
        
        "user_image" : user_image,
        "content" : content,
        "phone":phone
          })
        );
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
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            category : "",
            location : "",
            time : "",
            date_posted : "",
            tip : "",
            user_name : "",
            user_image : "",
            content : ""
          }}
          onSubmit={(values, { resetForm }) => {
            JSON.stringify(values);
            
            setFormDetails(values);

            resetForm();
          }}
        >
          {(props) => (
            <Form>
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
                    <Input {...field} id="phone" placeholder="phone" />
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
                      Address
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
                    <Input {...field} id="tip" placeholder="tip" />
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
                      Time
                    </FormLabel>
                    <Input {...field} id="name" placeholder="time" />
                    <FormErrorMessage>{form.errors.time}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="date_posted" validate={validateDate}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.date_posted && form.touched.date_posted}
                  >
                    <FormLabel marginTop="2" htmlFor="date_posted">
                      Date Posted
                    </FormLabel>
                    <Input {...field} id="date_posted" placeholder="date posted" />
                    <FormErrorMessage>{form.errors.date_posted}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="user_image" validate={validateImage}>
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
              </Field>

              <Button
                mt={4}
                colorScheme="teal"
                //isLoading={props.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Flex>
    </Box>
  );
};
export default LocalBoardNew;