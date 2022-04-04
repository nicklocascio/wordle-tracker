import React from "react";

import "./scorecard.css";

const Scorecard = () => {
    let headings = []
    for(let i = 1; i <= 18; i++) {
        if(i == 10) {
            headings.push("Out");
        }
        headings.push(i);
    }
    headings.push("In");
    headings.push("Total");
    headings.push("HCP");
    headings.push("NET");

    /*
    going to have to come up with something pretty intense for keys to be able to update the scorecard and also keep it persistent
    */

    return (
        <div>
            <div className="scorecard">
                <div className="line headings">
                    <span>
                        Hole
                    </span>
                    {headings.map((heading) => (
                        <span>
                            {heading}
                        </span>
                    ))}
                </div>
                <div className="line">
                    <span>
                        Nick
                    </span>
                    {headings.map((heading) => (
                        <span>
                            -
                        </span>
                    ))}
                </div>
                <div className="line">
                    <span>
                        Amy
                    </span>
                    {headings.map((heading) => (
                        <span>
                            -
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Scorecard;