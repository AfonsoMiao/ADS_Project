import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouteLink,
} from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import Edit from "./components/Edit/Edit";
import Query from "./components/Query/Query";
import Visualize from "./components/Visualize/Visualize";

function App({ Component }) {
  return (
    <ChakraProvider>
      {/* <Router> */}
      <Router>
        <Flex>
          <Box>
            <Sidebar />
          </Box>
          <Box w="100%" left="5" h="95vh" marginTop="2.5vh">
            <Switch>
              <Route path="/query">
                <Query />
              </Route>
              <Route path="/edit">
                <Edit />
              </Route>
              <Route path="/visualize">
                <Visualize />
              </Route>
            </Switch>
          </Box>
        </Flex>
      </Router>
      {/* <Flex
          pos="sticky"
          left="5"
        >
          <Switch>
            <Route path="/query">
              <Query />
            </Route>
            <Route path="/edit">
              <Edit />
            </Route>
            <Route path="/visualize">
              <Visualize />
            </Route>
          </Switch>
        </Flex>
      </Router> */}
    </ChakraProvider>
  );
}

export default App;
