import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import theme from "../theme";

import NavBar from "../components/layout/navbar";

import Amplify from "@aws-amplify/core";

Amplify.configure({
  aws_project_region: "ap-southeast-1",
  aws_appsync_graphqlEndpoint: process.env.NEXT_PUBLIC_GQL_URL,
  aws_appsync_region: "ap-southeast-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: process.env.NEXT_PUBLIC_APPSYNC_API,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo
        title="localish | hyper-local-communities"
        description="Built for communities within clusters to bond over shared interests 🤝"
        canonical="https://localish.ml"
        openGraph={{
          title: "localish | hyper-local-communities",
          description:
            "Built for communities within clusters to bond over shared interests 🤝",
          url: "https://localish.ml",
          images: [
            {
              url: "/meta_image.png",
              width: 1200,
              height: 628,
              alt: "Localish site's meta image",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalLinkTags={[
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
          {
            rel: "manifest",
            href: "/site.webmanifest",
          },
        ]}
      />
      <NavBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
