import { ChakraProvider, extendTheme, Box, Flex } from '@chakra-ui/react';
import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';
import React, { Suspense, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import { Center, Spinner } from '@chakra-ui/react';

import { motion, useViewportScroll, AnimatePresence } from 'framer-motion';
import 'antd/dist/antd.css';
import theme from './config/theme';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorBoundries';

const AxiosLayout = React.lazy(() => import('./axios/AxiosLayout'));

const Animations = React.lazy(() => import('./components/animations'));
const AutoCompleteField = React.lazy(() => import('./components/autoComplete'));
const ChatLayout = React.lazy(() => import('./components/chat/ChatLayout'));
const Receiver = React.lazy(() => import('./components/chat/Receiver'));
const Home = React.lazy(() => import('./components/Home'));
const ReactHooks = React.lazy(() => import('./components/hooks'));
const FlexLayout = React.lazy(() => import('./components/Layout'));
const MapComponent = React.lazy(() => import('./components/map'));
const Portal = React.lazy(() => import('./components/Portal'));
const MethodImplementations = React.lazy(() =>
  import('./components/MethodImplementations')
);
const Dashboard = React.lazy(() => import('./Dashboard'));
const MailSender = React.lazy(() => import('./nodemailer/MailSender'));
const HOC = React.lazy(() => import('./components/higherOrderComponent'));
const Forms = React.lazy(() => import('./components/Forms'));

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
    { id: 'portal', label: 'Portal', href: '/portal' },
  ];
  const queryClient = new QueryClient();

  const location = useLocation();

  useEffect(() => {
    // console.log("queryClient", queryClient?.queryCache?.queriesMap);
    // for (let keys in queryClient?.queryCache?.queriesMap) {
    //   console.log("keys", keys, queryClient?.queryCache?.queriesMap[keys]);
    // }
  }, []);

  const WaitingSpinner = () => {
    return (
      <>
        <Flex h="100vh" justify={'center'} alignItems="center">
          <Spinner size={'xl'} />
        </Flex>
      </>
    );
  };

  return (
    <ChakraProvider theme={theme}>
      {/* <FlexLayout /> */}
      {/* <AxiosLayout /> */}
      <QueryClientProvider client={queryClient}>
        <PubNubProvider client={pubnub}>
          <Suspense fallback={<WaitingSpinner />}>
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
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                  }}
                >
                  <Switch>
                    {/* <Route exact path="/" component={Home} /> */}
                    <Route
                      exact
                      path="/"
                      render={(props) => <Home {...props} />}
                    />
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
                    <Route exact path="/portal" component={Portal} />
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
                </ErrorBoundary>
                {/* <Footer /> */}
              </div>
            </motion.div>
          </Suspense>
        </PubNubProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
