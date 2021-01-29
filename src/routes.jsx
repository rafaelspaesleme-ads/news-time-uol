import React from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {ROUTES} from "./utils/constants/routes/Routes";

const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            {ROUTES.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))
            }
        </Switch>
    </BrowserRouter>
);

export default AppRoutes;