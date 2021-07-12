import Link from "next/link";

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";

import { VscMortarBoard } from "react-icons/vsc";
import { GiThreeFriends } from "react-icons/gi";
import { MdLocalActivity } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";

const DrawerMenuItem = ({ itemName, icon, href }) => {
  return (
    <Link href={href}>
      <ChakraLink>
        <HStack mb="2">
          {icon}
          <Text>{itemName}</Text>
        </HStack>
      </ChakraLink>
    </Link>
  );
};

const DrawerMenu = ({ isOpen, onClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      initialFocusRef={null}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader bg="greenPrimary.100">
          <Heading as="h2" fontSize="2xl" color="green">
            localish
          </Heading>
          <Text textColor="greenSecondary.400" fontSize="md">
            hyper-localized communitites
          </Text>
        </DrawerHeader>

        <DrawerBody bg="greenPrimary.100">
          <DrawerMenuItem
            itemName="Education"
            icon={<VscMortarBoard />}
            href="/education"
          />
          <DrawerMenuItem
            itemName="Friend Among Us"
            icon={<GiThreeFriends />}
            href="/friend-among-us"
          />
          <DrawerMenuItem
            itemName="Neighbourhood Activitites"
            icon={<MdLocalActivity />}
            href="/friendly-neighbourhood-activities"
          />
          <DrawerMenuItem
            itemName="Local Board"
            icon={<FaChalkboardTeacher />}
            href="/local-board"
          />
          <DrawerMenuItem
            itemName="Local News"
            icon={<IoNewspaperOutline />}
            href="/local-news"
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerMenu;
