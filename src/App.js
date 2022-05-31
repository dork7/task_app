import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import AxiosLayout from './axios/AxiosLayout';
import Animations from './components/animations';
import AutoCompleteField from './components/autoComplete';
import ChatLayout from './components/chat/ChatLayout';
import Receiver from './components/chat/Receiver';
import Home from './components/Home';
import ReactHooks from './components/hooks';
import FlexLayout from './components/Layout';
import MapComponent from './components/map';
import MethodImplementations from './components/MethodImplementations';
import Dashboard from './Dashboard';
import MailSender from './nodemailer/MailSender';
import HOC from './components/higherOrderComponent';
import { motion, useViewportScroll, AnimatePresence } from 'framer-motion';
import Forms from './components/Forms';
import 'antd/dist/antd.css';
import theme from './config/theme';

const pubnub = new PubNub({
  publishKey: 'pub-c-29e3bab4-1e93-49d9-a651-6c45d651cdbd',
  subscribeKey: 'sub-c-43971126-12c5-11ec-9d3c-1ae560ca2970',
  // uuid: "myUniqueUUID",
  uuid: 'dork',
});
function App() {
  const pages = [
    { id: 'dashboard', label: 'DashBoard', href: '/' },
    { id: 'todo', label: 'Todo', href: '/todos' },
    // { label: "Methods", href: "/methodImplementations" },
    { id: 'axios', label: 'Axios', href: '/axios' },
    { id: 'chat', label: 'Chat', href: '/chat' },
    // { label: "Receiver", href: "/receiver" },
    // { label: "NodeMailer", href: "/nodemailer" },
    { id: 'reacthook', label: 'ReactHooks', href: '/react-hooks' },
    // { label: "Observables", href: "/observable" },
    { id: 'map', label: 'Map', href: '/map' },
    { id: 'autocomplete', label: 'Autocomplete', href: '/autocomplete' },
    { id: 'animations', label: 'Animations', href: '/animations' },
    { id: 'hoc', label: 'HOC', href: '/hoc' },
    { id: 'forms', label: 'Forms', href: '/forms' },
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
    <ChakraProvider theme={theme}>
      {/* <FlexLayout /> */}
      {/* <AxiosLayout /> */}
      <QueryClientProvider client={queryClient}>
        <PubNubProvider client={pubnub}>
          <motion.div
            // initial={{ opacity: 0, color: 'red' }}
            // animate={{ opacity: 1, color: 'white' }}
            transition={{
              delay: 0.4,
              type: 'spring',
              stiffness: 100,
            }}
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
                {/* <Route exact path="/observable" component={Observables} /> */}
                <Route exact path="/map" component={MapComponent} />
                <Route exact path="/animations" component={Animations} />
                <Route exact path="/hoc" component={HOC} />
                <Route exact path="/forms" component={Forms} />
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
