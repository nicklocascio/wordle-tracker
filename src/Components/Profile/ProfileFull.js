import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import Parse from "parse";

import { getAllGroups } from "../../Services/Group.service";
import { joinGroup, leaveGroup } from "../../Services/Golfer.service";

import GroupForm from "./GroupForm";

// ChGyEUmXgU

const ProfileFull = () => {
    // initialize all necessary state
    const [groups, setGroups] = useState([]);
    const [golfer, setGolfer] = useState();
    const [group, setGroup] = useState();
    const [add, setAdd] = useState(false);

    // load groups for form component
    useEffect(() => {
        getAllGroups().then((data) => {
            setGroups(data);
        });
    }, []);

    // params from protected route
    const { firstName, lastName } = useParams();

    // useEffect for joining a group
    useEffect(() => {
        if(group && add) {
            joinGroup(golfer.id, group).then((result) => {
                setAdd(false);
                return result;
            });
        } else {
            setAdd(false);
        }
    }, [group, add]);

    // update state on group selected change
    const onChangeHandler = (e) => {
        setGroup(e.target.value);
    };

    // set add state to true to trigger group join
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setAdd(true);
    };

    // if user leaves their group then call function and reload
    const onLeaveHandler = () => {
        leaveGroup(golfer.id).then((result) => {
            window.location.reload(true);
            return result;
        });
    };

    // checking for authentication
    if(Parse.User.current() && Parse.User.current().authenticated()) {
        Parse.User.current().get("golfer").fetch().then((data) => {
            setGolfer(data);
        });
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
                </h4>
            </div>
            <div>
                <GroupForm 
                    golfer={golfer} 
                    groups={groups} 
                    onChange={onChangeHandler}
                    onSubmit={onSubmitHandler}
                    onLeave={onLeaveHandler} 
                />
            </div>
        </div>
    );
};

export default ProfileFull;