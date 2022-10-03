import React from 'react';
import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';
import EnvitedButton from '../../components/common/button';
import Cake from '../../assets/Landing page image.svg';
import { Link } from 'react-router-dom';
//
const LandingView = () => {
  return (
    <Box bg="secondary.purple3" minH="100vh">
      <Container
        pt={{ base: '94px' }}
        pb={{ base: '20px' }}
        maxW="container.xl"
      >
        <Box
          display={'flex'}
          flexDirection={{ base: 'column', lg: 'row-reverse' }}
        >
          <Box
            textAlign={{ base: 'center', lg: 'right' }}
            py={3}
            flex={1}
            display="flex"
            flexDirection={{ base: 'column' }}
            alignItems={{ base: 'center', lg: 'flex-end' }}
          >
            <Heading
              fontSize={{ base: '36px', md: '64px' }}
              color="primary.purpleDark"
            >
              Imagine if <br></br>
              <Box className="text-gradient" as={'span'}>
                Snapchat
              </Box>{' '}
              <br></br>
              had events.
            </Heading>
            <Text
              mt="16px"
              color="neutral.600"
              fontSize={{ base: '16px', md: '24px' }}
              maxW="500px"
            >
              Easily host and share events with your friends across any social
              media.
            </Text>
            <Box
              justifyContent="center"
              display={{ base: 'none', lg: 'block' }}
              mt={10}
            >
              <Link to="/events">
                <EnvitedButton px={10} py={8} fontSize={'20px'}>
                  🎉 Create my event
                </EnvitedButton>
              </Link>
            </Box>
          </Box>
          <Box
            my={{ base: '50px', lg: '0' }}
            display={'flex'}
            justifyContent={{ base: 'center', lg: 'start' }}
            flex={1}
          >
            <Image src={Cake} width={{ base: '50%', lg: '60%' }} />
          </Box>
          <Box justifyContent="center" display={{ base: 'flex', lg: 'none' }}>
            <Link to="/events">
              <EnvitedButton px={10} py={8} fontSize={'20px'}>
                🎉 Create my event
              </EnvitedButton>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingView;
