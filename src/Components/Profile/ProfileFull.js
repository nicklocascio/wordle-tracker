import React from "react";
import { Redirect, useParams } from "react-router-dom";
import Parse from "parse";

const ProfileFull = () => {
    const { firstName, lastName } = useParams();

    let user = null;
    if(Parse.User.current() && Parse.User.current().authenticated()) {
        user = Parse.User.current();
    } else {
        return (
            <Redirect to="/" />
        );
    }

    return (
        <div>
            <h1>
                Profile
            </h1>

            <h4>
                Name: {firstName} {lastName}
                <br />
                Email: {user.get("email")}
            </h4>
        </div>
    );
};

export default ProfileFull;