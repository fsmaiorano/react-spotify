import React from "react";

import { Switch, Route } from "react-router-dom";

import Browse from "./../pages/browse";
import Playlist from './../pages/playlist';

const Routes = () => (
  //Switch - Faz com que a aplicação pegue a primeira rota que encontrar, e não fique procurando um componente para a mesma URL
  //Route exact - Faz com que a URL seja exatamente a que está configurada no Route
  <Switch>
    <Route exact path="/" component={Browse} />
    <Route path="/playlists/:id" component={Playlist} />
  </Switch>
);

export default Routes;
