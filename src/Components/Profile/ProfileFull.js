import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import Parse from "parse";

import { getAllGroups, createGroup } from "../../Services/Group.service";
import { leaveGroup, joinGroup,  } from "../../Services/Golfer.service";

import GroupForm from "./GroupForm";

// ChGyEUmXgU

const ProfileFull = () => {
    // initialize all necessary state
    const [groups, setGroups] = useState([]);
    const [golfer, setGolfer] = useState();
    const [groupJoin, setGroupJoin] = useState();
    const [join, setJoin] = useState(false);
    const [groupCreate, setGroupCreate] = useState();
    const [create, setCreate] = useState(false);

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
        if(groupJoin && join) {
            joinGroup(golfer.id, groupJoin).then((result) => {
                setJoin(false);
                return result;
            });
        } else {
            setJoin(false);
        }
    }, [groupJoin, join]);

    // useEffect for creating a group
    useEffect(() => {
        if(groupCreate && create) {
            createGroup(groupCreate).then((result) => {
                setCreate(false);
                window.location.reload(true);
                return result;
            });
        } else {
            setCreate(false);
        }
    }, [groupCreate, create]);

    // if user leaves their group then call function and reload
    const onLeaveHandler = () => {
        leaveGroup(golfer.id).then((result) => {
            window.location.reload(true);
            return result;
        });
    };

    // update state on group selected change
    const onJoinChangeHandler = (e) => {
        setGroupJoin(e.target.value);
    };

    // set add state to true to trigger group join
    const onJoinSubmitHandler = (e) => {
        e.preventDefault();
        setJoin(true);
    };

    // update created group
    const onCreateChangeHandler = (e) => {
        setGroupCreate(e.target.value);
    };

    // trigger create on submission
    const onCreateSubmitHandler = (e) => {
        e.preventDefault();
        setCreate(true);
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
                    onLeave={onLeaveHandler} 
                    onJoinChange={onJoinChangeHandler}
                    onJoinSubmit={onJoinSubmitHandler}
                    onCreateChange={onCreateChangeHandler}
                    onCreateSubmit={onCreateSubmitHandler}
                />
            </div>
        </div>
    );
};

export default ProfileFull;