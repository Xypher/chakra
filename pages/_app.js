import {
  ChakraProvider,
  ColorModeProvider,
  ThemeProvider,
  Flex,
  CSSReset,
} from "@chakra-ui/react";
import "../styles/globals.css";
import { extendTheme, theme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <Flex direction="columns" align="center" justify="center">
          <CSSReset />
          {/*<NavBar/>*/}
          <Flex justify="center" align="center" w="50%" h="93vh">
            <Component {...pageProps} />
          </Flex>
        </Flex>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
