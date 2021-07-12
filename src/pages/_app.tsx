import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import theme from "../theme";

import NavBar from "../components/layout/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <NavBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
