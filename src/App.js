import React from 'react'
import "./App.css";
import MainNavigation from "./ArchitekComponentAndPages/MainNavigation";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "./assets/demo/demo.css";
import "./assets/scss/paper-dashboard.scss?v=1.3.0";

import AuthLayout from "./DashboardComponentsAndPages/layouts/Auth.js";
import AdminLayout from "./DashboardComponentsAndPages/layouts/Admin.js";
import Home from "./pages/front/Home";
import Login from "./pages/front/Login";
import Loader from "./components/front/Loader";

function App() {
    const user = true;
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");

    return (
        <>
            <Router basename="/">
                {user ? (
                    <>
                        <Switch>
                            <Route path="/" exact={true} component={Home}/>
                            <Route path="/Login" component={Login}/>
                        </Switch>
                    </>
                ) : (
                    <Switch>
                        <Redirect exact from="/" to="/admin/dashboard"/>
                        <Route
                            path="/auth"
                            render={(props) => <AuthLayout {...props} />}
                        />
                        <Route
                            path="/admin"
                            render={(props) => <AdminLayout {...props} />}
                        />
                    </Switch>
                )}
            </Router>
        </>
    );
}

export default App;
