import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from 'react-router-dom';
import LandingView from './views/landing';
import EventsView from './views/events';
import { AppTheme } from './utils/theme';
import './styles/global.css';

function App() {
  return (
    <Router>
      <ChakraProvider theme={AppTheme}>
        <Routes>
          <Route path="/" element={<LandingView />} />
          <Route exact path="/events" element={<EventsView />} />
        </Routes>
        {/* <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={8}>
              <Logo h="40vmin" pointerEvents="none" />
              <Text>
                Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
              </Text>
              <Link
                color="teal.500"
                href="https://chakra-ui.com"
                fontSize="2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn Chakra
              </Link>
            </VStack>
          </Grid>
        </Box> */}
      </ChakraProvider>
    </Router>
  );
}

export default App;
