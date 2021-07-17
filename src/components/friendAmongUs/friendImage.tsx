import { FC } from "react";

import Image from "next/image";

import { Box } from "@chakra-ui/react";

export const FriendImage: FC<{}> = () => {
  return (
    <Box align="center" width="auto">
      <Box m="10" boxSize="md" height="auto">
        <Image
          width="300"
          height="200"
          layout="responsive"
          src="/friendsImage.svg"
          alt="friends image"
        />
      </Box>
    </Box>
  );
};
