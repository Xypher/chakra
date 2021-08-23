import { ColorModeProvider, ThemeProvider, Flex, CSSReset } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
        <ColorModeProvider>
          <Flex direction='columns' align='center' justify='center'>
            <CSSReset/>
            {/*<NavBar/>*/}
            <Flex justify='center' align='center' w='100%' h='93vh'>

              <Component {...pageProps} />  
              
            </Flex>
          </Flex>
        </ColorModeProvider>
    </ThemeProvider>
    )
}

export default MyApp
