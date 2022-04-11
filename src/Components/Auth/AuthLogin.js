import React, { useState, useEffect } from "react";

import { loginUser } from "./AuthService";

import AuthForm  from "./AuthForm";

const AuthLogin = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const [login, setLogin] = useState(false);

    useEffect(() => {
        if(user && login) {
            loginUser(user).then((userLoggedIn) => {
                if(userLoggedIn) {
                    alert(`${userLoggedIn.get("firstName")}, you have logged in`);
                    setLogin(false);
                    window.location.href = "../Home/Home"
                }
                setLogin(false);
            });
        }
    }, [user, login]);

    const onChangeHandler = (e) => {
        e.preventDefault();
        const { name, value: newValue } = e.target;

        setUser({
            ...user,
            [name]: newValue
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setLogin(true);
    }

    return (
        <AuthForm 
            register={false}
            user={user}
            onChange={onChangeHandler}
            onSubmit={onSubmitHandler}
        />
    )
};

export default AuthLogin;