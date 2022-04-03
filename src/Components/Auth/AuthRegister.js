import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { createUser } from "./AuthService";

import AuthForm from "./AuthForm";

const AuthRegister = () => {
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
    });

    const [add, setAdd] = useState(false);

    useEffect(() => {
        if(newUser && add) {
            createUser(newUser).then((userCreated) => {
                if(userCreated) {
                    alert(`${userCreated.get("firstName")}, you successfully registered!`);
                    setAdd(false);
                    window.location.href = "../Home/Home"
                }
                setAdd(false);
                <Redirect to="/" />
            });
        }
    }, [newUser, add]);

    const onChangeHandler = (e) => {
        e.preventDefault();
        const { name, value: newValue } = e.target;

        setNewUser({
            ...newUser,
            [name]: newValue
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setAdd(true);
    };

    return (
        <div>
            <AuthForm
                register={true}
                user={newUser}
                onChange={onChangeHandler}
                onSubmit={onSubmitHandler}
            />
        </div>
    )
};

export default AuthRegister;