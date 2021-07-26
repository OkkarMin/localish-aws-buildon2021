import { useEffect, useState, useRef, useContext } from "react";

import {
  Flex,
  Input,
  Text,
  HStack,
  VStack,
  Heading,
  Avatar,
  Box,
} from "@chakra-ui/react";

import { FriendMatchesContext } from "../context/FriendMatchesContext";

const ChatMessage = ({ message, isMe, from }) => (
  <Box alignSelf={isMe ? "flex-end" : "flex-start"}>
    <HStack alignItems="baseline">
      <VStack>
        <Avatar name={isMe ? "ME" : from} />
        <Text>{isMe ? "Me" : from}</Text>
      </VStack>

      <Box p="4" bg="gray.200" borderRadius="base">
        <Text>{message}</Text>
      </Box>
    </HStack>
  </Box>
);

const Chat = () => {
  const [matchList, setMatchList] = useContext(FriendMatchesContext);
  const [messages, setMessages] = useState([
    { message: "Hello", isMe: true, from: "" },
    { message: "World", isMe: false, from: "Okkar Min" },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [chatSessions, setChatSessions] = useState([
    {
      name: "Okkar Min",
      isSelected: true,
    },
    {
      name: "Yeow Ying Sheng",
      isSelected: false,
    },
    {
      name: "Surabhi",
      isSelected: false,
    },
  ]);
  const messagesEndRef = useRef(null);

  // When the user types something, scroll to bottom of messges
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView();
    }
  }, [messages]);

  const ChatSession = ({ name, isSelected }) => (
    <HStack
      alignSelf="flex-start"
      borderRadius="md"
      p={isSelected ? "2" : "0"}
      width="full"
      bg={isSelected ? "greenPrimary.100" : ""}
      _hover={{ cursor: "pointer" }}
      onClick={() => {
        setChatSessions(
          chatSessions.map((session) => {
            if (session.name === name) {
              return { ...session, isSelected: true };
            }
            return { ...session, isSelected: false };
          })
        );

        setMessages([
          { message: "Hello", isMe: true, from: "" },
          { message: "World", isMe: false, from: name },
        ]);
      }}
    >
      <Avatar name={name} />
      <Text>{name}</Text>
    </HStack>
  );

  return (
    <HStack spacing="0">
      <VStack alignSelf="flex-start" minW="2xs" minH="auto" bg="gray.100">
        <Heading alignSelf="flex-start" fontSize="lg" pt="4" pl="4">
          Chats
        </Heading>

        <VStack alignSelf="flex-start" p="4" spacing="4" width="full">
          {chatSessions.map((session, i: number) => (
            <ChatSession
              key={i}
              name={session.name}
              isSelected={session.isSelected}
            />
          ))}

          {matchList.map((friend, i) => {
            return (
              <HStack key={i} alignSelf="flex-start">
                <Avatar name={friend} />
                <Text>{friend}</Text>
              </HStack>
            );
          })}
        </VStack>
      </VStack>

      {/* <Spacer /> */}

      <Flex d="column" w="full" p="8">
        <Flex direction="column" p="8" w="full" maxH="70vh" overflow="auto">
          {messages.map(
            (
              message: { message: string; isMe: boolean; from: string },
              i: number
            ) => (
              <ChatMessage
                key={i}
                message={message.message}
                isMe={message.isMe}
                from={message.from}
              />
            )
          )}
          <div />
          <div ref={messagesEndRef} />
        </Flex>
        <Input
          w="full"
          focusBorderColor="greenPrimary.400"
          placeholder="enter your message..."
          value={chatInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const s = chatSessions.find((session) => session.isSelected);
              console.log(s);
              setMessages(
                messages.concat(
                  { message: chatInput, isMe: true, from: s.name },
                  {
                    message: chatInput,
                    isMe: false,
                    from: s.name,
                  }
                )
              );
              setChatInput("");
            }
          }}
          onChange={(e) => setChatInput(e.target.value)}
        />
      </Flex>
    </HStack>
  );
};

export default Chat;
