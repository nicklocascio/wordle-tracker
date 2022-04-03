import { Link } from "react-router-dom";
import Parse from "parse";

const NavBar = () => {
    var loginStatus = Parse.User.current();
    var authStatus = {};
    var logoutStatus = {};
    if(loginStatus) {
        authStatus = {display: 'none'};
        logoutStatus = {display: ''};
    } else {
        authStatus = {display: ''};
        logoutStatus = {display: 'none'};
    }

    return (
        <nav>
            <ul className="navigation">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li style={authStatus}>
                    <Link to="/register">Sign Up</Link>
                </li>
                <li style={authStatus}>
                    <Link to="/login">Login</Link>
                </li>
                <li style={logoutStatus}>
                    <Link to="/logout">Log Out</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;