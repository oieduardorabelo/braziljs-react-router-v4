import React from "react";

import { Link, Switch, Route } from "react-router-dom";

export function Topics(props) {
  //
  // O `props.match.url` abaixo, é a rota definida em `Miolo.js`,
  // our seja, podemos substituir pela string "/topics/" que irá
  // funcionar do mesmo jeito!
  //
  return (
    <React.Fragment>
      <h2>Topics Content</h2>
      <h3>Select one topic:</h3>
      <ul>
        <li>
          <Link to="/topics/rick">Rick</Link>
        </li>
        <li>
          <Link to="/topics/pickle-rick">Pickle Rick</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/morty`}>Morty</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/portal-gun`}>Portal Gun</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/evil-morty`}>Evil Morty</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/topics/:slug" component={ShowTopic} />
      </Switch>
    </React.Fragment>
  );
}

function ShowTopic(props) {
  return (
    <React.Fragment>
      <dl>
        <dt>Nested Route</dt>
        <dd>Location: {props.location.pathname}</dd>
        <dd>Slug: {props.match.params.slug}</dd>
        <dd>Everything: {JSON.stringify(props)}</dd>
      </dl>
    </React.Fragment>
  );
}
