import React from "react";

import { Switch, Route } from "react-router-dom";

import { Home } from "../screens/Home";
import { About } from "../screens/About";
import { Topics } from "../screens/Topics";

export function Miolo() {
  return (
    <section style={{ flexGrow: 1, padding: 10 }}>
      <h1>Miolo</h1>
      <div style={{ marginTop: 20 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </Switch>
      </div>
    </section>
  );
}
