import { ChakraProvider, Heading, extendTheme } from "@chakra-ui/react";
import AxiosLayout from "./axios/AxiosLayout";
import FlexLayout from "./components/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChatLayout from "./components/chat/ChatLayout";
import Receiver from "./components/chat/Receiver";

import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import PubNubtest from "./components/chat/PubNubtest";
import Dashboard from "./Dashboard";
import MailSender from "./nodemailer/MailSender";
import ReactHooks from "./components/hooks";
import Observables from "./components/observables";
import Home from "./components/Home";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import MapComponent from "./components/map";
import AutoCompleteField from "./components/autoComplete";
import MethodImplementations from "./components/MethodImplementations";
import { useEffect } from "react";
import Animations from "./components/animations";

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark",
  },
});
const pubnub = new PubNub({
  publishKey: "pub-c-29e3bab4-1e93-49d9-a651-6c45d651cdbd",
  subscribeKey: "sub-c-43971126-12c5-11ec-9d3c-1ae560ca2970",
  // uuid: "myUniqueUUID",
  uuid: "dork",
});
function App() {
  const pages = [
    { label: "DashBoard", href: "/" },
    { label: "Todo", href: "/todos" },
    { label: "Methods", href: "/methodImplementations" },
    { label: "Axios", href: "/axios" },
    { label: "Chat", href: "/chat" },
    { label: "Receiver", href: "/receiver" },
    // { label: "NodeMailer", href: "/nodemailer" },
    { label: "ReactHooks", href: "/react-hooks" },
    // { label: "Observables", href: "/observable" },
    { label: "Map", href: "/map" },
    { label: "Autocomplete", href: "/autocomplete" },
    { label: "Animations", href: "/animations" },
  ];
  const queryClient = new QueryClient();

  useEffect(() => {
    // console.log("queryClient", queryClient?.queryCache?.queriesMap);
    // for (let keys in queryClient?.queryCache?.queriesMap) {
    //   console.log("keys", keys, queryClient?.queryCache?.queriesMap[keys]);
    // }
  }, []);

  return (
    <ChakraProvider>
      {/* <FlexLayout /> */}
      {/* <AxiosLayout /> */}
      <QueryClientProvider client={queryClient}>
        <PubNubProvider client={pubnub}>
          <Router>
            <div className="App">
              {/* <Navbar /> */}
              <Dashboard pages={pages} />
              <Switch>
                {/* <Route exact path="/" component={Home} /> */}
                <Route exact path="/" render={(props) => <Home {...props} />} />
                <Route exact path="/chat" component={ChatLayout} />
                <Route exact path="/todos" component={FlexLayout} />
                <Route exact path="/axios" component={AxiosLayout} />
                <Route exact path="/receiver" component={Receiver} />
                <Route exact path="/nodemailer" component={MailSender} />
                <Route exact path="/react-hooks" component={ReactHooks} />
                <Route exact path="/observable" component={Observables} />
                <Route exact path="/map" component={MapComponent} />
                <Route exact path="/animations" component={Animations} />
                <Route
                  exact
                  path="/methodImplementations"
                  component={MethodImplementations}
                />
                <Route
                  exact
                  path="/autocomplete"
                  component={AutoCompleteField}
                />
                {/* <Route exact path="/pubnub" component={PubNubtest} /> */}
              </Switch>
              {/* <Footer /> */}
            </div>
          </Router>
        </PubNubProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
