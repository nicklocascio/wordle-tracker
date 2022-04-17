import React from "react";

const ScoreForm = ({ onChange, onSubmit }) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Paste Your Wordle Result Here</label>
                <br />
                <textarea rows={12} onChange={onChange}></textarea>
                <br />
                <button type="submit" onSubmit={onSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default ScoreForm;