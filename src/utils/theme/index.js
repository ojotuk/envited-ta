import { extendTheme } from '@chakra-ui/react';
import { ButtonStyles as Button } from './components/ButtonStyles';

export const AppTheme = extendTheme({
  colors: {
    primary: {
      purpleDark: '#240D57',
      purpleLight: '#501FC1',
      envitedPurple: '#8456EC',
      envitedPink: '#E87BF8',
    },
    secondary: {
      purple1: '#CCB6FF',
      purple2: '#EDE5FF',
      purple3: '#F6F2FF',
    },
    neutral: {
      600: '#4F4F4F',
      500: '#828282',
      400: '#BDBDBD',
      300: '#E0E0E0',
      200: '#F2F2F2',
      100: '#FBFAFF',
    },
  },
  fonts: {
    heading: 'Helvetica',
    body: 'Helvetica',
  },
  components: {
    Button,
    // Input,
  },
});
