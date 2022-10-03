import React from 'react';
import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';
import Cake from '../../assets/Birthday cake.png';
import { FiMapPin } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
import { useMediaQuery } from '@chakra-ui/react';

const EventsView = () => {
  const [isAboveMd] = useMediaQuery('(min-width: 760px)');
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection={{ base: 'column', md: 'column', lg: 'row-reverse' }}
      alignItems={{ lg: 'center' }}
    >
      <Box
        my={{ base: '0px', lg: '0' }}
        display={{ base: 'flex', lg: 'block' }}
        justifyContent={{ base: 'center', lg: 'start' }}
        as={isAboveMd ? Container : 'div'}
      >
        <Image src={Cake} width={{ base: '100%', lg: '100%' }} />
      </Box>
      <Container>
        <Box my={{ base: '20px' }}>
          <Heading>Birthday Bash</Heading>
          <Text color="neutral.500">
            Hosted by{' '}
            <Box as="span" fontWeight={700}>
              Elysia
            </Box>
          </Text>
        </Box>
        <Box display="flex" flexDirection={'column'} gap="20px">
          <Box display="flex" gap="20px">
            <Box
              p="14px"
              boxShadow="0px 0px 5px rgba(0, 0, 0, 0.1)"
              borderRadius="10px"
            >
              <BiCalendar color="#8456EC" fontSize={'24px'} />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems={'center'}
              flex={1}
            >
              <Box>
                <Text color="primary.purpleDark" fontWeight={700}>
                  18 August 6:00PM
                </Text>
                <Text color="neutral.600">
                  to{' '}
                  <Box as={'span'} fontWeight={700} fontSize="14px">
                    19 August 1:00PM
                  </Box>{' '}
                  UTC +10
                </Text>
              </Box>
              <FaAngleRight color="#BDBDBD" />
            </Box>
          </Box>
          {/*  */}
          <Box display="flex" gap="20px">
            <Box
              p="14px"
              boxShadow="0px 0px 5px rgba(0, 0, 0, 0.1)"
              borderRadius="10px"
            >
              <FiMapPin color="#8456EC" fontSize={'24px'} />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems={'center'}
              flex={1}
            >
              <Box>
                <Text color="primary.purpleDark" fontWeight={700}>
                  Street name
                </Text>
                <Text color="neutral.600">Suburb, State, Postcode</Text>
              </Box>
              <FaAngleRight color="#BDBDBD" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EventsView;
