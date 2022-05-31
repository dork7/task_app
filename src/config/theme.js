import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    // useSystemColorMode: true,
    // initialColorMode: 'dark',
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

export default theme;
