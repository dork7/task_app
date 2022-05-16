import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
=======
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
>>>>>>> 6b9be00b5998722ebd99273b8377ee1cd005eaa3
import AxiosLayout from './axios/AxiosLayout';
import Animations from './components/animations';
import AutoCompleteField from './components/autoComplete';
import ChatLayout from './components/chat/ChatLayout';
import Receiver from './components/chat/Receiver';
<<<<<<< HEAD
import HOC from './components/higherOrderComponent';
=======
>>>>>>> 6b9be00b5998722ebd99273b8377ee1cd005eaa3
import Home from './components/Home';
import ReactHooks from './components/hooks';
import FlexLayout from './components/Layout';
import MapComponent from './components/map';
import MethodImplementations from './components/MethodImplementations';
import Observables from './components/observables';
import Dashboard from './Dashboard';
import MailSender from './nodemailer/MailSender';
<<<<<<< HEAD
=======
import { motion, useViewportScroll, AnimatePresence } from 'framer-motion';
>>>>>>> 6b9be00b5998722ebd99273b8377ee1cd005eaa3

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: 'dark',
  },
});
const pubnub = new PubNub({
  publishKey: 'pub-c-29e3bab4-1e93-49d9-a651-6c45d651cdbd',
  subscribeKey: 'sub-c-43971126-12c5-11ec-9d3c-1ae560ca2970',
  // uuid: "myUniqueUUID",
  uuid: 'dork',
});
function App() {
  const pages = [
    { label: 'DashBoard', href: '/' },
    { label: 'Todo', href: '/todos' },
    // { label: "Methods", href: "/methodImplementations" },
    { label: 'Axios', href: '/axios' },
    { label: 'Chat', href: '/chat' },
    // { label: "Receiver", href: "/receiver" },
    // { label: "NodeMailer", href: "/nodemailer" },
    { label: 'ReactHooks', href: '/react-hooks' },
    // { label: "Observables", href: "/observable" },
    { label: 'Map', href: '/map' },
    { label: 'Autocomplete', href: '/autocomplete' },
    { label: 'Animations', href: '/animations' },
    { label: 'HOC', href: '/hoc' },
  ];
  const queryClient = new QueryClient();

  const location = useLocation();

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
          <motion.div
            initial={{ opacity: 0, color: 'red', x: -300 }}
            animate={{ opacity: 1, color: 'white', x: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
          >
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
                <Route exact path="/hoc" component={HOC} />
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
          </motion.div>
        </PubNubProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
