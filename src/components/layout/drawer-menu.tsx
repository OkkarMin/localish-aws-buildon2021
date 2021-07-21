import Link from "next/link";

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Image,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

import { VscMortarBoard } from "react-icons/vsc";
import { GiThreeFriends } from "react-icons/gi";
import { MdLocalActivity, MdChatBubbleOutline } from "react-icons/md";
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
        <DrawerHeader>
          <Image h="120px" src="/localish.svg" alt="localish logo" />
        </DrawerHeader>

        <DrawerBody>
          <DrawerMenuItem
            itemName="Education"
            icon={<VscMortarBoard />}
            href="/education"
          />
          <DrawerMenuItem
            itemName="Friend Among Us"
            icon={<GiThreeFriends />}
            href="/friendAmongUs"
          />
          <DrawerMenuItem
            itemName="Chats"
            icon={<MdChatBubbleOutline />}
            href="/chat"
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
          <DrawerMenuItem
            itemName="Volunteer Sign-up"
            icon={<EditIcon />}
            href="/volunteer-signup"
          />
          <DrawerMenuItem
            itemName="Admin volunteer applications"
            icon={<EditIcon />}
            href="/adminVolunteerApplications"
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerMenu;
