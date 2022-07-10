import Head from 'next/head'
import { Box, Button, Divider, Flex, Text, Input, StackDivider, useColorMode, useColorModeValue, VStack } from '@chakra-ui/react'
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TravelTypes } from '../components/TravelTypes';
import { Carousel } from '../components/Carousel';
import { theme } from '../styles/theme';

interface Colors {
  '990': string;
  '700': string;
  '500': string;
  '450': string;
  '100': string;
}


export default function Home() {

  const formBackground = useColorModeValue(theme.colors.ligth, theme.colors.dark) as Colors;



  return (
    <Box
      w="100%"
      maxWidth={1440}
      margin="0 auto"
      bg={formBackground[100]}
      pb='40px'
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header activeLink={false} />
      <Banner />

      <VStack

        spacing={4}

        align='stretch'

      >
        <TravelTypes />
        <Flex

          w='100%'

          flexDirection='row'
          alignItems='center'
          justifyContent='center'

        >

          <Divider mt={['36px', '80px']} mb={['24px', '52px']} w="90px" h="1px" bg={formBackground[700]} />
        </Flex>
        <Flex w='100%' flexDirection='column' alignItems='center' justify='center'>
          <Text
            fontSize={['20px', '36px']}
            fontWeight='semibold'
            color={formBackground[700]}
          >

            Vamos nessa?
          </Text>
          <Text
            fontSize={['20px', '36px']}
            fontWeight='semibold'
            color={formBackground[700]}

          >

            Então escolha seu continente
          </Text>
        </Flex>

        <Flex pl={['0px', '100px']} pr={['0px', '100px']} w='100%' flexDirection='row' alignItems='center'>
          <Carousel />
        </Flex>
      </VStack>
      {/* 
      <Flex height="100vh" align="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading mb={6}>Login</Heading>
          <Input placeholder="maicon@gmail.com" type="email" variant="filled" mb={3} />
          <Input placeholder="******" type="password" variant="filled" mb={6} />
          <Button mb={6} colorScheme="teal">Login</Button>
          <Button onClick={toggleColorMode}>Toogle Color Mode</Button>
        </Flex>

      </Flex> */}
    </Box>
  )
}

