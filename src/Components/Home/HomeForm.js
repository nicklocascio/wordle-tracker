import React from "react";

const MainForm = () => {
    return (
        <div>
            <form>
                <label>Paste Your Wordle Result Here</label>
                <br />
                <textarea rows={12}></textarea>
            </form>
        </div>
    );
};

export default MainForm;