import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Error from "./error";
import Success from "./success";

export default function Index() {
  let { path, url } = useRouteMatch();

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/success`}>
          <Success />
        </Route>
        <Route path={`${path}/error`}>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}
