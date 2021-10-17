import { ChakraProvider, Heading, extendTheme } from "@chakra-ui/react";
import AxiosLayout from "./axios/AxiosLayout";
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
      {/* <FlexLayout /> */}
      <AxiosLayout />
    </ChakraProvider>
    // <div className="App">
    //   <header className="App-header"></header>
    //   <FlexLayout />
    // </div>
  );
}

export default App;
