import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import FlexLayout from "./components/Layout";
import { ReactQueryDevtools } from "react-query/devtools";
import ListComp from "./reactquery/List";
const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark",
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {/* <FlexLayout /> */}
        <ListComp />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
    // <div className="App">
    //   <header className="App-header"></header>
    //   <FlexLayout />
    // </div>
  );
}

export default App;
