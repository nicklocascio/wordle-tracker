import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

const ProfileProtectedRoute = ({ component: Component, flag, ...rest }) => {
    return (
        <div>
            {flag ? (
                <Redirect to={rest.path} />
            ) : (
                <div>
                    <p>You must log in or sign up to view this page</p>
                    <button><Link to="/register">Sign Up</Link></button>
                    <br />
                    <br />
                    <button><Link to="/login">Login</Link></button>
                </div>
            )}
        </div>
    )
}

export default ProfileProtectedRoute;