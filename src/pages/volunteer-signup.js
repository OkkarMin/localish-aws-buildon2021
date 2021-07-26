import { useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Box,
  Avatar,
  Checkbox,
  HStack,
  VStack,
  Textarea,
  useToast,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";

import { Formik, Form, Field } from "formik";

import { DataStore } from "@aws-amplify/datastore";
import { Storage } from "aws-amplify";

import { VolunteerForm2 } from "../models";

const VolunteerSignup = () => {
  const [file, setFile] = useState({
    fileUrl: "",
    targetFile: {},
  });

  const handleSetFile = (e) => {
    const targetFile = e.target.files[0];
    const fileUrl = URL.createObjectURL(targetFile);
    console.log(targetFile);
    setFile({
      fileUrl,
      targetFile,
    });
  };

  const toast = useToast();

  const setFormDetails = async (values) => {
    const saltedAvatarKey = Math.random() + file.targetFile.name;

    try {
      const result = await Storage.put(saltedAvatarKey, file.targetFile, {
        level: "public",
        contentType: file.targetFile.type,
      });
      console.log(result);

      await DataStore.save(
        new VolunteerForm2({
          name: values.name,
          nric: values.nric,
          dateOfBirth: values.dateOfBirth,
          gender: values.gender,
          race: values.race,
          maritalStatus: values.maritalStatus,
          nationality: values.nationality,
          countryOfBirth: values.countryOfBirth,
          religion: values.religion,
          commonLanguage: JSON.stringify(values.commonLanguage),
          dialects: JSON.stringify(values.dialects),
          highestEducation: values.highestEducation,
          address: values.address,
          postalCode: values.postalCode,
          phone: values.phone,
          email: values.email,
          typeOfDwelling: values.typeOfDwelling,
          occupation: values.occupation,
          employerName: values.employerName,
          experience: values.experience,
          daysFree: JSON.stringify(values.daysFree),
          avatarKey: result.key,
        })
      );

      console.log(result);
    } catch (error) {
      console.log(error);
    }

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

  function validateNRIC(value) {
    let error;
    if (!value) {
      error = "NRIC is required";
    }
    return error;
  }

  function validateDateOfBirth(value) {
    let error;
    if (!value) {
      error = "Date of Birth is required";
    }
    return error;
  }

  function validateGender(value) {
    let error;
    if (!value) {
      error = "Gender is required";
    }
    return error;
  }

  function validateRace(value) {
    let error;
    if (!value) {
      error = "Race is required";
    }
    return error;
  }

  function validateMaritalStatus(value) {
    let error;
    if (!value) {
      error = "Marital status is required";
    }
    return error;
  }

  function validateNationality(value) {
    let error;
    if (!value) {
      error = "Nationality is required";
    }
    return error;
  }

  function validateCountryOfBirth(value) {
    let error;
    if (!value) {
      error = "Country of birth is required";
    }
    return error;
  }

  function validateReligion(value) {
    let error;
    if (!value) {
      error = "Religion is required";
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

  function validateHighestEducation(value) {
    let error;
    if (!value) {
      error = "Highest education is required";
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

  function validatePostalCode(value) {
    let error;
    if (!value) {
      error = "Postal code is required";
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

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Email is required";
    }
    return error;
  }

  function validateTypeOfDwelling(value) {
    let error;
    if (!value) {
      error = "Type of dwelling is required";
    }
    return error;
  }

  function validateOccupation(value) {
    let error;
    if (!value) {
      error = "Occupation is required";
    }
    return error;
  }

  function validateEmployerName(value) {
    let error;
    if (!value) {
      error = "Employer/Company is required";
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

  return (
    <Box align="center" mb="5">
      <Flex
        direction="column"
        width={["full", "50vw"]}
        height="full"
        shadow="xl"
        p="10"
        rounded="lg"
      >
        <HStack>
          {file.fileUrl ? (
            <Avatar size="xl" src={file.fileUrl} />
          ) : (
            <Avatar size="xl" />
          )}
          <Input type="file" onChange={handleSetFile} />
        </HStack>

        <Formik
          initialValues={{
            name: "",
            nric: "",
            dateOfBirth: "",
            gender: "",
            race: "",
            maritalStatus: "",
            nationality: "",
            countryOfBirth: "",
            religion: "",
            commonLanguage: [],
            dialects: [],
            highestEducation: "",
            address: "",
            postalCode: "",
            phone: "",
            email: "",
            typeOfDwelling: "",
            occupation: "",
            employerName: "",
            experience: "",
            daysFree: [],
          }}
          onSubmit={(values, { resetForm }) => {
            JSON.stringify(values);

            //handleSetUploadAvatar(values.name);
            console.log(values);

            setFormDetails(values);

            resetForm();
          }}
        >
          {(props) => (
            <Form>
              <SimpleGrid spacing="5">
                <HStack align="top" spacing="10">
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

                  <Field name="nric" validate={validateNRIC}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.nric && form.touched.nric}
                      >
                        <FormLabel marginTop="2" htmlFor="name">
                          NRIC
                        </FormLabel>
                        <Input {...field} id="nric" placeholder="nric" />
                        <FormErrorMessage>{form.errors.nric}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </HStack>

                <HStack align="top" spacing="10">
                  <Field name="dateOfBirth" validate={validateDateOfBirth}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.dateOfBirth && form.touched.dateOfBirth
                        }
                      >
                        <FormLabel marginTop="2" htmlFor="dateOfBirth">
                          Date of Birth
                        </FormLabel>
                        <Input
                          {...field}
                          id="dateOfBirth"
                          placeholder="dateOfBirth"
                          type="date"
                        />
                        <FormErrorMessage>
                          {form.errors.dateOfBirth}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="gender" validate={validateGender}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.gender && form.touched.gender}
                      >
                        <FormLabel marginTop="2" htmlFor="gender">
                          Gender
                        </FormLabel>
                        {/* <Input /> */}
                        <Select {...field} id="gender" placeholder="gender">
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </Select>
                        <FormErrorMessage>
                          {form.errors.gender}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </HStack>

                <HStack align="top" spacing="10">
                  <Field name="race" validate={validateRace}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.race && form.touched.race}
                      >
                        <FormLabel marginTop="2" htmlFor="race">
                          Race
                        </FormLabel>
                        <Input {...field} id="race" placeholder="race" />
                        <FormErrorMessage>{form.errors.race}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="maritalStatus" validate={validateMaritalStatus}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.maritalStatus &&
                          form.touched.maritalStatus
                        }
                      >
                        <FormLabel marginTop="2" htmlFor="maritalStatus">
                          Marital status
                        </FormLabel>
                        <Select
                          {...field}
                          id="maritalStatus"
                          placeholder="maritalStatus"
                        >
                          <option value="Male">Single</option>
                          <option value="Married">Married</option>
                          <option value="Widowed">Widowed</option>
                          <option value="Divorce/Separated">
                            Divorce/Separated
                          </option>
                        </Select>
                        <FormErrorMessage>
                          {form.errors.maritalStatus}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </HStack>

                <HStack align="top" spacing="10">
                  <Field name="nationality" validate={validateNationality}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.nationality && form.touched.nationality
                        }
                      >
                        <FormLabel marginTop="2" htmlFor="nationality">
                          Nationality
                        </FormLabel>
                        <Input
                          {...field}
                          id="nationality"
                          placeholder="nationality"
                        />
                        <FormErrorMessage>
                          {form.errors.nationality}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field
                    name="countryOfBirth"
                    validate={validateCountryOfBirth}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.countryOfBirth &&
                          form.touched.countryOfBirth
                        }
                      >
                        <FormLabel marginTop="2" htmlFor="countryOfBirth">
                          Country of Birth
                        </FormLabel>
                        <Input
                          {...field}
                          id="countryOfBirth"
                          placeholder="countryOfBirth"
                        />
                        <FormErrorMessage>
                          {form.errors.countryOfBirth}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </HStack>

                <HStack align="top" spacing="10">
                  <Field name="religion" validate={validateReligion}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.religion && form.touched.religion
                        }
                      >
                        <FormLabel marginTop="2" htmlFor="religion">
                          Religion
                        </FormLabel>
                        <Input
                          {...field}
                          id="religion"
                          placeholder="religion"
                        />
                        <FormErrorMessage>
                          {form.errors.religion}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field
                    name="highestEducation"
                    validate={validateHighestEducation}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.highestEducation &&
                          form.touched.highestEducation
                        }
                      >
                        <FormLabel marginTop="2" htmlFor="highestEducation">
                          Highest Education
                        </FormLabel>
                        <Select
                          {...field}
                          id="highestEducation"
                          placeholder="highestEducation"
                        >
                          <option value="Primary">Primary</option>
                          <option value="Secondary">Secondary</option>
                          <option value="GCE N/O">GCE N/O</option>
                          <option value="ITE">ITE</option>
                          <option value="GCE A">GCE A</option>
                          <option value="Diploma">Diploma</option>
                          <option value="Pass Degree">Pass Degree</option>
                          <option value="Honours Degree">Honours Degree</option>
                          <option value="Master Degree">Master Degree</option>
                          <option value="Docterate">Docterate</option>
                        </Select>
                        <FormErrorMessage>
                          {form.errors.highestEducation}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </HStack>

                <HStack align="top" spacing="10">
                  <Field name="address" validate={validateAddress}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.address && form.touched.address}
                      >
                        <FormLabel marginTop="2" htmlFor="address">
                          Address
                        </FormLabel>
                        <Input {...field} id="address" placeholder="address" />
                        <FormErrorMessage>
                          {form.errors.address}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="postalCode" validate={validatePostalCode}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.postalCode && form.touched.postalCode
                        }
                      >
                        <FormLabel marginTop="2" htmlFor="zip">
                          Postal Code
                        </FormLabel>
                        <Input {...field} id="zip" placeholder="postalCode" />
                        <FormErrorMessage>
                          {form.errors.postalCode}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </HStack>

                <HStack align="top" spacing="10">
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
                </HStack>

                <HStack align="top" spacing="10">
                  <Field
                    name="typeOfDwelling"
                    validate={validateTypeOfDwelling}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.typeOfDwelling &&
                          form.touched.typeOfDwelling
                        }
                      >
                        <FormLabel marginTop="2" htmlFor="typeOfDwelling">
                          Type of Dwelling
                        </FormLabel>
                        <Select
                          {...field}
                          id="typeOfDwelling"
                          placeholder="typeOfDwelling"
                        >
                          <option value="HDB">HDB</option>
                          <option value="HDB Executive">HDB Executive</option>
                          <option value="HUDC">HUDC</option>
                          <option value="Semi Detached/Terrace">
                            Semi Detached/Terrace
                          </option>
                          <option value="Condo/Private Apartment">
                            Condo/Private Apartment
                          </option>
                        </Select>
                        <FormErrorMessage>
                          {form.errors.typeOfDwelling}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="occupation" validate={validateOccupation}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.occupation && form.touched.occupation
                        }
                      >
                        <FormLabel marginTop="2" htmlFor="occupation">
                          Occupation
                        </FormLabel>
                        <Input
                          {...field}
                          id="occupation"
                          placeholder="occupation"
                        />
                        <FormErrorMessage>
                          {form.errors.occupation}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </HStack>

                <Field name="employerName" validate={validateEmployerName}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.employerName && form.touched.employerName
                      }
                    >
                      <FormLabel marginTop="2" htmlFor="employerName">
                        Employer/Company Name
                      </FormLabel>
                      <Input
                        {...field}
                        id="employerName"
                        placeholder="Employer/Company Name"
                      />
                      <FormErrorMessage>
                        {form.errors.employerName}
                      </FormErrorMessage>
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

                <HStack align="top">
                  <Field
                    name="commonLanguage"
                    validate={validateCommonLanguage}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.commonLanguage &&
                          form.touched.commonLanguage
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

                  <Field name="dialects">
                    {({ field, form }) => (
                      <FormControl>
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
                      </FormControl>
                    )}
                  </Field>
                </HStack>
                <Field name="daysFree" validate={validateDaysFree}>
                  {({ field, form }) => (
                    <VStack align="left">
                      <FormControl
                        isInvalid={
                          form.errors.daysFree && form.touched.daysFree
                        }
                      >
                        <FormLabel marginTop="2" htmlFor="daysFree">
                          Days free for volunteer work
                        </FormLabel>
                        <Flex
                          direction={["column", "row"]}
                          justify="space-around"
                        >
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
                        </Flex>
                        <FormErrorMessage>
                          {form.errors.daysFree}
                        </FormErrorMessage>
                      </FormControl>
                    </VStack>
                  )}
                </Field>
              </SimpleGrid>
              <Button mt={5} colorScheme="teal" type="submit">
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
