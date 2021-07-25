import { ChakraProvider, Heading, extendTheme } from "@chakra-ui/react";
import FlexLayout from "./components/Layout";
const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark",
  },
});
function App() {
  return (
    <ChakraProvider>
      <FlexLayout />
    </ChakraProvider>
    // <div className="App">
    //   <header className="App-header"></header>
    //   <FlexLayout />
    // </div>
  );
}

export default App;
