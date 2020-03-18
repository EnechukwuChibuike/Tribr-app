import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/App.css";
import Contact from "../views/Contact";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Signup from "../views/Signup";
import About from "../views/About";
import Home from "../views/Home";
import NotFound from "../views/404";
import ThemeProvider from "../helpers/themes/ThemeProvider.helper";

function App() {
   return (
      <>
         <ThemeProvider>
            <Router>
               <Switch>
                  <Route exact path={"/"} component={Home} />
                  <Route exact path={"/About"} component={About} />
                  <Route exact path={"/Contact"} component={Contact} />
                  <Route exact path={"/Dashboard"} component={Dashboard} />
                  <Route exact path={"/Login"} component={Login} />
                  <Route exact path={"/Signup"} component={Signup} />
                  <Route path={"*"} component={NotFound} />
               </Switch>
            </Router>
         </ThemeProvider>
      </>
   );
}

export default App;
