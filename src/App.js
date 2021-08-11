import React from 'react'
import "./App.css";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "./assets/demo/demo.css";
import "./assets/scss/paper-dashboard.scss?v=1.3.0";

import AuthLayout from "./pages/dashboard/layouts/Auth.js";
import AdminLayout from "./pages/dashboard/layouts/Admin.js";
import Home from "./pages/front/Home";
import Login from "./pages/front/Login";
import NotFound from "./pages/front/404NotFound";
import ResetPassword from "./pages/front/ResetPassword";
import NewPassword from "./pages/front/NewPassword";
import SignUpCustomer from "./pages/front/SignUpCustomer";

function App() {
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");

    return (
        <>
            <Router basename="/">
                {username != null && (role==="Admin" || role==="Editor") ? (
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
                ) : (
                    <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/ResetPassword" component={ResetPassword}/>
                    <Route path="/ResetNewPassword" component={NewPassword}/>
                    <Route path="/SignUpCustomer" component={SignUpCustomer}/>
                    </Switch>
                )}
            </Router>
        </>
    );
}

export default App;
