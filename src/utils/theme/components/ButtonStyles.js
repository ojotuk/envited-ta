import { whiten, darken } from '@chakra-ui/theme-tools';

export const ButtonStyles = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'capitalise',
    fontFamily: 'Helvetica',
    borderRadius: 'base', // <-- border radius is same for all variants and sizes
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      fontSize: '14px',
      lineHeight: 0,
      px: '1.5rem', // <-- px is short for paddingLeft and paddingRight
      py: '.8rem', // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: '1rem',
      lineHeight: 0,
      px: '4rem',
      py: '1rem',
    },
    lg: {
      fontSize: '1rem',
      lineHeight: 0,
      px: '5rem',
      py: '1rem',
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      bg: `linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)`,
      color: 'white',
      _hover: {
        transform: 'scale(1.02)',
        bg: whiten(`linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)`, 40),
        _disabled: {
          bg: whiten(`linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)`, 40),
        },
      },
    },
    secondary: {
      bg: 'white',
      border: '1px solid',
      borderColor: 'primaryBlue',
      color: 'primaryBlue',
      _hover: {
        bg: whiten('primaryBlue', 40),
        transform: 'scale(1.02)',
        _disabled: {
          bg: whiten('primaryBlue', 40),
        },
      },
    },
    action: {
      bg: 'primaryYellow',
      color: 'white',
      _hover: {
        transform: 'scale(1.02)',
        bg: whiten('primaryYellow', 20),
        _disabled: {
          bg: whiten('primaryYellow', 20),
        },
      },
    },
    success: {
      bg: '#219653',
      color: 'white',
      _hover: {
        bg: whiten('#219653', 20),
        transform: 'scale(1.02)',
        _disabled: {
          bg: whiten('#219653', 20),
        },
      },
    },
    outline: {
      border: '1px solid #FFF',
      color: '#FFF',
      _hover: {
        transform: 'scale(1.02)',
        bg: '#FFF',
        color: 'primaryBlue',
        _disabled: {
          bg: '#FFF',
          color: 'primaryBlue',
        },
      },
    },
    danger: {
      bg: '#EB5757',
      color: '#FFF',
      _hover: {
        bg: darken('#EB5757', 20),
        transform: 'scale(1.02)',
        _disabled: {
          bg: darken('#EB5757', 20),
        },
      },
    },
    outlineYellow: {
      border: '1px solid',
      borderColor: 'primaryYellow',
      bg: '#FFF',
      color: 'primaryYellow',
      _hover: {
        transform: 'scale(1.02)',
        bg: darken('#FFF', 20),
        _disabled: {
          bg: darken('#FFF', 20),
        },
      },
    },
    outlineDanger: {
      border: '1px solid',
      borderColor: '#EB5757',
      bg: '#FFF',
      color: '#EB5757',
      _hover: {
        transform: 'scale(1.02)',
        bg: darken('#FFF', 20),
        _disabled: {
          bg: darken('#FFF', 20),
        },
      },
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: 'sm',
    variant: 'primary',
  },
};
