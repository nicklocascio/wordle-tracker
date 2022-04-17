import React from "react";

const ScoreForm = ({ golfer, onChange, onSubmit }) => {
    return (
        <div>
            {golfer !== undefined && (
                <div>
                    <form onSubmit={onSubmit}>
                        <label>Paste Your Wordle Result Here</label>
                        <br />
                        <textarea rows={12} onChange={onChange}></textarea>
                        <br />
                        <button type="submit" onSubmit={onSubmit}>Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ScoreForm;