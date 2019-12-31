import React from "react";
import { Route } from "react-router-dom";

import TodoList from "../pages/TodoList";
import ExamplePageOne from "../pages/ExamplePageOne";
import ExamplePageTwo from "../pages/ExamplePageTwo";

function Content() {
  return (
    <React.Fragment>
      <Route exact path="/" component={TodoList} />
      <Route path="/back-up" component={ExamplePageOne} />
      <Route path="/e-mail" component={ExamplePageTwo} />
    </React.Fragment>
  );
}

export default Content;
