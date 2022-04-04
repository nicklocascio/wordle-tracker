import React from "react";
import ScoreForm from "./ScoreForm";
import Scorecard from "./Scorecard";

import "./home.css"

/*
General flow for user:
    - sign up
    - log in
    - go to profile
    - join group or create group
    - be able to search for existing groups and add yourself OR make new one
*/

const Home = () => {
    return (
        <div>
            <span className="title-green">
                G
            </span>
            <span className="title-yellow">
                O
            </span>
            <span className="title-green">
                L
            </span>
            <span className="title-yellow">
                F
            </span>
            <span className="title-green">
                L
            </span>
            <span className="title-yellow">
                E
            </span>
            <ScoreForm />
            <Scorecard />
        </div>
    );
};

export default Home;