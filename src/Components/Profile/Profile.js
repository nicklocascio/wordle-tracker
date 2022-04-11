import React, { useState, useEffect } from "react";
import Parse from "parse";

import ProfileProtectedRoute from "../../Services/ProfileProtectedRoute";

import ProfileFull from "./ProfileFull";

// maybe create a player object for every user so that is more easily modified

const Profile = () => {
    const [flag, setFlag] = useState(false);
    const [path, setPath] = useState("");

    useEffect(() => {
        if(Parse.User.current() && Parse.User.current().authenticated()) {
            setPath(
                "/user/" +
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
            <ProfileProtectedRoute exact path={path} flag={flag} component={ProfileFull} />
        </div>
    );
};

export default Profile;