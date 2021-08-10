import React, { Suspense } from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import { Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Switch>
        {mainRoutes.map((route) => (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default Main;
