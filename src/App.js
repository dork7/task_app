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
  return (
    <ChakraProvider>
      {/* <FlexLayout /> */}
      {/* <AxiosLayout /> */}
      <PubNubProvider client={pubnub}>
        <Router>
          <div className="App">
            {/* <Navbar /> */}
            <Dashboard />
            <Switch>
              <Route exact path="/" component={ChatLayout} />
              <Route exact path="/chat" component={ChatLayout} />
              <Route exact path="/todos" component={FlexLayout} />
              <Route exact path="/axios" component={AxiosLayout} />
              <Route exact path="/receiver" component={Receiver} />
              <Route exact path="/nodemailer" component={MailSender} />
              <Route exact path="/react-hooks" component={ReactHooks} />
              {/* <Route exact path="/pubnub" component={PubNubtest} /> */}
            </Switch>
            {/* <Footer /> */}
          </div>
        </Router>
      </PubNubProvider>
    </ChakraProvider>
  );
}

export default App;
