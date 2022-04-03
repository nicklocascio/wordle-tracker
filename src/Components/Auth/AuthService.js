import Parse from "parse";

export const createUser = (newUser) => {
    const user = new Parse.User();

    user.set("firstName", newUser.firstName);
    user.set("lastName", newUser.lastName);
    user.set("email", newUser.email);
    user.set("username", newUser.username);
    user.set("password", newUser.password);

    console.log(user);

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