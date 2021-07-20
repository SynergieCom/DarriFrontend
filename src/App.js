import React from 'react'
import "./App.css";
import MainNavigation from "./ArchitekComponentAndPages/MainNavigation";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "./assets/demo/demo.css";
import "./assets/scss/paper-dashboard.scss?v=1.3.0";

import AuthLayout from "./layouts/Auth.js";
import AdminLayout from "./layouts/Admin.js";

function App() {
    const user = false;
    return (
        <>
            <BrowserRouter>
                <div>
                    {user ? (
                        <MainNavigation/>
                    ) : (
                        <Switch>
                            <Route
                                path="/auth"
                                render={(props) => <AuthLayout {...props} />}
                            />
                            <Route
                                path="/admin"
                                render={(props) => <AdminLayout {...props} />}
                            />
                            <Redirect to="/admin/dashboard"/>
                        </Switch>
                    )}
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
