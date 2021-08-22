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
import ActivatedAccount from "./pages/front/ActivatedAccount";
import SignUpArchitectFrom from "./components/front/SingUpArchitectForm/SignUpArchitectrFrom";
import SignUpArchitect from "./pages/front/SignUpArchitect";
import Pricing from "./pages/front/Pricing";
import Payment from "./pages/front/Payment";
import SignUpEngineer from "./pages/front/SignUpEngineer";
import SignUpPromoter from "./pages/front/SignUpPromoter";

function App() {
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");

    return (
        <>
            <Router basename="/">
                {username != null && (role === "Admin" || role === "Editor") ? (
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
                        <Route path="/SignUpArchitect" component={SignUpArchitect}/>
                        <Route path="/SignUpEngineer" component={SignUpEngineer}/>
                        <Route path="/SignUpPromoter" component={SignUpPromoter}/>
                        <Route path="/Pricing" component={Pricing}/>
                        <Route path="/Payment" component={Payment}/>
                        <Route path="/ActivatedAccount" component={ActivatedAccount}/>

                    </Switch>
                )}
            </Router>
        </>
    );
}

export default App;
