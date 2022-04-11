import Parse from "parse";

import { createGolfer } from "../../Services/Golfer.service";

// use an await to ensure that a golfer is created before setting the user pointer to that golfer
export async function createUser(newUser) {
    const user = new Parse.User();

    user.set("firstName", newUser.firstName);
    user.set("lastName", newUser.lastName);
    user.set("email", newUser.email);
    user.set("username", newUser.username);
    user.set("password", newUser.password);

    const golfer = await createGolfer(newUser.firstName, newUser.lastName);
    user.set("golfer", golfer);

    return user
        .signUp()
        .then((newUserSaved) => {
            return newUserSaved;
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
};

export const loginUser = (user) => {
    const userLogin = new Parse.User();
    
    userLogin.set("username", user.username);
    userLogin.set("password", user.password);

    return userLogin
        .logIn()
        .then((loggedIn) => {
            return loggedIn
        })
        .catch((error) => {
            alert(`Error: ${error.message}`)
        });
};