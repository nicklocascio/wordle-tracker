import React, { useState, useEffect } from "react";
import Parse from "parse";

import HomeProtectedRoute from "../../Services/HomeProtectedRoute";

import HomeFull from "./HomeFull";
import Title from "./Title";

/*
General flow for user:
    - sign up
    - log in
    - go to profile
    - join group or create group
    - be able to search for existing groups and add yourself OR make new one
*/

const Home = () => {
    const [flag, setFlag] = useState(false);
    const [path, setPath] = useState("");

    useEffect(() => {
        if(Parse.User.current() && Parse.User.current().authenticated()) {
            setPath(
                "/user/home/" +
                Parse.User.current().get("firstName") + "/" +
                Parse.User.current().get("lastName")
            );
            setFlag(true)
        } else {
            setFlag(false);
        }
    }, [flag, path]);

    return (
        <div>
            <Title />
            <HomeProtectedRoute exact path={path} flag={flag} component={HomeFull}/>
        </div>
    );
};

export default Home;