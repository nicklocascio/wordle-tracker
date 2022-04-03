import Parse from "parse";

const AuthLogout = () => {
    Parse.User.logOut()
    .then((loggedOut) => {
        return loggedOut;
    })
    .catch((error) => {
        alert(`Error: ${error.message}`);
    });

    return window.location.href = "../Home/Home";
};

export default AuthLogout;