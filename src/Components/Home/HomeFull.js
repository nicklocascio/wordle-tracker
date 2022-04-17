import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import Parse from "parse";

import { submitScore } from "../../Services/Golfer.service";

import Title from "./Title";
import ScoreForm from "./ScoreForm";
import Scorecard from "./Scorecard";

const HomeFull = () => {
    const [golfer, setGolfer] = useState();
    const [result, setResult] = useState();
    const [submitResult, setSubmitResult] = useState(false);

    useEffect(() => {
        if(result && submitResult) {
            console.log(result);
            const re = new RegExp('Wordle [0-9]{3} (([0-9]|X)/[0-9])')
            const match = re.exec(result);
            const score = match[2];
            console.log(match);
            console.log(match[2]);
            submitScore(golfer.id, score).then((result) => {

            })
            setSubmitResult(false);
        } else {
            setSubmitResult(false);
        }
    }, [result, submitResult]);

    const onChangeHandler = (e) => {
        setResult(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setSubmitResult(true);
    };

    // checking for authentication and setting golfer
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
            <Title />
            <ScoreForm 
                golfer={golfer}
                onChange={onChangeHandler}
                onSubmit={onSubmitHandler}
            />
        </div>
    );
};

export default HomeFull;