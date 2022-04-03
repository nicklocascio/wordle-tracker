import React from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ register, user, onChange, onSubmit }) => {
    return (
        <div>
            <form onSubmit={onSubmit} autoComplete="off">
                {register ? (
                    <h1>Register</h1>
                ): (
                    <h1>Login</h1>
                )}
                <p>Fill out the fields below</p>

                {register &&  (
                    <div>
                        <br />
                        <br />
                        <label htmlFor="firstName"><b>First Name</b></label>
                        <br />
                        <input 
                            type="text"
                            placeholder="Enter First Name"
                            name="firstName"
                            id="firstName"
                            value={user.firstName}
                            onChange={onChange}
                            required
                        />
                    </div>
                )}
                
                {register && (
                    <div>
                        <br />
                        <br />
                        <label htmlFor="lastName"><b>Last Name</b></label>
                        <br />
                        <input 
                            type="text"
                            placeholder="Enter Last Name"
                            name="lastName"
                            id="lastName"
                            value={user.lastName}
                            onChange={onChange}
                            required
                        />
                    </div>
                )}
                
                {register && (
                    <div>
                        <br />
                        <br />
                        <label htmlFor="email"><b>Email</b></label>
                        <br />
                        <input 
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            id="email"
                            value={user.email}
                            onChange={onChange}
                            required
                        />
                    </div>
                )}

                <div>
                    <br />
                    <br />
                    <label htmlFor="username"><b>Username</b></label>
                    <br />
                    <input 
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        id="username"
                        value={user.username}
                        onChange={onChange}
                        required
                    />
                </div>
                
                <div>
                    <br />
                    <br />
                    <label htmlFor="password"><b>Password</b></label>
                    <br />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={onChange}
                        required
                    />  
                </div>

                <br />
                <br />
                <button type="submit" onSubmit={onSubmit}>Submit</button>
            </form>
            {register ? (
                <div>
                    <p>
                        Already have an account? <Link to="/login">Login Here</Link>
                    </p>
                </div>
            ) : (
                <div>
                    <p>
                        Don't have an account? <Link to="/register">Create One Here</Link>
                    </p>
                </div>
            )}
        </div>
    );
};

export default AuthForm;