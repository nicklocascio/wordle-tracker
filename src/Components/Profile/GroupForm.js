import React from "react";

const GroupForm = ({ golfer, groups, onChange, onSubmit, onLeave }) => {
    return (
        <div>
            {golfer !== undefined && (
                <div>
                    {golfer.get("group") ? (
                        <div>
                            <h4>You are in group: {golfer.get("group").get("name")}</h4>
                            <button onClick={onLeave}>Leave Group</button>
                        </div>
                    ) : (
                        <div>
                            <h2>Join a Group</h2>
                            <form onSubmit={onSubmit}>
                                <label htmlFor="group-finder">Select a group below</label>
                                <br />
                                <select name="group-finder" defaultValue={'DEFAULT'} onChange={onChange}>
                                    <option value="DEFAULT" disabled> -- groups -- </option>
                                    {groups && groups.map((group) => (
                                        <option key={group.id} value={group.id}>{group.get("name")}</option>
                                    ))}
                                </select>
                                <br />
                                <br />
                                <button type="submit" onSubmit={onSubmit}>Join</button>
                            </form>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}   

export default GroupForm;