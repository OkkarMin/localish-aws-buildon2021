import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Box,
  CheckboxGroup,
  Checkbox,
  HStack,
  VStack,
  Textarea,
  useToast,
} from "@chakra-ui/react";

import { Formik, Form, Field } from "formik";

import { DataStore } from "@aws-amplify/datastore";
import { VolunteerForm } from "../models";

const VolunteerSignup = () => {
  const toast = useToast();

  const setFormDetails = async (values) => {
    let name = values.name;
    let email = values.email;
    let address = values.address;
    let phone = values.phone;
    let daysFree = JSON.stringify(values.daysFree);
    let commonLanguage = JSON.stringify(values.commonLanguage);
    let dialects = JSON.stringify(values.dialects);
    let experience = values.experience;

    await DataStore.save(
      new VolunteerForm({
        name: name,
        email: email,
        address: address,
        phone: phone,
        daysFree: daysFree,
        commonLanguage: commonLanguage,
        dialects: dialects,
        experience: experience,
      })
    );
    toast({
      title: "Form submitted",
      description:
        "Form successfully submitted. The committee will contact you soon!!",
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

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Email is required";
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
    if (!value) {
      error = "Address is required";
    }
    return error;
  }

  function validateDaysFree(value) {
    let error;
    if (value.length == 0) {
      error = "Day(s) free to volunteer is required";
    }
    return error;
  }

  function validateCommonLanguage(value) {
    let error;
    if (value.length == 0) {
      error = "Common language is required";
    }
    return error;
  }

  return (
    <Box align="center">
      <Flex direction="column" width={["70vw"]} height="full">
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            address: "",
            daysFree: [],
            commonLanguage: [],
            dialects: [],
            experience: "",
          }}
          onSubmit={(values, { resetForm }) => {
            JSON.stringify(values);

            setFormDetails(values);

            resetForm();
          }}
        >
          {(props) => (
            <Form>
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
              <Field name="address" validate={validateAddress}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.address && form.touched.address}
                  >
                    <FormLabel marginTop="2" htmlFor="address">
                      Address
                    </FormLabel>
                    <Input {...field} id="address" placeholder="address" />
                    <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="experience">
                {({ field, form }) => (
                  <FormControl>
                    <FormLabel marginTop="2" htmlFor="address">
                      Experience
                    </FormLabel>
                    <Textarea
                      {...field}
                      id="experience"
                      placeholder="Let us know your experiences so we can asign you roles base on your strengths. (eg. your CCA, the responsibilities)"
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="daysFree" validate={validateDaysFree}>
                {({ field, form }) => (
                  <VStack align="left">
                    <FormControl
                      isInvalid={form.errors.daysFree && form.touched.daysFree}
                    >
                      <FormLabel marginTop="2" htmlFor="daysFree">
                        Days free for volunteer work
                      </FormLabel>
                      <HStack justify="space-around">
                        <Checkbox {...field} value="Monday">
                          Monday
                        </Checkbox>
                        <Checkbox {...field} value="Tuesday">
                          Tuesday
                        </Checkbox>
                        <Checkbox {...field} value="Wednesday">
                          Wednesday
                        </Checkbox>
                        <Checkbox {...field} value="Thursday">
                          Thursday
                        </Checkbox>
                        <Checkbox {...field} value="Friday">
                          Friday
                        </Checkbox>
                        <Checkbox {...field} value="Saturday">
                          Saturday
                        </Checkbox>
                        <Checkbox {...field} value="Sunday">
                          Sunday
                        </Checkbox>
                      </HStack>
                      <FormErrorMessage>
                        {form.errors.daysFree}
                      </FormErrorMessage>
                    </FormControl>
                  </VStack>
                )}
              </Field>

              <Field name="commonLanguage" validate={validateCommonLanguage}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.commonLanguage && form.touched.commonLanguage
                    }
                  >
                    <FormLabel marginTop="2" htmlFor="daysFree">
                      Common language
                    </FormLabel>
                    <VStack justify="space-around" align="left">
                      <Checkbox {...field} value="English">
                        English
                      </Checkbox>
                      <Checkbox {...field} value="Chinese">
                        Chinese
                      </Checkbox>
                      <Checkbox {...field} value="Malay">
                        Malay
                      </Checkbox>
                      <Checkbox {...field} value="Tamil">
                        Tamil
                      </Checkbox>
                    </VStack>
                    <FormErrorMessage>
                      {form.errors.commonLanguage}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field
                name="dialects"
                // validate={validateDialects}
              >
                {({ field, form }) => (
                  <FormControl
                  // isInvalid={
                  //   form.errors.commonLanguage && form.touched.commonLanguage
                  // }
                  >
                    <FormLabel marginTop="2" htmlFor="dialects">
                      Dialects
                    </FormLabel>
                    <VStack justify="space-around" align="left">
                      <Checkbox {...field} value="Hokkien">
                        Hokkien
                      </Checkbox>
                      <Checkbox {...field} value="TeoChew">
                        TeoChew
                      </Checkbox>
                      <Checkbox {...field} value="Cantonese">
                        Cantonese
                      </Checkbox>
                      <Checkbox {...field} value="Hakka">
                        Hakka
                      </Checkbox>
                      <Checkbox {...field} value="Hindi">
                        Hindi
                      </Checkbox>
                    </VStack>
                    {/* <FormErrorMessage>
                      {form.errors.commonLanguage}
                    </FormErrorMessage> */}
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
export default VolunteerSignup;
