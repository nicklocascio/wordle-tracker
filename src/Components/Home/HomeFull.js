import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import Parse from "parse";

import Title from "./Title";
import ScoreForm from "./ScoreForm";
import Scorecard from "./Scorecard";

const HomeFull = () => {
    const [golfer, setGolfer] = useState();

    // checking for authentication and setting golfer
    if(Parse.User.current() && Parse.User.current().authenticated()) {
        Parse.User.current().get("golfer").fetch().then((data) => {
            setGolfer(data);
            console.log(golfer);
            try {
                console.log(golfer.get("group"));
            } catch (error) {
                console.log(error);
            }
        });
    } else {
        return (
            <Redirect to="/" />
        );
    }

    return (
        <div>
            <Title />
            <ScoreForm />
            <Scorecard />
        </div>
    );
};

export default HomeFull;