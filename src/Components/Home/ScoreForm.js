import React from "react";

const ScoreForm = () => {
    return (
        <div>
            <form>
                <label>Paste Your Wordle Result Here</label>
                <br />
                <textarea rows={12}></textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ScoreForm;