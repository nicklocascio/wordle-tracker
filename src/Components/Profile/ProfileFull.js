import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import Parse from "parse";

import { getAllGroups } from "../../Services/Group.service";

import GroupForm from "./GroupForm";

const ProfileFull = () => {
    // load groups
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        getAllGroups().then((data) => {
            setGroups(data);
        });
    }, []);

    // checking for authentication
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
            <div>
                <GroupForm user={user} groups={groups}/>
            </div>
        </div>
    );
};

export default ProfileFull;