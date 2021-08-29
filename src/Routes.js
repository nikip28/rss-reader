import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout";

const Home = lazy(() => import("./modules/home"));

const Routes = props => (
    <Router>
        <Layout>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/home" render={() => <Home {...props} />} />
                    <Route path="/" render={() => <Home {...props} />} />
                </Switch>
            </Suspense>
        </Layout>
    </Router>
);

export default Routes