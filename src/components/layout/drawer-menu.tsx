import Link from "next/link";
import { useRouter } from "next/router";

import userControlLevel from "../../hooks/userControlLevel";

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
import { ImStatsDots } from "react-icons/im";

const DrawerMenuItem = ({ itemName, icon, href }) => {
  const router = useRouter();

  let currentPage = "";
  try {
    currentPage = router.pathname
      .split("/")[1]
      .replaceAll("-", " ")
      .toLowerCase();
  } catch (error) {
    currentPage = "";
  }

  return (
    <Link href={href}>
      <ChakraLink>
        <HStack
          p={currentPage === itemName.toLowerCase() ? "2" : "0"}
          mb="2"
          background={
            currentPage === itemName.toLowerCase() ? "greenPrimary.100" : ""
          }
          borderRadius="md"
        >
          {icon}
          <Text fontSize="xl">{itemName}</Text>
        </HStack>
      </ChakraLink>
    </Link>
  );
};

const DrawerMenu = ({ isOpen, onClose }) => {
  const { controlLevel } = userControlLevel();

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
          <Link href="/">
            <Image
              h="120px"
              src="/localish.svg"
              alt="localish logo"
              _hover={{ cursor: "pointer" }}
            />
          </Link>
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
            href="/friend-among-us"
          />
          <DrawerMenuItem
            itemName="Chat"
            icon={<MdChatBubbleOutline />}
            href="/chat"
          />
          <DrawerMenuItem
            itemName="Friendly Neighbourhood Activities"
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
            itemName="Volunteer Signup"
            icon={<EditIcon />}
            href="/volunteer-signup"
          />
          {controlLevel == "admin" ? (
            <>
              <DrawerMenuItem
                itemName="Admin Volunteer Applications"
                icon={<EditIcon />}
                href="/admin-volunteer-applications"
              />

              <DrawerMenuItem
                itemName="Admin Dashboard"
                icon={<ImStatsDots />}
                href="/admin-dashboard"
              />
            </>
          ) : (
            <div></div>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerMenu;
