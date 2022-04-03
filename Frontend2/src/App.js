import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import Admin from "./pages/Admin";
import Author from "./pages/Author";
import Home2 from "./pages/Home2";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Sign-In" exact component={SignIn} />
        <Route component={NotFound} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/author" exact component={Author} />
        <Route path="/home2" exact component={Home2} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
