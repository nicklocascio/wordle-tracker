import React from "react";

import "./Scorecard.css";

const Scorecard = () => {
    return (
        <div>
            <article class="front9">
                <div class="hole">
                    <span>Front</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>Out</span>
                </div>
                <div class="score">
                    <span>Score</span>
                    <span>3</span>
                    <span>5</span>
                    <span>4</span>
                    <span>5</span>
                    <span>3</span>
                    <span>3</span>
                    <span>5</span>
                    <span>4</span>
                    <span>4</span>
                    <span class="sub">36</span>
                </div>
            </article>
        </div>
    );
};

export default Scorecard;