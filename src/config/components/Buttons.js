export const ExtendedButtons = {
  baseStyle: {
    fontWeight: 'bold', // Normally, it is "semibold"
  },
  sizes: {
    xl: {
      h: '56px',
      fontSize: 'lg',
      px: '32px',
    },
  },
  variants: {
    'with-shadow': {
      bg: 'red.400',
      boxShadow: '0 0 2px 2px #efdfde',
    },

    blackButton: {
      bg: 'black',
      color: 'white',
      borderRadius: 0,
      w: 200,
      _hover: {
        bg: 'white',
        color: 'black',
      },
    },
    grayButton: {
      bg: 'gray.900',
      color: 'white',
      borderRadius: 0,
      width: 200,
      _hover: {
        bg: 'white',
        color: 'black',
      },
    },
    protectedRoute: {
      bg: 'red.600',
      color: 'white',
      borderRadius: 0,
      width: 200,
      _hover: {
        bg: 'white',
        color: 'black',
      },
    },

    sm: {
      //   bg: 'teal.500',
      fontSize: 'md',
    },
  },
  defaultProps: {
    size: 'md', // default is md
    variant: 'sm', // default is solid
    colorScheme: 'green', // default is gray
  },
};
