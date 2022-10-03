import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Route exact path="/create" element={<EventsView />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;
