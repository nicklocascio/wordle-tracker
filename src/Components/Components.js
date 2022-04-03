import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";

import NavBar from "./Navigation/NavBar";
import Home from "./Home/Home";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import AuthLogout from "./Auth/AuthLogout";
import Profile from "./Profile/Profile";
import ProfileFull from "./Profile/ProfileFull";

const Components = () => {
    return (
		<Router>
			<NavBar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/register" component={AuthRegister} />
				<Route path="/login" component={AuthLogin} />
				<Route path="/logout" component={AuthLogout} />
				<Route path="/profile" component={Profile} />
				<Route path="/user/:firstName/:lastName" component={ProfileFull} />
				<Redirect to="/" />
			</Switch>
		</Router>
    );
};

export default Components;