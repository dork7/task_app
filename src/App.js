import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ChakraProvider, Flex, Spinner } from '@chakra-ui/react';
import 'antd/dist/antd.css';
import { motion } from 'framer-motion';
import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';
import React, { Suspense, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Navigate } from 'react-router';
import { Routes, Route, useLocation } from 'react-router-dom';
import ErrorFallback from './components/ErrorBoundries';
import GraphQl from './components/GraphQl';
import ProfilePage from './components/Profile';
import RequireAuth from './components/RequireAuth';
import theme from './config/theme';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/v1/graphql',
  cache: new InMemoryCache(),
});

const AxiosLayout = React.lazy(() => import('./axios/AxiosLayout'));

const Animations = React.lazy(() => import('./components/animations'));
const AutoCompleteField = React.lazy(() => import('./components/autoComplete'));
const ChatLayout = React.lazy(() => import('./components/chat/ChatLayout'));
const Receiver = React.lazy(() => import('./components/chat/Receiver'));
const Home = React.lazy(() => import('./components/Home'));
const ReactHooks = React.lazy(() => import('./components/hooks'));
const FlexLayout = React.lazy(() => import('./components/Todo/Layout'));
const MapComponent = React.lazy(() => import('./components/map'));
const Portal = React.lazy(() => import('./components/Portal'));
const Auth = React.lazy(() => import('./components/auth'));
const MethodImplementations = React.lazy(() =>
  import('./components/MethodImplementations')
);
const Dashboard = React.lazy(() => import('./Dashboard'));
const MailSender = React.lazy(() => import('./nodemailer/MailSender'));
const HOC = React.lazy(() => import('./components/higherOrderComponent'));
const Forms = React.lazy(() => import('./components/Forms'));
const Excel = React.lazy(() => import('./components/Excel'));
const PlainHtml = React.lazy(() => import('./components/PlainHtml'));

const pubnub = new PubNub({
  publishKey: 'pub-c-29e3bab4-1e93-49d9-a651-6c45d651cdbd',
  subscribeKey: 'sub-c-43971126-12c5-11ec-9d3c-1ae560ca2970',
  // uuid: "myUniqueUUID",
  uuid: 'dork',
});
function App() {
  const pages = [
    { id: 'dashboard', label: 'DashBoard', href: '/' },
    { id: 'AUTH', label: 'Auth', href: '/auth' },
    { id: 'forms', label: 'Forms', href: '/forms', protected: true },
    {
      id: 'profilePage',
      label: 'ProfilePage',
      href: '/profilePage',
      protected: true,
    },
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
    { id: 'portal', label: 'Portal', href: '/portal' },
    { id: 'Excel', label: 'Excel', href: '/excel' },
    { id: 'Graphql', label: 'Graphql', href: '/graphql-apollo' },
    { id: 'Plain HTML', label: 'Plain HTML', href: '/plain-html' },
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
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <ChakraProvider theme={theme}>
      {/* <FlexLayout /> */}
      {/* <AxiosLayout /> */}
      <ApolloProvider client={apolloClient}>
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
                  <Dashboard pages={pages} {...{ loggedIn, setLoggedIn }}>
                    <ErrorBoundary
                      FallbackComponent={ErrorFallback}
                      onReset={() => {
                        // reset the state of your app so the error doesn't happen again
                      }}
                    >
                      <Routes>
                        {/* <Route
                          exact
                          path="/"
                          // render={(props) => <Home {...props} />}
                        /> */}
                        <Route path="/" element={<Home />} />
                        <Route path="/chat" element={<ChatLayout />} />
                        <Route path="/todos" element={<FlexLayout />} />
                        <Route path="/axios" element={<AxiosLayout />} />
                        <Route path="/receiver" element={<Receiver />} />
                        <Route path="/nodemailer" element={<MailSender />} />
                        <Route path="/react-hooks" element={<ReactHooks />} />
                        {/* <Route  path="/observable" element={Observables} /> */}
                        <Route path="/map" element={<MapComponent />} />
                        <Route path="/animations" element={<Animations />} />
                        <Route path="/hoc" element={<HOC />} />
                        <Route path="/portal" element={<Portal />} />
                        <Route
                          path="/methodImplementations"
                          element={MethodImplementations}
                        />
                        <Route path="/forms" element={<Forms />} />
                        // PROTECTED ROUTES
                        {/* <Route element={<RequireAuth />}> */}
                        <Route element={<RequireAuth />}>
                          <Route
                            path="/profilePage"
                            element={
                              loggedIn ? <ProfilePage /> : <Navigate to="/" />
                            }
                          />
                        </Route>
                        // PROTECTED ROUTES
                        <Route
                          path="/autocomplete"
                          element={<AutoCompleteField />}
                        />
                        <Route path="/excel" element={<Excel />} />
                        <Route path="/graphql-apollo" element={<GraphQl />} />
                        <Route path="/plain-html" element={<PlainHtml />} />
                        <Route path="/auth" element={<Auth />} />
                      </Routes>
                    </ErrorBoundary>
                  </Dashboard>
                </div>
              </motion.div>
            </Suspense>
          </PubNubProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
