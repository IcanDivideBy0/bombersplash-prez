import React from "react";
import { Switch, Route } from "react-router";

import { SocketProvider } from "modules/net";
import { PrezMaster, PrezSlave, Slides } from "modules/prez";

export default function Router() {
  return (
    <Switch>
      <Route path={process.env.PUBLIC_URL + "/slides"} component={Slides} />

      <Route
        path={process.env.PUBLIC_URL + "/master"}
        component={() => (
          <SocketProvider socketUrl={process.env.REACT_APP_SERVER_URL}>
            <PrezMaster />
          </SocketProvider>
        )}
      />
      <Route
        component={() => (
          <SocketProvider socketUrl={process.env.REACT_APP_SERVER_URL}>
            <PrezSlave />
          </SocketProvider>
        )}
      />
    </Switch>
  );
}
