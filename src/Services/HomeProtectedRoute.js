import React from "react";
import { Redirect, Link } from "react-router-dom";

const HomeProtectedRoute = ({ component: Component, flag, ...rest }) => {
    return (
        <div>
            {flag ? (
                <Redirect to={rest.path} />
            ) : (
                <div>
                    <p>Get started by creating an account or logging in!</p>
                    <button><Link to="/register">Sign Up</Link></button>
                    <br />
                    <br />
                    <button><Link to="/login">Login</Link></button>
                </div>
            )}
        </div>
    );
};

export default HomeProtectedRoute;