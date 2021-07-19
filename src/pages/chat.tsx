import { useEffect, useState, useRef } from "react";

import {
  Flex,
  Button,
  Input,
  Text,
  HStack,
  VStack,
  Heading,
  Avatar,
  Box,
  Spacer,
} from "@chakra-ui/react";

const ChatMessage = ({ message, isMe }) => (
  <Box alignSelf={isMe ? "flex-end" : "flex-start"}>
    <HStack alignItems="baseline">
      <VStack>
        <Avatar name={isMe ? "ME" : "Okkar Min"} />
        <Text>{isMe ? "Me" : "Okkar Min"}</Text>
      </VStack>

      <Box p="4" bg="gray.200" borderRadius="base">
        <Text>{message}</Text>
      </Box>
    </HStack>
  </Box>
);

const Chat = () => {
  const [messages, setMessages] = useState([
    { message: "Hello", isMe: true },
    { message: "World", isMe: false },
  ]);
  const [chatInput, setChatInput] = useState("");
  const messagesEndRef = useRef(null);

  // When the user types something, scroll to bottom of messges
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView();
    }
  }, [messages]);

  return (
    <HStack spacing="0">
      <VStack alignSelf="flex-start" minW="2xs" minH="auto" bg="gray.100">
        <Heading alignSelf="flex-start" fontSize="lg" pt="4" pl="4">
          Chats
        </Heading>

        <VStack alignSelf="flex-start" p="4" spacing="4">
          <HStack alignSelf="flex-start">
            <Avatar name="Okkar Min" />
            <Text>Okkar Min</Text>
          </HStack>
          <HStack alignSelf="flex-start">
            <Avatar name="Ying Sheng" />
            <Text>Ying Sheng</Text>
          </HStack>
          <HStack alignSelf="flex-start">
            <Avatar name="Surabhi" />
            <Text>Surabhi</Text>
          </HStack>
        </VStack>
      </VStack>

      {/* <Spacer /> */}

      <Flex d="column" w="full" p="8">
        <Flex direction="column" p="8" w="full" maxH="70vh" overflow="auto">
          {messages.map(
            (message: { message: string; isMe: boolean }, i: number) => (
              <ChatMessage
                key={i}
                message={message.message}
                isMe={message.isMe}
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
              setMessages(
                messages.concat(
                  { message: chatInput, isMe: true },
                  { message: chatInput, isMe: false }
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
